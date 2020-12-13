import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContent from "../content/AboutContent";

export default function AboutPage() {
    return (
        <React.Fragment>
            <Header/>

            <div className="page-content">
                <AboutContent/>
                <Footer/>
            </div>
        </React.Fragment>
    )
}