import InputError from '@/Components/InputError';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import "../../../css/guest.css";
import { useRef, useState } from 'react';
import axios from 'axios';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        suburb: '',
        // refferal_code: '',
        city: '',
        state: '',
        zipcode: '',
        latitude: '',
        longitude: '',
        eighteenplus: 0,
    });
    
    const [customErrors, setCustomErrors] = useState({});
    const customErrorsLabel = {
        name: 'Please enter your name',
        email: 'Please enter a valid email address',
        password: 'Please enter a password',
        password_confirmation: 'Password confirmation does not match',
        phone: 'Please enter your phone number',
        suburb: 'Please select your suburb from the list',
        eighteenplus: 'Please confirm if you are 18 years or older',
    };

    const { app_name, base_url } = usePage().props;

    const [suburbs, setSuburbs] = useState([]);

    const [searchLocation, setSearchLocation] = useState(false);

    const debounceTimer = useRef(null);

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);

        setCustomErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
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
        setData((prevData) => ({ ...prevData, suburb: suburbs.address, city: suburbs.locality, state: suburbs.state, 
            zipcode: suburbs.postcode, latitude: suburbs.lat, longitude: suburbs.long }));
        setSuburbs([]);
        setSearchLocation(true);
    };

    const submit = (e) => {
        e.preventDefault();

        let is_error = false;

        Object.keys(customErrorsLabel).forEach((key) => {
            if (!data[key]) {
                if (!is_error) {
                    document.getElementById(key).focus();
                }
                is_error = true;
                setCustomErrors((prevErrors) => ({
                    ...prevErrors,
                    [key]: customErrorsLabel[key],
                }));
            } else if (key == 'password' && data[key] && data[key].length < 8) {
                if (!is_error) {
                    document.getElementById(key).focus();
                }
                is_error = true;
                setCustomErrors((prevErrors) => ({
                    ...prevErrors,
                    [key]: 'Password must be at least 8 characters long',
                }));
            } else {
                setCustomErrors((prevErrors) => ({
                    ...prevErrors,
                    [key]: '',
                }));
            }
        });

        if (is_error) {
            return;
        }

        if (!searchLocation) {
            return;
        }

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AppLayout>
            <Head title="Register" />

            <div className="container-fluid p-0 register-page">
                <div className="row justify-content-center illustration-container m-0">
                    <div className="col-12 p-0">
                        <img src={base_url + "/images/banner.jpg"} alt="Illustration" className="illustration" />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-12 mt-4">
                            <h1 className="hero-text">Home of the Independent Escort</h1>
                            <p>Find 100% real escorts and babes in your area. All our profiles are genuine, real and verified. Australia's fastest growing escort directory {app_name}</p>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="login-box">
                        <div className="login-title mb-3">Sign up</div>
                        <div className="text-center mb-3 small-link">
                            Already have an account? <Link href={route('login')} className="text-primary text-decoration-none">Sign in</Link>
                        </div>
                        
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name='name' id="name" className="form-control" placeholder="Name"
                                    value={data.name} onChange={e => handleDataChange(e)} autoFocus />
                                <InputError message={errors.name || customErrors.name} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name='email' id="email" className="form-control" placeholder="Email address"
                                    value={data.email} onChange={e => handleDataChange(e)} />
                                <InputError message={errors.email || customErrors.email} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name='password' id="password" className="form-control" placeholder="Password"
                                    value={data.password} onChange={e => handleDataChange(e)} />
                                <InputError message={errors.password || customErrors.password} className="mt-2 text-danger fw-medium" />
                                <div className="form-text">At least 8 characters long.</div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                <input type="password" name='password_confirmation' id="password_confirmation" className="form-control" placeholder="Confirm Password"
                                    value={data.password_confirmation} onChange={e => handleDataChange(e)} />
                                <InputError message={errors.password_confirmation || customErrors.password_confirmation} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor='phone' className="form-label">Phone</label>
                                <input type="text" name='phone' id="phone" className="form-control" placeholder="Phone"
                                    value={data.phone} onChange={e => handleDataChange(e)} />
                                <InputError message={errors.phone || customErrors.phone} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-4 position-relative">
                                <label htmlFor='suburb' className="form-label">Suburb (your primary main work suburb, select it from the list while typing)</label>
                                <input type="text" name='suburb' id="suburb" className="form-control" placeholder="Suburb"
                                    value={data.suburb} onChange={e => handleDataChange(e)}
                                    onKeyUp={(e) => handleSuburbSearch(e)} />
                                <InputError message={errors.suburb || customErrors.suburb} className="mt-2 text-danger fw-medium" />
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

                            {/* <div className="mb-4">
                                <label htmlFor='refferal_code' className="form-label">Refferal Code (if any or leave blank)</label>
                                <input type="text" name='refferal_code' id="refferal_code" className="form-control" placeholder="Refferal Code"
                                    value={data.refferal_code} onChange={e => handleDataChange(e)} />
                                <InputError message={errors.refferal_code || customErrors.refferal_code} className="mt-2 text-danger fw-medium" />
                                <div className="form-text">If you were referred by someone, please enter their code here.</div>
                            </div> */}

                            <div className="mb-4">
                                <input type="checkbox" name='eighteenplus' id="eighteenplus" className="form-check-input me-2" 
                                    checked={data.eighteenplus} onChange={e => setData('eighteenplus', e.target.checked ? 1 : 0)} />
                                <label htmlFor='eighteenplus' className="form-check-label">I confirm that I am 18 years or older</label>
                                <InputError message={errors.eighteenplus || customErrors.eighteenplus} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-red btn-lg" disabled={processing}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
