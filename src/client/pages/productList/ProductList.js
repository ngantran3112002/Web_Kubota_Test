import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Product from "../Product/Product.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import Pagination from "../pagination/Pagination";
import reactRouterPagination from "react-router-pagination";
import { useParams } from "react-router-dom";
//import Carousel from "react-bootstrap/Carousel";

const ProductList = () => {
    const product = [
        {
            id: 1,
            name: 'CẦU CHÌ BỘ, ĐỒNG HỒ ĐO NHIỆT',
            src: "http://phutungkubota.vn/Uploads/z2062341839222_7f383a061337fa0ed39598bbcb16300c-1.jpg"
        },
        {
            id: 2,
            name: 'THIẾT BỊ THỦY LỰC KTM',
            src: "http://phutungkubota.vn/Uploads/z3778620933474_0b064b11de725b5aa5bc4850688619b8.jpg"
        },
        {id: 3, name: 'CẦU CHI - CẢO HƯỚNG - BÀN ÉP PHANH HƯỚNG', src: "http://phutungkubota.vn/Uploads/123.jpg"},
        {
            id: 4,
            name: 'PHỤ TÙNG MÁY GẶT',
            src: "http://phutungkubota.vn/Uploads/May-gat-dap-lien-hop-DC-70-Plus_1-2.jpg"
        },
        {
            id: 5,
            name: 'LỌC - NHỚT - MỠ - NƯỚC LÀM MÁT',
            src: "http://phutungkubota.vn/Uploads/Kubota_Parts_English.jpg"
        },
        {id: 6, name: 'PHỤ TÙNG MÁY KÉO NÔNG CỤ', src: "http://phutungkubota.vn/Uploads/20160830080604_QYJQ-6.png"},
        {
            id: 7,
            name: 'PHỤ TÙNG MÁY CẤY - MÁY GIEO HẠT',
            src: "http://phutungkubota.vn/Uploads/20160830080604_QYJQ-5.png"
        },
    ];
    const [postsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    const {currentPageUrl}= useParams()
    const indexOfLastPost = currentPageUrl * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);

    //changepage
    // const paginate = pageNumber => setCurrentPage(pageNumber);

        const productDisplay = (cur) => {

            const res = cur.map(item =>
                <div className = "col-md-4 col-sm-6 wow fadeInUp">
                    <Product id={item.id} src={item.src} name={item.name}></Product>
                </div>

            )
            return res

        }
                return (
            <>
                <div className="container">
                    <div className="row h-pt-cas" >
                    {productDisplay(currentPosts)}
                    {/*{product.map(item => <li>2</li>)}*/}
                    </div>
                </div>
                <div id = "pagination">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={product.length}
                        paginate={setCurrentPage}
                        currentPage={currentPageUrl}
                        // currentPageUrl={`/products/${currentPage}`}
                    ></Pagination>
                </div>
            </>
        );
    };

    export default ProductList;
