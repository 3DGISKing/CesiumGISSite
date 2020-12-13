import React from "react";
import PropTypes from 'prop-types';
import {PostHeader} from "../../../components";
import {PostBody} from "../../../components";

export default function BlogContent(props)
{
    return (
        <div className="post">
            <article itemScope itemType="http://schema.org/BlogPosting">
                <div className="page-section first large">
                    <div className="container post-container">
                        <PostHeader
                            title={props.title}
                            date={props.date}
                            tags={props.tags}
                        />
                        <PostBody url={props.url}/>
                    </div>
                </div>
            </article>
        </div>
    )
}

BlogContent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array,
    url: PropTypes.string.isRequired,
};
