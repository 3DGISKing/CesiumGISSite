import React , { Component } from "react";
import "./AboutContent.css"

export default class AboutContent extends Component {
    constructor(props)
    {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return(
            <div className="page-section first last team-bio">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12 hidden-xs">
                            <div className="team-bio-image-container">
                                <div className="primary-image" style={{backgroundImage: "url(" + require('../../../images/me1.png').default + ")"}}/>
                                <div className="secondary-image" style={{backgroundImage: "url(" + require('../../../images/me2.png').default + ")"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
