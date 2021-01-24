import React from "react";
import PropTypes from 'prop-types';
import {
    useRouteMatch
} from "react-router-dom";

import Footer from "../../../components/Footer";
import BlogContent from "../content/BlogContent";
import Header from "../../../components/Header";
import BlogNav from "../../BlogNav";
import NotFound from "../../notFound"

/**
 * @return {null}
 */
export default function PortfolioPage(props) {
    const { url } = useRouteMatch();

    let portfolioCategory;
    let portfolioInfo;

    for(const category in props.data) {
        const data = props.data[category];

        for(let i = 0; i < data.length; i++) {
            if(data[i].contentLink === url){
                portfolioCategory = category;
                portfolioInfo = data[i];
                break;
            }
        }
    }

    if(!portfolioInfo) return (
        <NotFound/>
    );

    document.title = portfolioInfo.title;

    return (
        <React.Fragment>
            <Header/>

            <div className="page-content">
                <BlogNav
                    rootUrl = "/portfolio"
                    rootUrlLabel="The Portfolio"
                    selectedCategory = {portfolioCategory}
                    data = {props.data}
                    currentPage={portfolioInfo.title}
                />
                <BlogContent
                    title={portfolioInfo.title}
                    date={portfolioInfo.date}
                    tags={portfolioInfo.categories}
                    url={url}
                />
                <Footer/>
            </div>

        </React.Fragment>
    )
}

PortfolioPage.propTypes = {
    data: PropTypes.object.isRequired
};
