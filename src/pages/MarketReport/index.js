import Wrapper from "layouts/Wrapper/Wrapper";
import React from "react";
import styles from "./MarketReport.module.css";

import brandImg1 from "assets/images/brand-img-1.png";
import brandImg2 from "assets/images/brand-img-2.png";
import brandImg3 from "assets/images/brand-img-3.png";
import brandImg4 from "assets/images/brand-img-4.png";

function MarketReport() {
  return (
    <Wrapper>
      <div className={`py-100px ${styles.market_report_wrapper}`}>
        <div className={styles.market_report_content}>
          <p
            className={`fs-20px blue weight-7 mb-25px ${styles.market_report_title}`}
          >
            December - “customizable title”
          </p>

          <div className={styles.market_brand}>
            <div className={styles.market_brand_left}>
              <p className="dark-blue mb-15px fs-20px weight-7">Market wrap </p>
              <textarea
                placeholder="“customizable text here”"
                className="fs-20px blue weight-7"
              ></textarea>
            </div>
            <div className={styles.market_brand_right}>
              <p className="dark-blue mb-15px fs-20px weight-7">
                Some coins on our watchlist
              </p>

              <div className={styles.market_brand_right_brands}>
                <BrandImgCard img={brandImg1} />
                <BrandImgCard img={brandImg2} />
                <BrandImgCard img={brandImg3} />
                <BrandImgCard img={brandImg4} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.market_report_form}>
          <p className="fs-20px white weight-7">
            Do you want our market wrap emailed to you every month?
          </p>

          <div>
            <input
              type="text"
              placeholder="Your e-mail"
              className="fs-14px white weight-4"
            />
            <button className="bg-btn-blue pointer fs-14px white weight-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MarketReport;

const BrandImgCard = ({ img }) => {
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};
