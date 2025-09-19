import { useState } from "react";
import "../../css/advancesearch.css";

export default function AdvanceSearch({ ...props }) {
    const [searchByName, setSearchByName] = useState(false);

    return (
        <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header justify-content-between">
                        <h5 className="modal-title" id="filterModalLabel">Find Escorts</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name">By Name or Location</label>
                            <div className="d-flex justify-content-between gap-3 my-2">
                                {
                                    searchByName ? (<>
                                        <input className="form-control wid400" name='filter_name' id="filter_name" placeholder="By name" />
                                        <a href="#" className="btn btn-secondary btn-block"
                                            onClick={() => setSearchByName(false)}>By Location</a>
                                    </>) : (<>
                                        <input className="form-control wid400" name='filter_location' id="filter_location" placeholder="By location" />
                                        <a href="#" className="btn btn-secondary btn-block"
                                            onClick={() => setSearchByName(true)}>Search by Name</a>
                                    </>)
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ageRange">Age Range</label>
                            <input type="text" className="form-control my-2" id="ageRange" placeholder="e.g., 18-30" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-red">Apply Filters</button>
                    </div>
                </div>
            </div>
        </div >
    );
}