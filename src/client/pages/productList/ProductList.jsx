import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { useParams } from "react-router-dom";
import "antd/dist/antd.css"
import { Pagination, Card, Row, Col, List, Layout, Cont, Divider, BackTop, Button} from "antd";
import axios from "axios";
import {BsChevronDoubleUp} from "react-icons/bs"
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
    const [product, setProduct] = useState([{}])
    const [category, setCategory] = useState([{}])
    let navigate = useNavigate();

    const [postsPerPage, setPostPerPage] = useState(12);
    const {currentPageUrl}= useParams()
    const indexOfLastPost = currentPageUrl * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);
 
    let endPoint = [
        "http://localhost:5000/category/alltest",
        "http://localhost:5000/product/alltest"
    ]

    const fetchData = () => {
        Promise.all(endPoint.map((endPoint) => axios.get(endPoint))).then(
            axios.spread((...allData) => {
                const allCategory = allData[0];
                const allProd = allData[1];

                setCategory(allCategory.data.rows);
                setProduct(allProd.data)
            })
        )
    }

    useEffect(() => {
        fetchData()
      }, [])

      console.log(product)
      console.log(category)
        const productDisplay = (cur) => {

            const res = cur.map(item =>
                    <Card
                        id = {item.productId}
                        hoverable
                        style={{ width: "20%", borderRadius: 12, margin: 24, display:"inline-block"}}
                        cover={<img alt="example" src="https://via.placeholder.com/50/"/>}>
                    <Meta title={item.name} />
                    </Card>
            )
            return res;
        }

        return (
            <>
                <Row>
                    <Col flex="250px">
                        <Row>
                        <List style={{margin: 24}}
                        dataSource = {category}
                        header={<div><strong>Category</strong></div>}
                        renderItem={item => (
                            <List.Item>
                                {item.name}
                            </List.Item>
                          )}
                        />
        
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
                    <Col flex= "auto" style = {{width: "80%"}}> 
                        {productDisplay(currentPosts)}    
                        <Divider></Divider>
                        <Pagination 
                        style={{    "text-align-last": "center", borderColor: "green"}}
                        total={product.length}  
                        pageSize = {postsPerPage} 
                        defaultCurrent = {1} 
                        responsive={true}
                        onChange={(page, newPageSize) => {
                            navigate(`/products/${page}`)
                        }}>
                        </Pagination>
                    </Col>
                </Row>
                                

                {/* <div id = "pagination">
                        <Pagination 
                        total={product.length}  
                        pageSize = {postsPerPage} 
                        defaultCurrent = {1} 
                        responsive={true}
                        onChange={(page, newPageSize) => {
                            navigate(`/products/${page}`)
                        }}>
                        </Pagination>
                    </div> */}
                    <BackTop>
                        <Button type="primary" style={{borderRadius: "50%", height: 50, width: 50, backgroundColor: "green"}}>
                            <BsChevronDoubleUp></BsChevronDoubleUp>
                        </Button>
                    </BackTop>
            </>
        );
    };

    export default ProductList;
