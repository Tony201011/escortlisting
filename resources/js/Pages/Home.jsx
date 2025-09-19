import AppLayout from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import "../../css/home.css";
import { useState } from "react";

export default function Home({ ...props }) {
    // console.log(props);
    const [searchByName, setSearchByName] = useState(false);

    return (
        <AppLayout>
            <Head title="Home" />

            <div className="container-fluid p-0 home-page">
                <div className="row justify-content-center illustration-container m-0">
                    <div className="col-12 p-0">
                        <img src={props.base_url + "/images/banner.jpg"} alt="Illustration" className="illustration" />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-12 mt-4">
                            <h1 className="hero-text">Home of the Independent Escort</h1>
                            <p>Find 100% real escorts and babes in your area. All our profiles are genuine, real and verified. Australia's fastest growing escort directory {props.app_name}</p>

                            <div className="search-bar col-12">
                                <div className="dropdown mb-3">
                                    <button className="btn filter-submit dropdown-toggle btn-danger" style={{ color: "#fff !important" }} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Escorts by city or region
                                    </button>
                                    <div className="dropdownMenuButton2 dropdown-menu" aria-labelledby="dropdownMenuButton2" x-placement="top-start">
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/brisbane">Brisbane escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/vic/melbourne">Melbourne escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/sydney">Sydney escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/wa/perth">Perth escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/sa/adelaide">Adelaide escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/gold-coast">Gold Coast escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/act/canberra">Canberra escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/newcastle">Newcastle escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/sunshine-coast">Sunshine Coast escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/tas">Tasmania escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/cairns">Cairns escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nt/darwin">Darwin escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/">View all our escorts</a>
                                        <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/near-me">Escorts near me</a>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-6 position-relative">
                                            <i className="fa fa-search"></i>
                                            {
                                                searchByName ? (
                                                    <input type="text" className="form-control searchInput" name="searchInputName" id="searchInputName" placeholder="Search by Name" />
                                                ) : (<>
                                                    <input type="text" className="form-control searchInput" name="searchInputLocation" id="searchInputLocation" placeholder="A city or postcode" />
                                                    <select className="distance position-absolute cursor-pointer" defaultValue={5}>
                                                        <option value={0}>within 0 km</option>
                                                        <option value={5}>within 5 km</option>
                                                        <option value={10}>within 10 km</option>
                                                        <option value={20}>within 20 km</option>
                                                        <option value={50}>within 50 km</option>
                                                    </select>
                                                </>)
                                            }
                                        </div>
                                        <div className="col-md-2">
                                            <button type="submit" className="btn btn-danger w-100 filter-submit">Search</button>
                                        </div>
                                        <div className="col-md-2">
                                            {
                                                searchByName ? (
                                                    <button type="button" className="btn btn-primary w-100 filter-submit"
                                                    onClick={() => setSearchByName(false)}>Search By Name</button>
                                                ) : (
                                                    <button type="button" className="btn btn-primary w-100 filter-submit"
                                                    onClick={() => setSearchByName(true)}>Search By Location</button>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-12">
                                            <a href="#" className="d-block mt-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#filterModal">More Filters</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" id="mainContainer">
                    <nav aria-label="breadcrumb">
                        {/* <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Escorts</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">VIC</a>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">Melbourne</li>
                        </ol> */}
                    </nav>

                    <h2 className="text-center mb-4">Popular {props.app_name} 100% real and genuine escorts.</h2>
                    <div className="row ecs-list">
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                            <div className="card shadow rounded">
                                <div className="availableNow row no-gutters">
                                    <div className="col">Available now</div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                <div className="cardInfo">
                                    <h4 className="d-block pink strong cardName">Becca</h4>
                                    <h6 className="cardInfoRegion">
                                        <strong>Southbank</strong>
                                    </h6>
                                    <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                </div>
                                <div className="cardNameBtn text-right">
                                    <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "25px" }}>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/qld/brisbane">Brisbane escorts</a></div>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3"><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/vic/melbourne">Melbourne escorts</a></div>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/nsw/sydney">Sydney escorts</a></div>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/wa/perth">Perth escorts</a></div>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/sa/adelaide">Adelaide escorts</a></div>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/qld/gold-coast">Gold coast escorts</a></div>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/act/canberra">Canberra escorts</a></div>
                        <div className="col-6 col-md-3 col-lg-4 col-xl-3 dropdown">
                            <button className="btn btn-outline-secondary purple btn-sm col-12 dropdown-toggle" style={{ marginBottom: "6px" }} type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Other regions
                            </button>
                            <div className="dropdownMenuButton3 dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/sunshine-coast">Sunshine Coast escorts</a>
                                <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/newcastle">Newcastle escorts</a>
                                <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/tas">Tasmania escorts</a>
                                <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/cairns">Cairns escorts</a>
                                <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nt/darwin">Darwin escorts</a>
                                <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Noosa escorts</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center" style={{ marginTop: "35px", marginBottom: "25px" }}>
                            <h2>Touring escorts</h2>
                            <p>
                                Private independent escorts touring Australia, see who is coming to you.
                                <br /><br />
                                <a href="escorts/on-tour" className="btn btn-lg btn-danger" style={{ color: "#fff !important" }}>Escorts touring now</a>
                            </p>
                        </div>

                        <h2 className="text-center mb-4">Most recently active profiles</h2>
                        <div className="row ecs-list">
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-center mb-4">Private escorts in Brisbane</h2>
                        <div className="row ecs-list">
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  col-md-4 col-lg-3 col-xl-2 esc-list-card mb-4">
                                <div className="card shadow rounded">
                                    <div className="availableNow row no-gutters">
                                        <div className="col">Available now</div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" className="img-fluid d-block" alt="Melbourne escorts, Becca, private escort" />
                                    <div className="cardInfo">
                                        <h4 className="d-block pink strong cardName">Becca</h4>
                                        <h6 className="cardInfoRegion">
                                            <strong>Southbank</strong>
                                        </h6>
                                        <p className="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                                    </div>
                                    <div className="cardNameBtn text-right">
                                        <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" className="btn btn-pink btn-block btn-sm">Becca</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: "25px" }}>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/qld/brisbane">Private escorts in Brisbane</a></div>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3"><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/vic/melbourne">Verified escorts in Melbourne</a></div>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/nsw/sydney">Escorts in Sydney</a></div>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/wa/perth">Independent escorts in Adelaide</a></div>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/sa/adelaide">Canberra escorts</a></div>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/qld/gold-coast">Private Perth escorts</a></div>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3 "><a className="btn btn-outline-secondary purple btn-sm col-12" style={{ marginBottom: "6px" }} href="https://www.realbabes.com.au/escorts/act/canberra">Escorts in the Gold Coast</a></div>
                            <div className="col-6 col-md-3 col-lg-4 col-xl-3 dropdown">
                                <button className="btn btn-outline-secondary purple btn-sm col-12 dropdown-toggle" style={{ marginBottom: "6px" }} type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Local escorts
                                </button>
                                <div className="dropdownMenuButton3 dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/sunshine-coast">Sydney Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/newcastle">Melbourne Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/tas">Brisbane Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/cairns">Gold Coast Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/nt/darwin">Sunshine Coast Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Adelaide Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Perth Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Canberra Escorts</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Escorts in New South Wales</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Escorts in Queensland</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Escorts in Victoria</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Escorts in South Australia</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Escorts in Western Australia</a>
                                    <a className="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/noosa-heads">Escorts in Tasmania</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 text-center" style={{ marginTop: "15px", backgroundColor: "aliceblue" }}>
                            <h4 className="red-col" style={{ paddingTop: "10px", paddingBottom: "10px" }}>Independent working escorts, <br className="d-block d-md-none" />Providers we are looking for you!</h4>
                            <h4 className="red-col" style={{ paddingTop: "16px", paddingBottom: "16px", marginTop: "25px" }}>21 days of free escort advertising</h4>
                            <p><strong>No credit card needed, no obligations.
                                <br />Become a Real Babe today!</strong>
                            </p>

                            <p><Link href={route('register')} className="btn btn-danger btn-outline-secondary purple text-white">Sign up today</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}