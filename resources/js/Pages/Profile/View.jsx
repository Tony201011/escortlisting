import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import '../../../css/profile.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { format } from "date-fns";
import Sidebar from '@/Components/Sidebar';

export default function View({ propData }) {
    const base_url = usePage().props.base_url;
    const [imagePreview, setImagePreview] = useState(base_url + "/images/no-image.png");

    const handleProfileImage = (e) => {
        setImagePreview(URL.createObjectURL(e.target.files[0]));
        axios.post(route('api.profile.image.update') + '?q=profile', e.target.files)
            .then((response) => {
                toast.success(response.data.message);
            }).catch((err) => {
                toast.error(err.response.data.message);
            });
    }

    useEffect(() => {
        if (propData.user.profile_image != null && propData.user.profile_image != '') {
            setImagePreview(base_url + "/uploads/users/" + propData.user.profile_image);
        }
    }, [propData]);

    return (
        <AppLayout>
            <Head title="My Account" />

            <div className="container mt-80 profile">
                <div className="row">
                    <Sidebar active="profile" />

                    <main className="col-md-9 ms-sm-auto px-md-4 py-4 dashb-main">
                        <div className='row'>
                            <div className='col-12'>
                                <h2>My Account</h2>
                            </div>
                            <div className="col-12">
                                <div className="card profile-card p-4 text-center">
                                    <div className='d-flex justify-content-end'>
                                        <Link href={route('profile.edit')} className="btn btn-primary btn-sm mb-2 no-hover-underline">Edit</Link>
                                    </div>

                                    <div className="profile-pic mb-3">
                                        <img src={imagePreview} alt="Profile Picture" className="profile-img mb-3" />
                                    </div>
                                    <div className="upload-btn-wrapper position-relative">
                                        <form encType="multipart/form-data">
                                            <button type='button' className="btn btn-outline-primary btn-sm" onClick={() => document.getElementById('profileImage').click()}>Update Profile Image</button>
                                            <input type="file" accept="image/*" name='profileImage' id='profileImage' onChange={(e) => handleProfileImage(e)} />
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <h4 className="mb-1">{propData.user.name}</h4>
                                        <p className="mb-0"><strong>Member Since:</strong> {format(propData.user.created_at, 'dd MMMM yyyy')}</p>
                                        <p className="mb-0"><strong>Email:</strong> {propData.user.email}</p>
                                        <p className="mb-0"><strong>Phone:</strong> {propData.user.phone}</p>
                                        {
                                            propData.user.isMember && (
                                                <p className="mb-0"><strong>Own Business:</strong> {(propData.user.own_business) ? 'Yes' : 'No'}</p>
                                            )
                                        }
                                        {
                                            propData.user.isBroker && (<>
                                                <h5 className='mt-3'>Business Information</h5>
                                                <p className="mb-0"><strong>Business Name:</strong> {propData.user.broker.business_name}</p>
                                                <p className="mb-0"><strong>Business Region Area:</strong> {propData.user.broker.business_city}</p>
                                                <p className="mb-0"><strong>Business Address:</strong> {propData.user.broker.business_address}</p>
                                                {
                                                    propData.user.broker.business_description && (<p className="mb-0"><strong>Business Description:</strong> {propData.user.broker.business_description}</p>)
                                                }
                                            </>)
                                        }
                                    </div>

                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppLayout>
    );
}
