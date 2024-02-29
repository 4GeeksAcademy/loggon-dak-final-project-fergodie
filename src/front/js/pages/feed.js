import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.css";

export const Feed = () => {
    const [activeTab, setActiveTab] = useState("grid1");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="container py-5">
                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                
            </div>


            <div className="container">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >
                            PS5
                        </button>
                        <button
                            className="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >
                            XBOX
                        </button>
                        <button
                            className="nav-link"
                            id="nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact"
                            type="button"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                        >
                            PC
                        </button>

                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabindex="0"
                    >
                        ...
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabindex="0"
                    >
                        ...
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                        tabindex="0"
                    >
                        ...
                    </div>

                </div>

            </div>
        </>
    );
};
