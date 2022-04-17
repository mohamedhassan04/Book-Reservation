import React from "react";
import { Menu, Dropdown, Button, Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import med from "../images/med.svg";
import { Link } from "react-router-dom";

const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>

      <Menu.Item>
        <a href="/addbook">Add Book</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <Link to="/">
                <div className="d-flex">
                  <img
                    src={med}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                  <h1>My Book</h1>
                </div>
              </Link>
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>
                  {user?.user?.username} <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
