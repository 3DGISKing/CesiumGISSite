import React , { Component } from "react";
import Navbar from "./HeaderNav/HeaderNav";
import { useHistory, useLocation } from 'react-router-dom';

export default class Header extends Component {
    constructor(props)
    {
        super(props);
    }

    async componentDidMount() {

    }

    render() {
        const pathName = window.location.pathname;
        let className = "";

        if(pathName !== "/")
            className = "layout-header";

        return(
            <React.Fragment>
                <header className={className}>
                    <Navbar/>
                </header>
            </React.Fragment>
        )
    }
}


