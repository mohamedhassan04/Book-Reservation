import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import Loader from "../components/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  function onFinish(values) {
    dispatch(userLogin(values));
  }
  return (
    <div className="login">
      {loading && <Loader />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={8} className="log text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Login</h1>
            <hr />
            <Form.Item name="email" label="email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <button className="btn1 mt-2 mb-3">Login</button>
            <br />
            <Link to="/register">Click here to register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
