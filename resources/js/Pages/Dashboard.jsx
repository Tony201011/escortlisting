import Sidebar from '@/Components/Sidebar';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ ...pageProps }) {
    const propData = pageProps.propData;
    const app_name = pageProps.app_name;
    const user = pageProps.auth.user;

    return (
        <AppLayout>
            <Head title="Dashboard" />

            <div className="container mt-80">
                <div className="row">
                    <Sidebar active="dashboard" />

                    <main className="col-md-9 ms-sm-auto px-md-4 py-4 dashb-main">
                        <h2>{app_name}</h2>
                        <p>Welcome back, {user?.name}.</p>

                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="content-box">
                                    <h5>Total Photos Post</h5>
                                    <h3>12</h3>
                                    <Link href={route('home')} className="btn btn-default border no-hover-underline">My Photos</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content-box">
                                    <h5>Total Views</h5>
                                    <h3>125</h3>
                                    <Link href={route('home')} className="btn btn-default border no-hover-underline">My Photo Views</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4 mt-4">
                            <div className="col-md-6">
                                <h5><Link href={route('home')} className="no-hover-underline">🔍 Post new photo</Link></h5>
                                <p>Quickly find escorts each time you search.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppLayout>
    );
}
