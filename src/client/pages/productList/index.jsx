import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import GridView from "./GridView";
import {
  useParams,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import "antd/dist/antd.css";
import {
  Pagination,
  Card,
  Row,
  Col,
  List,
  Layout,
  Image,
  Divider,
  BackTop,
  Button,
  Input,
  AutoComplete,
  Space,
} from "antd";
import axios from "axios";
import { BsChevronDoubleUp, BsCardList, BsGridFill } from "react-icons/bs";

import { FaListUl, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ListView from "./ListView";
import LeftPanel from "./LeftPanel";

const { Search } = Input;

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
  const [product, setProduct] = useState([{}]);
  const [category, setCategory] = useState([{}]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [autoCmp, setAutoCmp] = useState([{}]);
  const [gridView, setGridView] = useState(true);
  const [loadingState, setLoading] = useState(true);

  let navigate = useNavigate();
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    let endPoint = [
      "http://localhost:5000/category/alltest",
      "http://localhost:5000/product/pagetest",
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
          })
        );
      };
      fetchData();
    }, 1000);
  }, []);
  // console.log(.getAll);
  //   console.log(autoCmp)

  useEffect(() => {
    // console.log("move here");
    setLoading(true);
    console.log(loadingState);
    const page =
      searchParams.get("page") === null ? 1 : searchParams.get("page");
    setCurrentPage(page);
    setTimeout(() => {
      const fetchChange = async (page, categoryId) => {
        await axios
          .get(
            `http://localhost:5000/product/pagetest?page=${page}&category=${categoryId}`
          )
          .then((res) => {
            setProduct(res.data.data);
            setTotalPage(res.data.total);
            console.log("params ", loadingState);
            setLoading(false);
          });
      };
      fetchChange(page, categoryId);
    }, 1000);
    // console.log(page)
  }, [searchParams, categoryId]);

  useEffect(() => {
    setLoading(false);
  }, [gridView]);

  console.log(searchParams.toString());
  const onPageChange = (page) => {
    setSearchParams({ page: page });
  };

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
            "margin-top": "24px",
          }}
        >
          <div id="menu">
            <div id="search-box">
              <AutoComplete
                options={autoCmp}
                // style={{ width: "40%" }}
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                dropdownStyle={{ minWidth: "21.5%" }}
              >
                <Input
                  id="search-box"
                  size="large"
                  // prefix={<FaSearch></FaSearch>}
                  placeholder=" Tìm sản phẩm ở đây"
                />
              </AutoComplete>
            </div>
            <div id="view-option">
              <Space.Compact block>
                <Button
                  id="list"
                  style={
                    gridView
                      ? { background: "!important" }
                      : { backgroundColor: "green" }
                  }
                  onClick={(e) => {
                    if (gridView) {
                      setLoading(true);
                      setTimeout(() => {
                        setGridView(false);
                      }, 1000);
                    }
                  }}
                >
                  <FaListUl></FaListUl>
                </Button>
                <Button
                  size="large"
                  id="grid"
                  style={
                    !gridView
                      ? { background: "transparent !important" }
                      : { backgroundColor: "green" }
                  }
                  onClick={(e) => {
                    if (!gridView) {
                      setLoading(true);
                      setTimeout(() => {
                        setGridView(true);
                      }, 1000);
                    }
                  }}
                >
                  <BsGridFill></BsGridFill>
                </Button>
              </Space.Compact>
            </div>
            <Divider />
          </div>
          <Row>
            <>
              {gridView ? (
                <GridView
                  product={product}
                  loadingState={loadingState}
                  currentPage={currentPage}
                  totalPage={totalPage}
                  onPageChange={onPageChange}
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
            height: 50,
            width: 50,
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
