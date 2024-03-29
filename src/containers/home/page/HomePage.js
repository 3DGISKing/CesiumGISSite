import React from "react";
import './HomePage.scss'
import Footer from "../../../components/Footer";
import HomeContent from "../content/HomeContent";
import Header from "../../../components/Header";

export default function HomePage() {
    return (
        <React.Fragment>
            <div id="homepage-header-image"/>

            <Header/>

            <div className="page-content" id="homepage">
                <HomeContent/>
                <Footer/>
            </div>

        </React.Fragment>
    )
}
