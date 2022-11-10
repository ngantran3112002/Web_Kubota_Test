import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap-grid.css";
import "../css/product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
import {Link} from "react-router-dom";
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
        ]
        const productDisplay = () => {
            let res = product.map((item) => {
                <div>
                    <Product
                        id={item.id}
                        name={item.name}
                        src={item.src}
                    ></Product>
                </div>
            })
            return res;
        }
        return (
            <>


                <div className="container">
                </div>
                <section className="h-product">
                    <div className="container">
                        <div className="row h-pt-cas">


                            <div className="clearfix"></div>


                        </div>
                        {productDisplay()}
                    </div>
                </section>


            </>
        );
    };

    export default ProductList;