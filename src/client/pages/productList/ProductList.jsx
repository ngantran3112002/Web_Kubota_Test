import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { useParams, useSearchParams, createSearchParams } from "react-router-dom";
import "antd/dist/antd.css"
import { Pagination, Card, Row, Col, List, Layout, Image, Divider, BackTop, Button} from "antd";
import axios from "axios";
import {BsChevronDoubleUp} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//import Carousel from "react-bootstrap/Carousel";

// const {Meta} = Card
// const {Header, Footer, Sider, Content} = Layout
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
    const [params, setParams] = useSearchParams()
    let navigate = useNavigate();
    
    const currentPageUrl = params.get('page')
    const categoryUrl = params.get('category')
    
    const postsPerPage = 9;
    const indexOfLastPost = currentPageUrl * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const postByPage = product.slice(indexOfFirstPost, indexOfLastPost);
    

    let endPoint = [
        "http://localhost:5000/category/alltest",
        "http://localhost:5000/product/alltest"
    ]


    useEffect(() => {
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
        fetchData()
      }, [])

      console.log(product)
      console.log(category)
    const productDisplay = 
        <List   
                size = {"large"}
                grid={{ gutter: 0, column: 3 , xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 2,
                    xl: 3,
                    xxl: 3,}}
                dataSource={postByPage}
                footer={
                    <Pagination 
                        style={{textAlignLast: "center", borderColor: "green"}}
                        pageSize = {postsPerPage} 
                        defaultCurrent = {1} 
                        responsive={true}
                        total={product.length}  
                        onChange={(page, newPageSize) => {
                            setParams({page: page})
                            // navigate(`/products/${page}`)
                        }}>
                    </Pagination>
                }
                // pagination = {true}
                renderItem={item => (
                    <List.Item>
                        <Card
                        // id = {item.productId}
                        // loading
                            
                            hoverable
                            // style={{ width: "85%", borderRadius: 12, margin: 24}}
                            cover={<img alt="example" src="https://via.placeholder.com/1000"/>}>
                            <Link to = {`/products/details/${item.productId}`}>{item.name}</Link>
                        </Card>
                    </List.Item>
                )}
            />
        

    const goToCategory = (categoryId) => {
        navigate({
            pathname: "/products",
            search: `?${createSearchParams({
                page: 1,
                category: categoryId
            })}`
        })
    }
        return (
            <>
                <Row>
                    <Col flex="300px">
                        <Row>
                        <List 
                            bordered
                            style={{margin: 24, borderRadius: 8}}
                            // id = "category"
                            dataSource = {category}
                            header={<div><strong>DANH MỤC</strong></div>}
                            renderItem={item => (
                                <List.Item  onClick={goToCategory(item.id)}>
                                    <Link >{item.name}</Link>
                                </List.Item>
                            )}
                        />
        
                        </Row>
                        <Row style={{margin: 24, borderRadius: 8}}>
                            <List
                                header={<div><strong>DỊCH VỤ VÀ CAM KẾT</strong></div>} 
                                bordered
                                style={{borderRadius: 8}}
                            >
                                <List.Item>Free Ship</List.Item>
                                <List.Item>Uy tín 100%</List.Item>
                                <List.Item>Cam kết chất lượng</List.Item>
                                <List.Item>Chúc bạn mua hàng vui vẻ</List.Item>
                            </List>
                        </Row>
                    </Col>
                    <Col flex= "auto" style = {{width: "80%"}}> 
                        {productDisplay}
                    </Col>
                </Row>
                    <BackTop>
                        <Button type="primary" style={{borderRadius: "50%", height: 50, width: 50, backgroundColor: "green"}}>
                            <BsChevronDoubleUp></BsChevronDoubleUp>
                        </Button>
                    </BackTop>
            </>
        );
    };

    export default ProductList;
