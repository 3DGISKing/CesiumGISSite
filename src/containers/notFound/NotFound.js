import React from "react";
import "./notFound.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NotFoundPage() {
    return (
        <React.Fragment>
            <Header/>
            <div className="page-content">
                <div className="error-404-background">
                    <div className="container">
                        <div className="error-404">
                            <h1>Error 404</h1>
                            <h2>Page not found!</h2>
                            <p>We searched land, sea, air, and space but couldn't find your page anywhere.</p>
                            <p><a href="/">
                                <span className="fa fa-arrow-circle-left"/> Return to homepage</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}