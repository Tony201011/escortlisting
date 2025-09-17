import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function AppLayout({ children }) {
    const { errors, session, base_url, auth, config, header_menu, footer_menu } = usePage().props;
    const { post } = useForm([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState('');
    const logout = () => {
        post(route('logout'));
    }

    const mobileMenuHandler = () => {
        if (mobileMenuOpen == 'show') {
            setMobileMenuOpen('');
        } else {
            setMobileMenuOpen('show');
        }
    }

    useEffect(() => {
        if (session?.success) {
            toast.success(session.success, {
                duration: 8000,
            });
        } else if (session?.error) {
            toast.error(session.error, {
                duration: 8000,
            });
        }

        if (errors?.message) {
            toast.error(errors.message, {
                duration: 8000,
            });
        }

    }, [session]);

    return (<>
        <div className="header-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="site-logo">
                        <Link href={base_url}>
                            <img id="p_lt_ctl03_SiteBrandingImage_ucEditableImage_imgImage" src={base_url + '/images/header-logo.png?i=' + config.cache_key} />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={() => mobileMenuHandler()}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="free-days">
                        <a className="text-white" href="#">Get 21 days for free</a>
                    </div>
                    <div className={"collapse navbar-collapse justify-content-end " + mobileMenuOpen} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="https://www.realbabes.com.au/" title="Home"><i className="fa fa-home" aria-hidden="true"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="https://www.realbabes.com.au/about-us">Why {config.app.name}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Escorts</a>
                                <div className="dropdown-menu" id="dropdownMenuInNavBar" aria-labelledby="navbarDropdown" itemScope="" itemType="http://schema.org/SiteNavigationElement">
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/brisbane" itemProp="url">
                                        <span itemProp="name">Brisbane escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/sydney" itemProp="url">
                                        <span itemProp="name">Sydney escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/vic/melbourne" itemProp="url">
                                        <span itemProp="name">Melbourne escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/sa/adelaide" itemProp="url">
                                        <span itemProp="name">Adelaide escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/act/canberra" itemProp="url">
                                        <span itemProp="name">Canberra escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/wa/perth" itemProp="url">
                                        <span itemProp="name">Perth escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nt/darwin" itemProp="url">
                                        <span itemProp="name">Darwin escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/gold-coast" itemProp="url">
                                        <span itemProp="name">Gold Coast escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/sunshine-coast" itemProp="url">
                                        <span itemProp="name">Sunshine Coast escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/newcastle" itemProp="url">
                                        <span itemProp="name">Newcastle escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/cairns" itemProp="url">
                                        <span itemProp="name">Cairns escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/tas" itemProp="url">
                                        <span itemProp="name">Tasmania escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/on-tour" itemProp="url">
                                        <span itemProp="name">Touring escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/directory" itemProp="url">
                                        <span itemProp="name">Escorts directory</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/search" itemProp="url">
                                        <span itemProp="name">Search for escorts</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/near-me" itemProp="url">
                                        <span itemProp="name">Escorts near me</span>
                                    </a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/" itemProp="url">
                                        <span itemProp="name">View all our escorts</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="https://www.realbabes.com.au/blog/">Blog</a>
                            </li>
                            {
                                (auth.user == null) ? (<>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" href={route('register')}>Signup</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" href={route('login')}>Login</Link>
                                    </li>
                                </>) : (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{auth.user.name}</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Dashboard</a>
                                            <a className="dropdown-item" href="#">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Settings</a>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="featured-navbar">
            <div className="container">
                <div className="quick-locations-label">Browse by City:</div>
                <div className="quick-locations-menu">
                    <ul>
                        <li>
                            <a href="/Directory/SA/Adelaide/5000/Any/All/" className="">Adelaide</a>
                        </li>
                        <li>
                            <a href="/Directory/QLD/Brisbane/4000/Any/All/" className="">Brisbane</a>
                        </li>
                        <li>
                            <a href="/Directory/QLD/Cairns/4870/Any/All/" className="">Cairns</a>
                        </li>
                        <li>
                            <a href="/Directory/ACT/Canberra/2600/Any/All/" className="">Canberra</a>
                        </li>
                        <li>
                            <a href="/Directory/NT/Darwin/0800/Any/All/" className="">Darwin</a>
                        </li>
                        <li>
                            <a href="/Directory/QLD/Gold-Coast/4217/Any/All/" className="">Gold Coast</a>
                        </li>
                        <li>
                            <a href="/Directory/TAS/Hobart/7000/Any/All/" className="">Hobart</a>
                        </li>
                        <li>
                            <a href="/Directory/VIC/Melbourne/3000/Any/All/" className="">Melbourne</a>
                        </li>
                        <li>
                            <a href="/Directory/NSW/Newcastle/2300/Any/All/" className="">Newcastle</a>
                        </li>
                        <li>
                            <a href="/Directory/WA/Perth/6000/Any/All/" className="">Perth</a>
                        </li>
                        <li>
                            <a href="/Directory/NSW/Sydney/2000/Any/All/" className="">Sydney</a>
                        </li>
                        <li>
                            <a href="/Directory/QLD/Townsville/4810/Any/All/" className="">Townsville</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="listing-search-top">
            <div className="container">
                <div className="directory-search-module">
                    <div id="advertiser-location-search-module">
                        <div className="advertiser-search advertiser-search--basic">
                            <form className="form" id="basic-location-search" style={{ display: 'block' }}>
                                <div className="search-filters">
                                    <div style={{ position: 'relative' }}>
                                        <div className="row">
                                            <div className="filter-input col-md-6">
                                                <label htmlFor="location" className="control-label">Location</label>
                                                <input className="form-control" name='location' id="location" placeholder="Enter a location to find local escorts" />
                                            </div>
                                            <div className="filter-advance col-md-4">
                                                <div className="control-label label-placeholder"></div>
                                                <input type="submit" value="Find Escorts" className="btn btn-primary submit-search" />
                                                <a className="btn btn-link no-hover-underline red-col">
                                                    Advanced search
                                                </a>
                                            </div>
                                            <div className="filter-advance col-md-2">
                                                <div className="control-label label-placeholder"></div>
                                                <a href="#" className="btn btn-default btn-block text-white search-toggle-button" id="switch-search-to-username">Search by Name</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {children}

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <ul className="footer-links list-inline">
                            <li>
                                <a href="https://www.realbabes.com.au/about-us" title="About us">About us</a>
                            </li>
                            <li>
                                <a href="https://www.realbabes.com.au/escorts-adult-industry-links" title="Links for escorts about the adult industry">Links</a>
                            </li>
                            <li>
                                <a href="https://www.realbabes.com.au/terms-of-use" title="Terms of use">Terms of use</a>
                            </li>
                            <li>
                                <a href="https://www.realbabes.com.au/privacy-policy" title="Privacy">Privacy</a>
                            </li>
                            <li>
                                <a href="https://www.realbabes.com.au/contact-us" title="Contact us">Contact us</a>
                            </li>
                        </ul>
                        <p className="bold" style={{ fontSize: '11px' }}>this site is restricted to persons 18 years and over</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
