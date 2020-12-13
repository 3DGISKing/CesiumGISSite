import React from "react";
import {useState} from "react";
import {Switch, Route} from "react-router-dom";
import AboutPage from "./containers/about";
import {PortfolioPage} from "./containers/blog";
import BlogListPage from "./containers/blogList";
import HomePage from "./containers/home";
import {NotFound} from "./containers";
import { serverUrl, portfolioDataUrl } from "./Constants"

const defaultPortfolioCategory = "CesiumJs";

export default function CesiumGISRouter() {
    const [portfolioData, setPortfolioData] = useState(null);

    const url = serverUrl + portfolioDataUrl;

    if(portfolioData === null) {
        fetch(url)
            .then(res => res.text())
            .then(text => {
                const data = JSON.parse(text);

                setPortfolioData(data);
            })
            .catch(console.error);
    }

    let lastUrlParameter = window.location.pathname.split("/").pop();

    lastUrlParameter = lastUrlParameter.replace(/%20/g, " ");

    return (
        <Switch>
            <Route path="/about">
                <AboutPage/>
            </Route>

            <Route exact path="/portfolio">
                {
                    portfolioData === null ? null : <BlogListPage category={defaultPortfolioCategory} data= {portfolioData}/>
                }
            </Route>

            <Route exact path="/portfolio/:category">
                {
                    portfolioData === null ? null : <BlogListPage category={lastUrlParameter} data= {portfolioData}/>
                }
            </Route>

            <Route exact path={"/portfolio/:category/:name"}>
                {
                    portfolioData === null ? null : <PortfolioPage data= {portfolioData}/>
                }
            </Route>

            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    )
};