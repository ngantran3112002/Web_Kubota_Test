import "../index.css";
import "./topmenu.css"
import React, { useEffect, useState } from "react";
import * as queryString from "query-string";

import { Divider, Button, Input, Space, AutoComplete, Dropdown } from "antd";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.min.css';

import { BsGridFill } from "react-icons/bs";

import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TopMenu({
  autoCmp,
  gridView,
  setLoading,
  setGridView,
  currentSearchParams,
  onFilterChange,
  currentPage,
  onSelect
}) {
  //   const items = [
  //     { label: "item 1", key: "item-1" }, // remember to pass the key prop
  //     { label: "item 2", key: "item-2" },
  //   ];

  const items = [
    {
      key: "1",
      label: (
        <Button onClick={() => {onFilterChange('price.desc')}}>{"xem theo giá giảm dần"}</Button>
        // <Link to = {`${currentSearchParams.search}&` + queryString.stringify({sort_by: 'price.desc'})}>
        //   {"xem theo giá giảm dần"}
        // </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Button onClick={() => {onFilterChange('price.asc')}}>{"xem theo giá tăng dần"}</Button>

      ),
    },
  ];

  return (
    <div id="menu">
      <Space block = {true} size={800}>
      <div id="search-box">
        <AutoComplete
          options={autoCmp}
          popupClassName= "popup"
          onSelect= {(value) => onSelect(value)}
          // style={{ width: "40%" }}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          dropdownStyle={{ minWidth: "21.5%" }}
        >
          <Input
            id="search-box"
            size="large"
            placeholder="🔍 Tìm sản phẩm ở đây"
          />
        </AutoComplete>
      </div>

     

      {/* <div id="view-option"> */}
      <Space size={40}>
      <Dropdown menu={{ items }}>
        <div id="filter">Sắp xếp sản phẩm theo <DownOutlined /></div>

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
      </Space>
      </Space>
      {/* </div> */}
      <Divider />
    </div>
  );
}
