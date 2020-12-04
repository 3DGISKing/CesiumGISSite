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
                                    <li><a href="/app/">CesiumGIS</a></li>
                                    <li><a href="/portfolio/">Portfolio</a></li>
                                    <li><a href="/blog/">Blog</a></li>
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

