import React , { Component } from "react";

export default class HomeContent extends Component {
    constructor(props)
    {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return(
            <div className="page-section">
                <div className="container">
                    <div className="narrow-heading">
                        <h1 className="text-center"> CesiumGIS is my personal research project.</h1>
                    </div>

                    <h3 className="narrow-content text-justify" style={{lineHeight: 1.8, textIndent: "2em"}}>
                        My dream is to develop a wonderful 3D Web GIS system that has many useful features such as
                        rendering a variety of geospatial data, unique 3D spatial analysis, advanced digitizing ability like 2D GIS and simulation.

                        <br/>
                        In this project I am going to integrate significant features I have already completed into the one system.
                        I think that using CesiumJs ‘s Mixin pattern would be a good idea for integrating separate features.

                        <br/>
                        It will make me keep a high degree of modularization and also possible to distribute
                        separate features easily.

                        <br/>
                        Most importantly I‘m going to get the bottom of the Cesium Ion‘s tiling algorithm which is
                        the blackbox to end user through this project.
                    </h3>
                </div>
            </div>
        )
    }
}
