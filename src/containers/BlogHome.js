import React, {Component, Fragment} from "react";
import BlogListPage from "./blogList"
import { serverUrl, blogDataUrl } from "../Constants"

const defaultBlogCategory = "CesiumJs";

export default class BlogHome extends Component {
    constructor(props) {
        super(props);

        this.state = {data: null};
    }

    async componentDidMount() {
        const url = serverUrl + blogDataUrl;

        fetch(url)
            .then(res => res.text())
            .then(text => {
                const data = JSON.parse(text);

                this.setState({data: data});
            })
            .catch(console.error);
    }

    render() {
        let content = null;

        if(this.state.data){
            content = <BlogListPage
                data={this.state.data}
                category={defaultBlogCategory}/>
        }

        return (
            <Fragment>
                {content}
            </Fragment>
        )
    }
}
