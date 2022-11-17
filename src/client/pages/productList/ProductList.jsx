import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Product from "../Product/Product.js";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css"
import { Pagination, Card, Row, Col, List, Layout, Cont, Divider, BackTop} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Carousel from "react-bootstrap/Carousel";

const {Meta} = Card
const {Header, Footer, Sider, Content} = Layout
const ProductList = () => {
    // const product = [
    //     {
    //         id: 1,
    //         name: 'CẦU CHÌ BỘ, ĐỒNG HỒ ĐO NHIỆT',
    //         src: "http://phutungkubota.vn/Uploads/z2062341839222_7f383a061337fa0ed39598bbcb16300c-1.jpg"
    //     },
    //     {
    //         id: 2,
    //         name: 'THIẾT BỊ THỦY LỰC KTM',
    //         src: "http://phutungkubota.vn/Uploads/z3778620933474_0b064b11de725b5aa5bc4850688619b8.jpg"
    //     },
    //     {id: 3, name: 'CẦU CHI - CẢO HƯỚNG - BÀN ÉP PHANH HƯỚNG', src: "http://phutungkubota.vn/Uploads/123.jpg"},
    //     {
    //         id: 4,
    //         name: 'PHỤ TÙNG MÁY GẶT',
    //         src: "http://phutungkubota.vn/Uploads/May-gat-dap-lien-hop-DC-70-Plus_1-2.jpg"
    //     },
    //     {
    //         id: 5,
    //         name: 'LỌC - NHỚT - MỠ - NƯỚC LÀM MÁT',
    //         src: "http://phutungkubota.vn/Uploads/Kubota_Parts_English.jpg"
    //     },
    //     {id: 6, name: 'PHỤ TÙNG MÁY KÉO NÔNG CỤ', src: "http://phutungkubota.vn/Uploads/20160830080604_QYJQ-6.png"},
    //     {
    //         id: 7,
    //         name: 'PHỤ TÙNG MÁY CẤY - MÁY GIEO HẠT',
    //         src: "http://phutungkubota.vn/Uploads/20160830080604_QYJQ-5.png"
    //     },
    // ];

    let cateGory = [
        {id: 1, title: "category 1"},
        {id: 2, title: "category 1"},
        {id: 3, title: "category 1"},
        {id: 4, title: "category 1"}
    ]


    let navigate = useNavigate();
    const [product, setProduct] = useState([{}])
    const [postsPerPage, setPostPerPage] = useState(12);
    // const [currentPage, setCurrentPage] = useState(1);
    const {currentPageUrl}= useParams()
    const indexOfLastPost = currentPageUrl * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);
 
    useEffect(() => {
        let mounted = true;
        axios.get("http://localhost:5000/product/alltest")
          .then(items => {
            if(mounted) {
                console.log(items)
              setProduct(items.data)
            }
          })
        return () => mounted = false;
      }, [])
    //changepage
    // const paginate = pageNumber => setCurrentPage(pageNumber);
    //   console.log(product)
        const productDisplay = (cur) => {

            const res = cur.map(item =>
                <Card
                    id = {item.productId}
                    hoverable
                    style={{ width: "20%", borderRadius: 12, margin: 24, }}
                    cover={<img alt="example" src="https://via.placeholder.com/50/"/>}>
                <Meta title={item.name} />
                </Card>
                // <div className = "col-md-4 col-sm-6 wow fadeInUp">
                //     <Product id={item.productId} src="https://via.placeholder.com/50/" name={item.name}></Product>
                // </div>
            )
            return res;
        }
        // console.log({currentPage})
        return (
            <>
                <Row>
                    <Col flex={1}>
                        <Row>
                        <div id = "category">
                        <List style={{margin: 24}}
                        dataSource = {cateGory} 
                        renderItem={item => (
                            <List.Item>
                                <p> {item.title} </p>
                            </List.Item>
                          )}
                        />
                        </div>
                        </Row>
                        <Row style={{margin: 24}}>
                            <List>
                                <List.Item>Free Ship</List.Item>
                                <List.Item>Uy tín 100%</List.Item>
                                <List.Item>Cam kết chất lượng</List.Item>
                                <List.Item>Chúc bạn mua hàng vui vẻ</List.Item>
                            </List>
                        </Row>
                    </Col>
                    <Divider type="vertical"></Divider>
                    <Col flex={4}>
                    <div className="container">
                    <div className="row h-pt-cas" >
                    {productDisplay(currentPosts)}
                    </div>
                
                    <Divider></Divider>
                    
                </div>
                    </Col>
                </Row>
                                

                <div id = "pagination">
                        <Pagination 
                        total={product.length}  
                        pageSize = {postsPerPage} 
                        defaultCurrent = {1} 
                        responsive={true}
                        onChange={(page, newPageSize) => {
                            navigate(`/products/${page}`)
                        }}>
                        </Pagination>
                    </div>
                    <BackTop>
                        <div >UP</div>
                    </BackTop>
            </>
        );
    };

    export default ProductList;
