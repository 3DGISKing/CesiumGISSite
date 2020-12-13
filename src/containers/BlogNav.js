import React from "react";
import PropTypes from 'prop-types';

export default function BlogNav(props) {
    const data = props.data;
    const rootUrl = props.rootUrl;

    let categoryItems = [];

    for (let category in data) {
        categoryItems.push(
            <li key={category}>
                <a className="dropdown-item" href={`${rootUrl}/${category}`}>
                    {category}
                </a>
            </li>
        );
    }

    return (
        <React.Fragment>
            <div className="blog-nav">
                <div className="container">
                    <ul className="blog-nav-menu pull-left">
                        <li><a href={rootUrl}> {props.rootUrlLabel} </a></li>

                        <li>/</li>
                        <li>
                            <a href="#" id="dropdown-menu-link" data-toggle="dropdown" aria-haspopup="true">
                                {props.selectedCategory} <span className="fa fa-caret-down"/>
                            </a>

                            <ul className="dropdown-menu primary-menu" aria-labelledby="dropdown-menu-link">
                                {categoryItems}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </React.Fragment>
    )
}

BlogNav.propTypes = {
    data: PropTypes.object.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    rootUrlLabel: PropTypes.string.isRequired,
    rootUrl: PropTypes.string.isRequired
};

