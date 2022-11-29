import "antd/dist/antd.min.css";
import React, { useEffect, useState } from "react";
import * as queryString from "query-string";
import * as _ from "lodash";

import "./index.css";
// import 'antd/dist/antd.less';
import GridView from "./GridView";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Row, Col, BackTop, Button } from "antd";
import axios from "axios";
import { BsChevronDoubleUp, BsGridFill } from "react-icons/bs";

import ListView from "./ListView";
import LeftPanel from "./LeftPanel";
import TopMenu from "./TopMenu";

import { CartContext } from "../../context";
import { useContext } from "react";
import { LoadingContext } from "react-router-loading";


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
  const context = useContext(CartContext);
  const loadingContext = useContext(LoadingContext)
  const { categoryId } = useParams();
  const currentSearchParams = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState([{}]);
  const [category, setCategory] = useState([{}]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [autoCmp, setAutoCmp] = useState([{}]);
  const [gridView, setGridView] = useState(true);
  const [loadingState, setLoading] = useState(true);
  const [addToCartProduct, setAddToCartProduct] = [{}];

  const addToCart = (addToCartProduct) => {
    context.setCartList([addToCartProduct, ...context.cartList]);
  };

  useEffect(() => {
    // setLoading(true);
    let endPoint = [
      "http://localhost:5000/category/alltest",
      "http://localhost:5000/product/pagetest/1",
      "http://localhost:5000/product/alltest",
    ];
    setTimeout(() => {
      const fetchData = () => {
        Promise.all(endPoint.map((endPoint) => axios.get(endPoint))).then(
          axios.spread((...allData) => {
            const allCategory = allData[0].data;
            const allProd = allData[1].data;
            const autoCmpData = allData[2].data;
            setCategory(allCategory.rows);
            setProduct(allProd.data);
            setAutoCmp((autoCmp) =>
              autoCmpData.map((item) => {
                return { value: item.name, label: item.name, ...item };
              })
            );
            setTotalPage(allProd.data.total);
            setLoading(false);
            loadingContext.done()
          })
        );
      };
      fetchData();
    }, 1000);
  }, []);

  const fetchChange = async (categoryId) => {
    const page =
      searchParams.get("page") === null ? 1 : searchParams.get("page");
      setCurrentPage(page);
    const query = queryString.stringify(
      { categoryId: categoryId,  sort_by: searchParams.get("sort_by")},
      { skipNull: true }
    );
    console.log(currentSearchParams.search)
    console.log(searchParams.get("sort_by"))
    await axios
      .get(`http://localhost:5000/product/pagetest/${page}?` + query)
      .then((res) => {
        setProduct(res.data.data);
        setTotalPage(res.data.total);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchChange(categoryId);
    }, 1000);
  }, [searchParams, categoryId]);

  useEffect(() => {
    setLoading(false);
  }, [gridView]);

  const onPageChange = (page) => {
    const newQuery = queryString.parse(currentSearchParams.search);
    setSearchParams({ ...newQuery, page: page });
  };

  const onFilterChange = (option) => {
    const queryParams = queryString.parse(currentSearchParams.search);
    const newQuery = {...queryParams, sort_by: option}

    console.log(`${currentSearchParams.pathname}` +'?'+ queryString.stringify(newQuery));
    navigate({
      pathname: currentSearchParams.pathname,
      search: '?'+ queryString.stringify(newQuery)
    })
  };

  const onSelect = (value) => {
    const productId = _.find(autoCmp, {name: value}).productId;
    navigate({
      pathname: `/products/details/${productId}`
    })
  }

  return (
    <>
      <Row>
        <Col id="left=panel" flex="20%">
          <LeftPanel category={category}></LeftPanel>
        </Col>
        <Col
          id="right-panel"
          flex="auto"
          style={{
            marginTop: "24px",
          }}
        >
          <TopMenu
            currentPage={currentPage}
            currentSearchParams={currentSearchParams}
            autoCmp={autoCmp}
            gridView={gridView}
            setGridView={setGridView}
            setLoading={setLoading}
            onFilterChange={onFilterChange}
            onSelect={onSelect}
          />
          <Row>
            <>
              {gridView ? (
                <GridView
                  product={product}
                  loadingState={loadingState}
                  currentPage={currentPage}
                  totalPage={totalPage}
                  onPageChange={onPageChange}
                  addToCart={addToCart}
                  itemObj={addToCartProduct}
                  setAddToCartProduct={setAddToCartProduct}
                />
              ) : (
                <ListView
                  onPageChange={onPageChange}
                  product={product}
                  loadingState={loadingState}
                  currentPage={currentPage}
                  totalPage={totalPage}
                />
              )}
            </>
          </Row>
        </Col>
      </Row>
      <BackTop>
        <Button
          type="primary"
          style={{
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            backgroundColor: "green",
          }}
        >
          <BsChevronDoubleUp></BsChevronDoubleUp>
        </Button>
      </BackTop>
    </>
  );
};

export default ProductList;
