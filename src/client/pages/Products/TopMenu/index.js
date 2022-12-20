import "../index.css";
import "./topmenu.css";
import React from "react";

import { AutoComplete, Button, Divider, Dropdown, Input, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
// import 'antd/dist/antd.min.css';
import { BsGridFill } from "react-icons/bs";

import { FaListUl } from "react-icons/fa";

export default function TopMenu({
  autoCmp,
  gridView,
  setLoadingStatus,
  setGridView,
  currentSearchParams,
  onFilterChange,
  currentPage,
  onSelect,
}) {
  const items = [
    {
      key: "1",
      label: (
        <Button
          onClick={() => {
            onFilterChange("price.DESC");
          }}
        >
          {"xem theo giá giảm dần"}
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          onClick={() => {
            onFilterChange("price.ASC");
          }}
        >
          {"xem theo giá tăng dần"}
        </Button>
      ),
    },
  ];

  return (
    <>
      <div id="menu">
        {/*<Space block={true} size={800}>*/}
        <div id="search-box">
          <AutoComplete
            style={{ width: 200 }}
            options={autoCmp}
            popupClassName="popup"
            onSelect={(value) => onSelect(value)}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          >
            <Input
              id="search-box"
              size="large"
              placeholder="🔍 Tìm sản phẩm ở đây"
            />
          </AutoComplete>
        </div>

        <Space size={40} id="viewOption">
          <Dropdown menu={{ items }}>
            <div id="filter">
              Sắp xếp sản phẩm theo <DownOutlined />
            </div>
          </Dropdown>
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
                  setLoadingStatus(true);
                  setTimeout(() => {
                    setGridView(false);
                  }, 500);
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
                  setLoadingStatus(true);
                  setTimeout(() => {
                    setGridView(true);
                  }, 1000);
                }
              }}
            >
              <BsGridFill></BsGridFill>
            </Button>
          </Space.Compact>
        </Space>
        {/*</Space>*/}
        {/* </div> */}
      </div>
      <Divider />
    </>
  );
}
