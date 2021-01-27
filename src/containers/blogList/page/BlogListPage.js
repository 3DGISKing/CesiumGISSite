import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import BlogNav from "../../BlogNav";
import NotFound from "../../notFound"
import {serverUrl, dataPath} from "../../../Constants"

const dataUrl = serverUrl + dataPath;

/**
 * @return {null}
 */
export default function BlogListPage (props) {
    const totalData = props.data;

    if(!totalData[props.category]){
        return (
            <Fragment>
                <NotFound/>
            </Fragment>
        )
    }


    let data = [...totalData[props.category]];

    if(!data) {
        console.error('data is null');

        return (
            <Fragment>
                <NotFound/>
            </Fragment>
        )
    }

    // find another items of which category is same as props.category

    for(let category in totalData){
        if(category === props.category)
            continue;

        const categoryData = totalData[category];

        categoryData.forEach(item =>{
            for(let i = 0; i < item.categories.length; i++){
                if(item.categories[i] === props.category){
                    data.push(item);
                    break;
                }
            }
        })
    }

    let blogItems = [];

    for (let i = 0; i < data.length; i++) {
        const blogData = data[i];

        const {title, date, contentLink, headerImageLink} = blogData;

        blogItems.push(
            <div className={"col-lg-3 col-md-4 col-sm-6 col-xs-12"} key={i}>
                <div className={"image-tile"}>
                    <a href={contentLink}>
                        <div className="image-container">
                            <img src={dataUrl + headerImageLink}/>
                        </div>

                        <div className="info">
                            <h3 className="title">{title}</h3>
                            <div className="subtitle small">
                                {date}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }

    document.title = props.category;

    return (
       <Fragment>
           <Header/>

           <div className="page-content">
               <BlogNav selectedCategory={props.category} data={props.data} rootUrl={"/portfolio"} rootUrlLabel={"The Portfolio"}/>

               <div className="page-section first blog-header even-padding">
                   <div className="container text-center">
                       <h1 className="large">{props.category}</h1>
                   </div>
               </div>

               <div className="page-section last">
                   <div className={"container"}>
                       <div className={"row row-flex"}>
                           {blogItems}
                       </div>
                   </div>
               </div>
               <Footer/>
           </div>
       </Fragment>
    )
}

BlogListPage.propTypes = {
    category: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
};
