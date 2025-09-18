import { Link, usePage } from '@inertiajs/react';
import '../../css/sidebar.css';
export default function Sidebar({ active }) {
    const { auth } = usePage().props;

    return (
        <nav className="col-md-3 d-md-block sidebar-auth p-3 dashb-nav mt-4">
            <div id="accordion-leftNav" className="accordion show">
                <div className="accordion-item">
                    <Link className={"accordion-link no-text-dec" + (active == 'dashboard' ? ' active' : '')} href={route('dashboard')} id="dashboardLink">
                        <i className="fa fa-dashboard"></i><span>Dashboard</span>
                    </Link>
                </div>

                <div className="accordion-group">
                    <div className="accordion-item" id="subnav01">
                        <button type="button" className={"accordion-button" + (active != "mylisting" ? " collapsed" : "")} data-bs-toggle="collapse" data-bs-target="#collapse01" aria-expanded="true" aria-controls="collapse01">
                            <i className="bbsIcon filled bbs-dollar"></i> Selling
                        </button>
                    </div>
                    <div id="collapse01" className={"accordion-body collapse" + (active === "mylisting" ? " show" : "")} data-bs-parent="#accordion-leftNav" aria-labelledby="subnav01">
                        <div className="accordion-inner">
                            <Link href={route('home')} className={"list-group-item" + (active === "mylisting" ? " active" : "")}>My Listings</Link>
                            <div className="list-group-btn navBtn col-md-12">
                                <Link href={route('home')} role="button" className="btn btn-primary btn-s col-md-12 addListingBtn no-hover-underline">Add a New Listing</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="accordion-group">
                    <div className="accordion-item" id="subnav02">
                        <button type="button" className={"accordion-button" + ((active != "savelisting" && active != "savesearch") ? " collapsed" : "")} data-bs-toggle="collapse" data-bs-target="#collapse02" aria-expanded="false" aria-controls="collapse02">
                            <i className="bbsIcon filled bbs-search"></i> <span>Searching</span>
                        </button>
                    </div>
                    <div id="collapse02" className={"accordion-body collapse" + ((active === "savelisting" || active === "savesearch") ? " show" : "")} data-bs-parent="#accordion-leftNav" aria-labelledby="subnav02">
                        <div className="accordion-inner">
                            <Link href={route('home')} className={"list-group-item" + (active === "savelisting" ? " active" : "")}>My Saved Listings</Link>
                            <Link href={route('home')} className={"list-group-item " + (active === "savesearch" ? " active" : "")}>My Saved Searches</Link>
                        </div>
                    </div>
                </div>

                <div className="accordion-group">
                    <div className="accordion-item" id="subnav05">
                        <button type="button" className={"accordion-button" + ((active != "listingInquiry" && active != "listingMyInquiry" && active != "brokerInquiry") ? " collapsed" : "")} data-bs-toggle="collapse" data-bs-target="#collapse05" aria-expanded="false" aria-controls="collapse05">
                            <i className="bbsIcon filled bbs-mail"></i> Message Center

                        </button>
                    </div>
                    <div id="collapse05" className={"accordion-body collapse" + ((active === "listingInquiry" || active === "listingMyInquiry" || active === "brokerInquiry") ? " show" : "")} data-bs-parent="#accordion-leftNav" aria-labelledby="subnav05">
                        <div className="accordion-inner">
                            <Link href={route('home')} className={"list-group-item " + (active === "listingMyInquiry" ? " active" : "")}>My Inquiries</Link>
                            <Link href={route('home')} className={"list-group-item " + (active === "listingInquiry" ? " active" : "")}>My Listing Inquiries</Link>
                        </div>
                    </div>
                </div>
                <div className="accordion-group">
                    <div className="accordion-item" id="subnav07">
                        <button type="button" className={"accordion-button" + ((active != "profile" && active != "billingInfo") ? " collapsed" : "")} data-bs-toggle="collapse" data-bs-target="#collapse07" aria-expanded="false" aria-controls="collapse07">
                            <i className="bbsIcon filled bbs-person"></i> Account
                        </button>
                    </div>
                    <div id="collapse07" className={"accordion-body collapse" + ((active === "profile" || active === "billingInfo") ? " show" : "")} data-bs-parent="#accordion-leftNav" aria-labelledby="subnav07">
                        <div className="accordion-inner">
                            <Link href={route('home')} className={"list-group-item" + (active === "profile" ? " active" : "")}>My Account</Link>
                            <Link href={route('home')} className={"list-group-item" + (active === "billingInfo" ? " active" : "")}>My Billing Information</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}