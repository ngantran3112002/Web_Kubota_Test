import React from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "../css/product.css";
import {Link} from "react-router-dom";
const Product = ({id,name,src}) => {
    return (
        <>
            <div
                 style={{visibility: "visible", animationOnName: "fadeInUp", width: "345", height: "331",paddingtop:"20"}}>
                <a href="/product/:id" className="item smooth">
                    <img
                        className="img-responsive"
                        alt="FirstSlide"
                        src = {src}
                        style={{width: "100%",height:"100%"}}
                    />
                    <div className="single-content text-center hiii">
                        <Link to= {name}> {name}</Link>
                    </div>
                </a>

            </div>
        </>
    )
}
export default Product;