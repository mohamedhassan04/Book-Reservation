import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllBooks } from "../redux/actions/booksActions";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
  const { books } = useSelector((state) => state.booksReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalBooks, settotalBooks] = useState([]);
  const [text, settext] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);
  useEffect(() => {
    settotalBooks(books);
  }, [books]);

  return (
    <DefaultLayout>
      {loading == true && <Loader />}
      <Row justify="center" className="mt-3" gutter={16}>
        <Col className="int " lg={8} sm={24} xs={24}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => settext(e.target.value)}
          />
        </Col>
      </Row>
      <Row justify="center" gutter={16}>
        {totalBooks
          ?.filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
          .map((book) => {
            return (
              <Col lg={5} sm={24} xs={24}>
                <div className="book p-2 bs1 ">
                  <img src={book.URL} className="bookimg" />
                  <div className="book-content d-flex align-items-center justify-content-between">
                    <div>
                      <p>{book.name}</p>
                      <p> {book.publicationdate} </p>
                    </div>
                    <div>
                      <button className="btn1">
                        <Link to={`/booking/${book._id}`}>Book Now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </DefaultLayout>
  );
};

export default Home;
