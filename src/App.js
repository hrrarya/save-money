import React from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const { Header } = Layout;
  return (
    <Router>
      <Layout>
        <Header>
          <Navbar />
        </Header>
      </Layout>
    </Router>
  );
}
