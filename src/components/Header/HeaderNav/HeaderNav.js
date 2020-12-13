import React from "react";

export default function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar-default">
                <div className="navbar navbar-primary">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="https://cesium.com/">Official CesiumJs</a></li>
                                <li><a href="https://app.cesiumgis.com/">CesiumGIS</a></li>
                                <li><a href="/portfolio/">Portfolio</a></li>
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

