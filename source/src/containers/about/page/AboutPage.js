import React , { Component } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutContent from "../content/AboutContent";

export default class AboutPage extends Component {
    constructor(props)
    {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>
                <Header/>

                <div className="page-content">
                    <AboutContent/>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}