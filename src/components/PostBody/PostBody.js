import React, {Component} from "react";

import {serverUrl, dataPath} from "../../Constants"

export default class PostBody extends Component {
    constructor(props) {
        super(props);

        this.state = {html: ""};
    }

    async componentDidMount() {
        const url = serverUrl + dataPath + "/" + this.props.url + ".html";

        fetch(url)
            .then(res => res.text())
            .then(html => {
                this.setState({html: html});
            })
            .catch(console.error);
    }

    render() {
        const data = {
            __html: this.state.html
        };

        return (
            <div itemProp="articleBody" className="post-body" dangerouslySetInnerHTML={data}>
            </div>
        )
    }
}
