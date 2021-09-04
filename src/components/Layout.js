import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app">{children}</div>
    </>
  );
};

export default Layout;
