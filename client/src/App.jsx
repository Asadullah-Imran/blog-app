import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import VerifyEmail from "./pages/VerifyEmail"; // Adjust the path as needed
import WritePost from "./pages/WritePost";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes outside of the main layout */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Main layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="create-post" element={<WritePost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
