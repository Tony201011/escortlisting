import InputError from '@/Components/InputError';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import "../../../css/guest.css";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const { app_name, base_url } = usePage().props;

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AppLayout>
            <Head title="Forgot Password" />

            <div className="container-fluid p-0 login-page">
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
                        <div className="login-title mb-3">Forgot Password</div>
                        <div className="text-center mb-3 small-link">
                            Logged in? <Link href={route('login')} className="text-primary text-decoration-none">Sign in</Link>
                        </div>
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name='email' id="email" className="form-control" placeholder="Email address"
                                    value={data.email} onChange={e => setData('email', e.target.value)} required />
                                <InputError message={errors.email} className="mt-2 text-danger fw-medium" />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-red btn-lg" disabled={processing}>Send Password Reset Link</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
