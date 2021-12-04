import Wrapper from "layouts/Wrapper/Wrapper";
import React from "react";
import styles from "./services.module.css";

function Services() {
  return (
    <Wrapper>
      <div className={`py-100px ${styles.servicesWrapper}`}>
        <div className={styles.servicesCards}>
          <ServiceCard
            title="Portfolio Management"
            body="Structured portfolio 24/7 Support Access to DeFi opportunities 1-on-1
            bi-weekly calls to directly manage your portfolio"
            buttonText="Pricing on inquiry"
          />
          <ServiceCard
            title="Consultancy"
            body="We help you get your journey in the digital asset space off the ground

            "
            buttonText="100$/h"
          />
          <ServiceCard
            title="Vault"
            body="Learn about our vault and have access to crypto investments with a completelly hands off approach and a well distributed portfolio"
            button={
              <button className="pointer white">
                <span className=" fs-20px ">20%/1%</span>
                <p className="fs-10px  ">Profit/management fee</p>
              </button>
            }
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;

const ServiceCard = (props) => {
  return (
    <div className={styles.serviceCard}>
      <div className={` fs-20px white weight-7 ${styles.service_card_title}`}>
        {props.title}
      </div>
      <div
        className={`blue fs-20px weight-7 text-center ${styles.service_card_body}`}
      >
        {props.body}
      </div>
      {props.button ? (
        props.button
      ) : (
        <button className="fs-20px white weight-7 pointer">
          {props.buttonText}
        </button>
      )}
    </div>
  );
};
