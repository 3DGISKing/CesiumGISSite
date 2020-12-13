import React from "react";
import PropTypes from 'prop-types';
import {
    useParams,
} from "react-router-dom";

import Footer from "../../../components/Footer";
import BlogContent from "../content/BlogContent";
import Header from "../../../components/Header";
import BlogNav from "../../BlogNav";

/**
 * @return {null}
 */
export default function BlogPage(props) {
    const { year, month, day } = useParams();

    const contentLink = `${year}/${month}/${day}`;

    let blogCategory;
    let blogInfo;

    for(const category in props.data) {
        const data = props.data[category];

        for(let i = 0; i < data.length; i++) {
            if(data[i].contentLink === contentLink){
                blogCategory = category;
                blogInfo = data[i];
                break;
            }
        }
    }

    if(!blogInfo) return (
        <div>
            Error! Blog data not found
        </div>
    );

    return (
        <React.Fragment>
            <Header/>

            <div className="page-content">
                {<BlogNav
                    selectedCategory = {blogCategory}
                    data = {props.data}
                />}
                <BlogContent
                    title={blogInfo.title}
                    date={blogInfo.date}
                    tags={blogInfo.categories}
                    url={contentLink}
                />
                <Footer/>
            </div>

        </React.Fragment>
    )
}

BlogPage.propTypes = {
    data: PropTypes.object.isRequired
};
