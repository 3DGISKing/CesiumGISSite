import React from "react";

export default function HomeContent() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="narrow-heading">
                    <h1 className="text-center">Welcome to the CesiumGIS</h1>
                </div>

                <h3 className="narrow-content text-justify" style={{lineHeight: 1.8, textIndent: "2em"}}>
                    CesiumGIS is my personal research project.<br/>
                    My dream is to develop a wonderful 3D Web GIS system that has many useful features such as
                    rendering a variety of geospatial data, unique 3D spatial analysis, advanced digitizing ability
                    like 2D GIS and time-dynamic simulation.

                    <br/>
                    In this project I am going to integrate significant features I have already completed into the
                    one system.
                    I think that using CesiumJs ‘s Mixin pattern would be a good idea for integrating separate
                    features.

                    <br/>
                    It will make me keep a high degree of modularization and also possible to distribute
                    separate features easily.

                </h3>
                <h3 className="narrow-content text-justify" style={{lineHeight: 1.8, textIndent: "2em"}}>
                    Most importantly, I‘m going to get the bottom of the proprietary Cesium Ion‘s 3D tiling
                    algorithm which is the blackbox to end users through this project.

                    If you have any kind of idea related to 3D tiling algorithm and CesiumJs based 3D GIS analysis, then
                    I
                    would be happy to discuss with you so I 'm willing to share my research result with you.
                </h3>
                <h3 className="narrow-content text-justify" style={{lineHeight: 1.8, textIndent: "2em"}}>
                    If you have any unresolved problem in Cesium community, do not hesitate to contact me.
                </h3>
            </div>
        </div>
    )
}
