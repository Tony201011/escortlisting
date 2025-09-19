import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import AppLayout from '@/Layouts/AppLayout';
import Sidebar from '@/Components/Sidebar';
import '../../../css/profile.css';
import { useState } from 'react';

export default function Edit({ mustVerifyEmail, status, propData }) {
    const app_name = usePage().props.app_name;
    const [showAction, setShowAction] = useState({
        changePassword: false,
        deleteAccount: false
    });

    return (
        <AppLayout>
            <Head title="Profile" />

            <div className="container mt-80 profileedit-page">
                <div className="row">
                    <Sidebar active="profile" />

                    <main className="col-md-9 ms-sm-auto px-md-4 py-4 dashb-main">
                        <div className='row'>
                            <div className='col-12'>
                                <h2>My Account</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        propData={propData}
                                        className="max-w-xl"
                                    />
                                </div>

                                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                                    <div className='text-center'>
                                        <a className='cursor-pointer' 
                                        onClick={() => setShowAction({ ...showAction, changePassword: !showAction.changePassword })}>Show/hide change Password</a>
                                    </div>
                                    {
                                        showAction.changePassword && (
                                            <UpdatePasswordForm className="max-w-xl" />
                                        )
                                    }
                                </div>

                                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                                    <div className='text-center'>
                                        <a className='cursor-pointer' 
                                        onClick={() => setShowAction({ ...showAction, deleteAccount: !showAction.deleteAccount })}>Show/hide delete Account</a>
                                    </div>
                                    {
                                        showAction.deleteAccount && (
                                            <DeleteUserForm className="max-w-xl" />
                                        )
                                    }
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                                    <h2>Is My Information Safe?</h2>
                                    <div className=''>
                                        Absolutely. We work very hard to earn and keep your trust. {app_name} will never send you spam or sell your personal information. It's all in our Privacy Notice
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
