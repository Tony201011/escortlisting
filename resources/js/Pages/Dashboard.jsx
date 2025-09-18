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
                                    <h5>Total Listings</h5>
                                    <h3>{propData.total_listing}</h3>
                                    <Link href={route('home')} className="btn btn-default border no-hover-underline">My Listings</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content-box">
                                    <h5>Listing Inquiries</h5>
                                    <h3>{propData.listing_inquiries}</h3>
                                    <Link href={route('home')} className="btn btn-default border no-hover-underline">My Listing Inquiries</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content-box">
                                    <h5>My Inquiries</h5>
                                    <h3>{propData.my_inquiries}</h3>
                                    <Link href={route('home')} className="btn btn-default border no-hover-underline">My Inquiries</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h5><Link href={route('home')} className="no-hover-underline">🔍 My Saved Searches</Link></h5>
                                <p>Quickly find businesses each time you search.</p>

                                <h5><Link href={route('profile.edit')} className="no-hover-underline">📧 Manage Email</Link></h5>
                                <p>Choose how often you receive alerts and emails.</p>
                            </div>
                            <div className="col-md-6">
                                <h5><Link href={route('home')} className="no-hover-underline">💙 My Saved Listings</Link></h5>
                                <p>Keep an eye on listings you're interested in.</p>

                                <h5>🏢 Franchise Recommendations</h5>
                                <p>Get personalized franchise suggestions.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppLayout>
    );
}
