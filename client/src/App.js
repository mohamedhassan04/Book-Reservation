import "./App.css";
import { Routes, Route, Navigate, Outlet, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingBook from "./pages/BookingBook";
import Addbook from "./pages/Addbook";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/booking/:bookid" element={<BookingBook />} />
          <Route path="/addbook" element={<Addbook />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

export function ProtectedRoute() {
  const isAuth = localStorage.getItem("user") ? true : false;
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
