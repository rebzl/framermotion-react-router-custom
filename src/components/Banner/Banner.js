import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import "./Banner.scss";

const Banner = ({ title, bannerImg }) => {
  return (
    <Layout>
      <div className="banner-container">
        {/* <h1 style={{ marginRight: spacing + "em" }}>Hello Style!</h1> */}
        <div className={`banner ${bannerImg}`}>
          <div className="text">
            <h2>{title}</h2>
            <Link to="./" className="link">
              read more
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
