import React, { Component } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

export default class MainLayout extends Component {
  render() {
    return (
      <div className="max-w-screen-2xl bg-base-200 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  }
}
