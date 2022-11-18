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
    const [params, setParams] = useSearchParams();
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    let navigate = useNavigate();
    const {categoryId} = useParams()
    // const currentPageUrl = params.get('page')
    // const categoryUrl = params.get('category')
    
    // const postsPerPage = 9;
    // const indexOfLastPost = currentPageUrl * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;

    useEffect(() => {
        let endPoint = [
            "http://localhost:5000/category/alltest",
            "http://localhost:5000/product/pagetest"
        ]
        const fetchData = () => {
            Promise.all(endPoint.map((endPoint) => axios.get(endPoint))).then(
                axios.spread((...allData) => {
                    const allCategory = allData[0];
                    const allProd = allData[1];
                    setCategory(allCategory.data.rows);
                    setProduct(allProd.data.data)
                    setTotalPage(allProd.data.total)
                })
            )
        }
        console.log("fetchData")
        console.log(product)
        fetchData()
      }, [])
    
    
    
      useEffect( () => {
        const page = (params.get("page") === null)?  1 : params.get("page");
        console.log(page)
        setCurrentPage(page)
        const fetchChange = async (page, categoryId) => {
            await axios.get(`http://localhost:5000/product/pagetest?page=${page}&category=${categoryId}`)
            .then((res) => {
                setProduct(res.data.data);
                setTotalPage(res.data.total)
            })
        }
        console.log("params")
        console.log(product)
        console.log(categoryId)

        fetchChange(page, categoryId)
    },[params, categoryId])

    
    
    //console.log(product)
    
    // const postByPage = product.slice(indexOfFirstPost, indexOfLastPost);
    

    const productList = 
        <List   
                size = {"large"}
                grid={{ gutter: 0, column: 3 , xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 2,
                    xl: 3,
                    xxl: 3,}}
                dataSource={product}
                footer={
                    <Pagination 
                    style={{textAlignLast: "center", borderColor: "green"}}
                    pageSize = {9} 
                    defaultCurrent = {1}
                    current ={currentPage}
                    responsive={true}
                    total={totalPage}  
                    onChange={(page, newPageSize) => {
                        setParams({page: page})
                        // navigate({pathname: '/products', search:{...params, page: page}})
                        // goToCategory("")
                    }}>
                </Pagination>
                }
                // pagination = {true}
                renderItem={item => (
                    <List.Item>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://via.placeholder.com/1000"/>}>
                            <Link to = {`/products/details/${item.productId}`}>{item.name}</Link>
                        </Card>
                    </List.Item>
                )}
            />
        

   
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
                                <List.Item 
                                >
                                    <Link to={`/products/${item.id}`} onClick= {() => {}} >{item.name}</Link>
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
                        {productList}
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
