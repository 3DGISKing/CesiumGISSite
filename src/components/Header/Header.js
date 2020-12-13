import React from "react";
import Navbar from "./HeaderNav/HeaderNav";

export default function Header() {
    const pathName = window.location.pathname;
    let className = "";

    if (pathName !== "/")
        className = "layout-header";

    return (
        <React.Fragment>
            <header className={className}>
                <Navbar/>
            </header>
        </React.Fragment>
    )
}


