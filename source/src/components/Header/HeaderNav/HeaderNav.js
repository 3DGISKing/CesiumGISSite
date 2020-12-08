import React , { Component } from "react";

export default class Navbar extends Component {
    constructor(props)
    {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>
                <nav className="navbar-default">
                    <div className="navbar navbar-primary">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><a href="https://app.cesiumgis.com/">CesiumGIS</a></li>
                                    <li><a href="https://docs.google.com/document/d/1LDBFsSW2ECTPW53f18EzqURBdfs8HDsvNumzYi7x9-Y/edit?usp=sharing">Portfolio</a></li>
                                    <li><a href="https://medium.com/@cesiumgis">Blog</a></li>
                                    <li><a href="/about/">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

