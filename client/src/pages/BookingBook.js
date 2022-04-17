import { Col, Row, Divider, DatePicker, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Loader from "../components/Loader";
import { getAllBooks } from "../redux/actions/booksActions";
import moment from "moment";
import { bookbook } from "../redux/actions/bookingActions";

const { RangePicker } = DatePicker;

const Bookingbook = () => {
  const { bookid } = useParams();
  const { books } = useSelector((state) => state.booksReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  const [book, setbook] = useState({});
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalDays, setTotalDays] = useState(0);
  const [totalRes, setTotalRes] = useState(0);
  const [showmodal, setShowmodal] = useState(false);

  useEffect(() => {
    if (books.length == 0) {
      dispatch(getAllBooks());
    } else {
      setbook(books.find((o) => o._id == bookid));
    }
  }, [books]);
  useEffect(() => {
    setTotalRes(totalDays);
    if (totalDays > 14) {
      message.error("Max days reservation 14 days");
    }
  }, [totalDays]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("DD MMM yyyy "));
    setTo(moment(values[1]).format("DD MMM yyyy "));
    setTotalDays(values[1].diff(values[0], "days"));
  }
  function BookNow() {
    if (totalDays < 14) {
      const reqObj = {
        user: JSON.parse(localStorage.getItem("user"))._id,
        book: bookid,
        totalDays,
        bookedTimeSlots: {
          from,
          to,
        },
      };
      dispatch(bookbook(reqObj));
      window.location.reload(500);
    } else {
      message.error("Max days reservation 14 days");
    }
  }

  return (
    <DefaultLayout>
      {loading && <Loader />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "86vh" }}
      >
        <Col lg={10} sm={24} xs={24}>
          <img src={book.URL} className="bookimg2 bs1" />
        </Col>
        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Car Details
          </Divider>
          <div style={{ textAlign: "left" }}>
            <p>
              <span>ISBN:</span> {book.ISBN}
            </p>
            <p>
              <span>Name:</span> {book.name}
            </p>
            <p>
              <span>Subject:</span> {book.subject}
            </p>
            <p>
              <span>Overview:</span> {book.overview}
            </p>
            <p>
              {" "}
              <span>Publisher:</span> {book.publisher}
            </p>
            <p>
              {" "}
              <span>Publication date:</span> {book.publicationdate}
            </p>
            <p>
              {" "}
              <span>Language:</span>
              {book.language}
            </p>
            <p>
              {" "}
              <span>Author:</span> {book.Author}
            </p>
          </div>
          <Divider type="horizontal" dashed>
            Select Periode of location
          </Divider>
          <RangePicker format="DD MMM yyyy" onChange={selectTimeSlots} />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowmodal(true);
            }}
          >
            See the Time Slots
          </button>
          {from && to && (
            <div>
              <p>
                Total Days: <b>{totalDays} days</b>
              </p>
              <h4>Total Reservation: {totalRes} days</h4>
              <button className="btn1" onClick={BookNow}>
                Book Now
              </button>
            </div>
          )}
        </Col>

        {book.name && (
          <Modal
            visible={showmodal}
            closable={false}
            footer={false}
            title="Booked Time Slots"
          >
            <div>
              {book.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}
              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowmodal(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Row>
    </DefaultLayout>
  );
};

export default Bookingbook;
