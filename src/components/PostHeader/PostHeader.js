import React from "react";
import {getTagColor} from "../../util"

export default function PostHeader(props) {
    let tags = [];

    for (let i = 0; i < props.tags.length; i++) {
        tags.push(
            <li key={i}>
                <span className="fa fa-tag" style={{"color": getTagColor(props.tags[i])}}/>
                {props.tags[i]}
            </li>
        );
    }

    return (
        <div className="post-header">
            <h1 itemProp="name headline">{props.title}</h1>
            <h3>
                <time itemProp="datePublished">
                    {props.date}
                </time>
            </h3>

            <ul className="blog-categories">
                {tags}
            </ul>
        </div>
    )
}
