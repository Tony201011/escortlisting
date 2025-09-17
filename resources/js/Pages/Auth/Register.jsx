import InputError from '@/Components/InputError';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import "../../../css/guest.css";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const { app_name, base_url } = usePage().props;

    const submit = (e) => {
        e.preventDefault();

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
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name='name' id="name" className="form-control" placeholder="Name"
                                    value={data.name} onChange={e => setData('name', e.target.value)} required autoFocus />
                                <InputError message={errors.name} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name='email' id="email" className="form-control" placeholder="Email address"
                                    value={data.email} onChange={e => setData('email', e.target.value)} required />
                                <InputError message={errors.email} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name='password' id="password" className="form-control" placeholder="Password"
                                    value={data.password} onChange={e => setData('password', e.target.value)} required />
                                <InputError message={errors.password} className="mt-2 text-danger fw-medium" />
                                <div className="form-text">At least 8 characters long.</div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                <input type="password" name='password_confirmation' id="password_confirmation" className="form-control" placeholder="Confirm Password"
                                    value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} required />
                                <InputError message={errors.password_confirmation} className="mt-2 text-danger fw-medium" />
                            </div>
                        
                            <div className="mb-4">
                                <label htmlFor='phone' className="form-label">Phone</label>
                                <input type="text" name='phone' id="phone" className="form-control" placeholder="Phone"
                                    value={data.phone} onChange={e => setData('phone', e.target.value)} />
                                <InputError message={errors.phone} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor='suburb' className="form-label">Suburb (your primary main work suburb, select it from the list while typing)</label>
                                <input type="text" name='suburb' id="suburb" className="form-control" placeholder="Suburb"
                                    value={data.suburb} onChange={e => setData('suburb', e.target.value)} />
                                <InputError message={errors.suburb} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor='refferal_code' className="form-label">Refferal Code (if any)</label>
                                <input type="text" name='refferal_code' id="refferal_code" className="form-control" placeholder="Refferal Code"
                                    value={data.refferal_code} onChange={e => setData('refferal_code', e.target.value)} />
                                <InputError message={errors.refferal_code} className="mt-2 text-danger fw-medium" />
                                <div className="form-text">If you were referred by someone, please enter their code here.</div>
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
