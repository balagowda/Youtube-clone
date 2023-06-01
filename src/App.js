import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import "./_app.scss";

import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import WatchScreen from "./Screen/WatchScreen/WatchScreen";
import SearchScreen from "./Screen/SearchScreen";
import SubscriptionScreen from "./Screen/subscriptionScreen/SubscriptionScreen";
import ChannelScreen from "./Screen/ChannelScreen/ChannelScreen";

const Layout = ({ Children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main ">
          {Children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  // const { accessToken, loading } = useSelector((state) => state.auth);
  const accessToken="jskdhfhsdk-dfjshd324654sdfskdnfkjh";

  const navigate = useNavigate();

  useEffect(() => {
    if ( !accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  //!loading && ,,,,loading,

  return (
    <Routes>
      <Route path="/home" element={<Layout Children={<HomeScreen />} />} />

      <Route path="/login" element={<LoginScreen />} />

      <Route
        path="/search/:query"
        element={<Layout Children={<SearchScreen />} />}
      />

      <Route
        path="/watch/:id"
        element={<Layout Children={<WatchScreen />} />}
      />

      <Route
        path="/feed/subscription"
        element={<Layout Children={<SubscriptionScreen />} />}
      />

      <Route
        path="/channel/:channelId"
        element={<Layout Children={<ChannelScreen/>} />}
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
