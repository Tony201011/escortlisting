<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Melbourne Datings</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
     <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous">
    </script> -->
    <style>
       nav.navbar {
           background-color: #325679 !important;
       }
      .escort-card {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 15px;
      }

      .escort-card img {
        width: 100%;
        height: auto;
        display: block;
      }

      .escort-info {
        background: rgba(255, 255, 255, 0.7);
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 15px;
        text-align: center;
      }

      .escort-info h5 {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
      }

      .escort-info p {
        margin: 0;
        color: #888;
      }

      .available-now {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #e6007e;
        color: white;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 5px;
      }
    .footer-links {
        display: inline-block;
    }
    .footer-links li {
        float: left;
        padding: 0 5px;
    }
    .hero-text {
      font-size: 2rem;
      font-weight: bold;
      color: #ff4d4f;
    }

    .search-bar {
        width: 100%;
        /* max-width: 600px; */
        margin: 0 auto 10px;
        position: relative;
        background-color: #f4f6f8;
        border-radius: 1.5rem;
        padding: 1rem;
    }

    .illustration-container {
      margin-top: 20px;
    }

    .illustration {
      max-width: 100%;
      height: auto;
    }
    .search-bar #searchInput {
        padding: 28px 115px 28px 35px;
        border-radius: 1.125rem;
        border: 1px solid #ccc;
    }
    .search-bar .fa-search {
        position:absolute;
        left:25px;
        top:50%;
        transform:translateY(-50%);
        color:#ccc;
    }
    .search-bar .distance:focus-visible {
        outline:none;
    }
    .search-bar .distance {
        position:absolute;
        right:15px;
        top:50%;
        transform:translateY(-50%);
        border:none;
        background:transparent;
        color:#666;
        font-size:0.9rem;
        padding: 10px 10px;
        appearance:none;
        -webkit-appearance:none;
        -moz-appearance:none;
        border-left: 1px solid #ccc;
    }
    .search-bar .search-box-checkbuttons-field {
        margin-right: .5rem;
        box-shadow: 0 0 .875rem 0 #e3e4e5;
        border-radius: 1.125rem;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        align-items: center;
        position: relative;
    }
    .search-bar .search-box-checkbuttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .search-bar .inline-checkbutton-input {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    .search-bar .inline-checkbutton-label {
        appearance: none;
        border: 0 none;
        background: #fff;
        color: #5d738d;
        font-family: Cabin, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 400;
        text-align: center;
        padding: .75rem .875rem;
        border-radius: 1.125rem;
        font-size: .90rem;
        border: 2px solid rgba(0, 0, 0, 0);
        white-space: nowrap;
        margin-bottom: 0;
        height: 3.5rem;
        align-items: center;
        display: flex;
        cursor: pointer;
        justify-content: center;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .search-bar .inline-checkbutton {
        margin-right: 0;
        box-shadow: 0 0 .875rem 0 #e3e4e5;
        border-radius: 1.125rem;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        align-items: center;
        position: relative;
    }
    .search-bar input:checked+.inline-checkbutton-label {
        border-color: #ea3e46;
        color: #ea3e46;
    }
    .search-bar .filter-submit {
        border-radius: 1.125rem;
        padding: .85rem 1.5rem;
    }
    .hide {
        display: none;
    }
    .esc-list-card .card .availableNow {
        z-index: 2;
        position: absolute;
        background-color: #285aa9ff;
        right: 0;
        left: 0;
        text-align: center;
        padding-top: 4px;
        padding-bottom: 3px;
        color: #ffffff;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        opacity: 0.8;
        text-transform: uppercase;
    }
    .esc-list-card .card .cardInfo {
        padding: 10px;
        background-color: #ffffff;
        text-align: center;
    }
    .esc-list-card .card .cardName {
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .esc-list-card .card .cardInfoRegion {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .esc-list-card .card .cardInfoHeader {
        height: 50px;
        overflow: hidden;
    }
    .esc-list-card .card .cardNameBtn {
        padding: 4px 0;
    }
    .esc-list-card .card .cardNameBtn a {
        background-color: #b62542ff;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand text-white" href="#">EscortWeb Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link text-white" href="https://www.realbabes.com.au/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.realbabes.com.au/about-us">Why realbabes</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dating</a>
            <div class="dropdown-menu" id="dropdownMenuInNavBar" aria-labelledby="navbarDropdown" itemscope="" itemtype="http://schema.org/SiteNavigationElement">
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/brisbane" itemprop="url">
                <span itemprop="name">Brisbane escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/sydney" itemprop="url">
                <span itemprop="name">Sydney escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/vic/melbourne" itemprop="url">
                <span itemprop="name">Melbourne escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/sa/adelaide" itemprop="url">
                <span itemprop="name">Adelaide escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/act/canberra" itemprop="url">
                <span itemprop="name">Canberra escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/wa/perth" itemprop="url">
                <span itemprop="name">Perth escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/nt/darwin" itemprop="url">
                <span itemprop="name">Darwin escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/gold-coast" itemprop="url">
                <span itemprop="name">Gold Coast escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/sunshine-coast" itemprop="url">
                <span itemprop="name">Sunshine Coast escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/nsw/newcastle" itemprop="url">
                <span itemprop="name">Newcastle escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/qld/cairns" itemprop="url">
                <span itemprop="name">Cairns escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/tas" itemprop="url">
                <span itemprop="name">Tasmania escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/on-tour" itemprop="url">
                <span itemprop="name">Touring escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/directory" itemprop="url">
                <span itemprop="name">Escorts directory</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/search" itemprop="url">
                <span itemprop="name">Search for escorts</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/near-me" itemprop="url">
                <span itemprop="name">Escorts near me</span>
              </a>
              <a class="dropdown-item" href="https://www.realbabes.com.au/escorts/" itemprop="url">
                <span itemprop="name">View all our escorts</span>
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.realbabes.com.au/naughty-corner/">Naughty corner</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.realbabes.com.au/blog/">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.realbabes.com.au/pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.realbabes.com.au/signup">Signup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.realbabes.com.au/babe/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
        <div class="row justify-content-center illustration-container">
            <div class="col-12 col-md-8">
                <img src="https://discovery.tryst.a4cdn.org/packs/static/images/header-home-wide-08715471cf8f38a7c841.webp" alt="Illustration" class="illustration">
            </div>
            </div>
            <div class="row justify-content-center align-items-center text-center">
            <div class="col-12">
                <h1 class="hero-text">Home of the Independent Escort</h1>
                <p>Listing thousands of independent adult entertainers. Escorts, BDSM, kink, video, massage, and much more.</p>

                <div class="search-bar col-12 col-sm-10 offset-sm-1 col-lg-10 offset-lg-1  ">
                    <form>
                        <div class="row">
                            <div class="col-md-6 position-relative">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control" id="searchInput" placeholder="A city or postcode">
                                <select class="distance position-absolute">
                                    <option>within 0 km</option>
                                    <option selected>within 5 km</option>
                                    <option>within 10 km</option>
                                    <option>within 20 km</option>
                                    <option>within 50 km</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <fieldset class="field search-box-checkbuttons-field">
                                    <div class="search-box-checkbuttons">
                                        <legend class="hide">Gender</legend>
                                        <div class="inline-checkbutton">
                                            <input class="inline-checkbutton-input" id="gender-female-basic_uid" type="checkbox" value="female">
                                            <label for="gender-female-basic_uid" class="inline-checkbutton-label">Female</label>
                                        </div>
                                        <div class="inline-checkbutton">
                                            <input class="inline-checkbutton-input" id="gender-male-basic_uid" type="checkbox" value="male">
                                            <label for="gender-male-basic_uid" class="inline-checkbutton-label">Male</label>
                                        </div>
                                        <div class="inline-checkbutton">
                                            <input class="inline-checkbutton-input" id="gender-non_binary-basic_uid" type="checkbox" value="non_binary">
                                            <label for="gender-non_binary-basic_uid" class="inline-checkbutton-label">Non-binary</label>
                                        </div>
                                        <div class="inline-checkbutton">
                                            <input class="inline-checkbutton-input" id="gender-trans-basic_uid" type="checkbox" value="trans">
                                            <label for="gender-trans-basic_uid" class="inline-checkbutton-label">Trans Only</label>
                                        </div>
                                        <input name="trans" type="hidden" value="false">
                                    </div>
                                </fieldset>
                            </div>
                            <div class="col-md-2">
                                <button type="submit" class="btn btn-danger w-100 filter-submit">Search</button>
                            </div>
                            <div class="col-md-12">
                                <a href="javascript:;" class="d-block mt-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#filterModal">More Filters</a>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="filterModalLabel">More Filters</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <!-- Add more filter options here -->
                        <div class="form-group">
                          <label for="ageRange">Age Range</label>
                          <input type="text" class="form-control" id="ageRange" placeholder="e.g., 18-30">
                        </div>
                        <div class="form-group">
                          <label for="services">Services Offered</label>
                          <input type="text" class="form-control" id="services" placeholder="e.g., Massage, BDSM">
                        </div>
                        <div class="form-group">
                          <label for="priceRange">Price Range</label>
                          <input type="text" class="form-control" id="priceRange" placeholder="e.g., $100-$300">
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Apply Filters</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

      <div class="row">
        <div class="col" id="mainContainer" style="background-color:#ffffff;padding-top:25px;padding-bottom:95px;min-height:650px;">
          <div class="row">
            <div class="col-12 col-sm-10 offset-sm-1 col-lg-10 offset-lg-1  ">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Escorts</a>
                  </li>
                  <!-- <li class="breadcrumb-item">
                    <a href="#">VIC</a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">Melbourne</li> -->
                </ol>
              </nav>
              <h1 class="profileStandardElement" style="margin-bottom:25px;">Escort List</h1>
              <h2 style="font-size:1.4rem">Escort Girls</h2>
              <p>Discover our selection of sophisticated and elegant companions for your exclusive events and personal enjoyment.</p>
              
              <div class="row ecs-list">
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 col-xl-3 esc-list-card mb-4">
                  <div class="card shadow rounded">
                    <div class="availableNow row no-gutters">
                      <div class="col">Available now</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=350&amp;h=450&amp;q=80" width="350" height="450" class="img-fluid d-block" alt="Melbourne escorts, Becca, private escort">
                    <div class="cardInfo">
                      <h4 class="d-block pink strong cardName">Becca</h4>
                      <h6 class="cardInfoRegion">
                        <strong>Southbank</strong>
                      </h6>
                      <p class="cardInfoHeader">Free BJ on 1 hour bookings 💦😘 Femdom blonde Aussie goddess 🩷</p>
                    </div>
                    <div class="cardNameBtn text-right">
                      <a href="https://www.realbabes.com.au/escorts/vic/southbank/becca" class="btn btn-pink btn-block btn-sm">Becca</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center" style="background-color: #f5f5f5;width:100%;padding-top:14px;padding-bottom:0px;">
          <ul class="footer-links list-inline">
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
          <p class="bold" style="font-size:11px;">this site is restricted to persons 18 years and over</p>
        </div>
      </div>
    </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
</html>