import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useRef, useState } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    propData,
    className = '',
}) {
    // const user = usePage().props.auth.user;
    const user = propData.user;
    const base_url = usePage().props.base_url;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone: user.phone,
            suburb: user.suburb,
            city: user.city,
            state: user.state,
            zipcode: user.zipcode,
            latitude: user.latitude,
            longitude: user.longitude,
        });

    const [suburbs, setSuburbs] = useState([]);

    const [searchLocation, setSearchLocation] = useState(true);

    const debounceTimer = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        if (!searchLocation) {
            return;
        }

        patch(route('profile.update'));
    };

    const handleSuburbSearch = (e) => {
        setSuburbs([]);
        if (e.target.value == '') {
            return;
        }

        setSearchLocation(false);

        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
            if (e.target.value.length < 3) return;
            changeLocation();
        }, 600);
    };

    const changeLocation = () => {
        axios.post(route('api.business.location'), { location: data.suburb }).then((response) => {
            setSuburbs(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleSuburbClick = (suburbs) => {
        console.log(suburbs);
        setData((prevData) => ({
            ...prevData, suburb: suburbs.address, city: suburbs.locality, state: suburbs.state,
            zipcode: suburbs.postcode, latitude: suburbs.lat, longitude: suburbs.long
        }));
        setSuburbs([]);
        setSearchLocation(true);
    };


    return (<>
        <div className="login-title mb-3">Profile Information</div>

        <form onSubmit={submit} encType="multipart/form-data">
            <div className="mb-3">
                <InputLabel htmlFor="name" value="Name" className="form-label" />

                <TextInput
                    id="name"
                    className="form-control"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                    isFocused
                    autoComplete="name"
                />

                <InputError className="mt-2 text-danger fw-medium" message={errors.name} />
            </div>

            <div className="mb-4">
                <InputLabel htmlFor="email" value="Email" className='form-label' />

                <TextInput
                    id="email"
                    type="email"
                    className="form-control"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                    autoComplete="username"
                />

                <InputError className="mt-2 text-danger fw-medium" message={errors.email} />
            </div>

            <div className="mb-3">
                <InputLabel htmlFor="phone" value="Phone" className="form-label" />

                <TextInput
                    id="phone"
                    className="form-control"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    required
                    autoComplete="phone"
                />

                <InputError className="mt-2 text-danger fw-medium" message={errors.phone} />
            </div>

            <div className="mb-3 position-relative">
                <InputLabel htmlFor="suburb" value="Suburb" className="form-label" />

                <TextInput
                    id="suburb"
                    className="form-control"
                    value={data.suburb}
                    onChange={(e) => setData('suburb', e.target.value)}
                    onKeyUp={(e) => handleSuburbSearch(e)}
                    required
                    autoComplete="suburb"
                />

                <InputError className="mt-2 text-danger fw-medium" message={errors.suburb} />
                <div className='autocomplete-box suburb-suggestions'>
                    {
                        suburbs.length > 0 && Object.keys(suburbs).map((suburb, index) => (
                            <div key={index} className="autocomplete-item" onClick={() => handleSuburbClick(suburbs[suburb])}>
                                {suburbs[suburb].address}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="mb-4">
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-red btn-lg" disabled={processing}>Save Changes</button>
            </div>
        </form>
    </>);
}
