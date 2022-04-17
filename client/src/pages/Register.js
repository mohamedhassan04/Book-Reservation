import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import Loader from "../components/Loader";

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  function onFinish(values) {
    dispatch(userRegister(values));
    console.log(values);
  }
  return (
    <div className="login">
      {loading && <Loader />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={8} className="log1 text-left p-4">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="email" label="E-mail" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <button className="btn1 mt-2 mb-3">Register</button>
            <br />
            <Link to="/login">Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
