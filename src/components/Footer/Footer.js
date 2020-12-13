import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="footer-bottom " style={{height: "250px"}}>
                            <div className="footer-bottom-description" style={{
                                fontSize: "16px",
                                paddingTop: "10px",
                                paddingBottom: "5px",
                                color: "rgb(247, 249, 255)"
                            }}>

                            </div>
                            <div className="footer-bottom-social-links ">
                                <a href="https://github.com/3DGISKing" className="ig-link ">
                                    <span className="fa fa-lg fa-github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/zhefeng-jin-4ab9b3145/" className="twit-link ">
                                    <span className="fa fa-lg fa-linkedin"/>
                                </a>
                                <a href="https://www.youtube.com/playlist?list=PLkL3VCCGFU9Gpt3gP3WHBuzXCOmM8DEII"
                                   className="ig-link ">
                                    <span className="fa fa-lg fa-youtube"/>
                                </a>
                                <a href="mailto:wugis1219@gmail.com" className="ig-link ">
                                    <span className="fa fa-lg fa-envelope-square"/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
