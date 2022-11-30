import "../index.css";

import "antd/dist/antd.min.css";

import { List, Row } from "antd";
import { Link } from "react-router-dom";
const LeftPanel = ({ category }) => {
  return (
    <>
      <Row>
        <List
          size="small"
          bordered
          style={{ margin: "24px", borderRadius: "8px 0px 0px 0px" }}
          dataSource={category}
          header={
            <div>
              <strong>DANH MỤC</strong>
            </div>
          }
          renderItem={(item) => {
            return (
              <List.Item>
                <Link to={`/products/category/${item.id}?page=1`}>
                  {item.name}
                </Link>
              </List.Item>
            );
          }}
        />
      </Row>
      <Row style={{ margin: "24px", borderRadius: "8px" }}>
        <List
          header={
            <div>
              <strong>DỊCH VỤ VÀ CAM KẾT</strong>
            </div>
          }
          bordered
          style={{ borderRadius: "8px" }}
        >
          <List.Item>Free Ship</List.Item>
          <List.Item>Uy tín 100%</List.Item>
          <List.Item>Cam kết chất lượng</List.Item>
          <List.Item>Chúc bạn mua hàng vui vẻ</List.Item>
        </List>
      </Row>
    </>
  );
};

export default LeftPanel;
