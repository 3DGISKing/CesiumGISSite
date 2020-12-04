import React , { Component } from "react";
import Navbar from "./HeaderNav/HeaderNav";

export default class Header extends Component {
    constructor(props)
    {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>
                <header id="header">
                    <Navbar/>
                </header>
            </React.Fragment>
        )
    }
}
