import React , { Component } from "react";
import './Footer.css'

export default class Footer extends Component {
    constructor(props)
    {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>
                <footer>
                    <div className="footer">
                        <div className="container">
                            <div className="footer-bottom " style={{height: "250px"}}>
                                <div className="footer-bottom-description" style={{fontSize: "16px", paddingTop: "10px", paddingBottom: "5px", color: "rgb(247, 249, 255)"}}>
                                    I am finding an opportunity to work on a great 3D Web GIS project based on
                                    CesiumJS,
                                    but I’m still always open to discussing any GIS project or partnership opportunity.
                                    I 'm willing to share my research result with you.

                                </div>
                                <div className="footer-bottom-social-links ">
                                    <a href="https://github.com/3DGISKing" className="ig-link ">
                                        <span className="fa fa-lg fa-github"></span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/zhefeng-jin-4ab9b3145/" className="twit-link ">
                                        <span className="fa fa-lg fa-linkedin"></span>
                                    </a>
                                    <a href="mailto:wugis1219@gmail.com" className="ig-link ">
                                        <span className="fa fa-lg fa-envelope-square"></span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
