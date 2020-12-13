import React from "react";
import "./AboutContent.css"

export default function AboutContent() {
    return (
        <div className="page-section first last team-bio">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 hidden-xs">
                        <div className="team-bio-image-container">
                            <div className="primary-image"
                                 style={{backgroundImage: "url(" + require('../../../images/me1.png').default + ")"}}/>
                            <div className="secondary-image"
                                 style={{backgroundImage: "url(" + require('../../../images/me2.png').default + ")"}}/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <h1>Hi, I'm Zhefeng Jin!</h1>
                        <p className="large">
                            Writing clean, architecturally sound and maintainable code is my slogan.
                        </p>
                        <hr/>

                        <p>
                            I 'm China based full time freelance developer and geoscientist. <br/>
                            Since beginning my journey as a freelance developer nearly 5 years ago,
                            I 've successfully finished a number of projects for many company and individuals.
                        </p>
                        <p>
                            I 'm mainly working on the overlapped area of Web and GIS worlds,
                            specially CesiumJS, potree, three.js.<br/>
                            And I 'm very familiar to OpenLayers, Leaflet, Google Maps, Mapbox, PostGIS, GeoServer, QGIS
                            plugin and ArcGIS add-ins development.
                        </p>

                        <p>
                            I'm naturally curious and perpetually working on improving my skill
                            so I like new challenges, which can push my knowledge and skills to new level.
                        </p>

                        <p>
                            Now I am finding an opportunity to work on a great 3D Web GIS project based on
                            CesiumJS, but I’m always open to discussing any kind of GIS project.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}
