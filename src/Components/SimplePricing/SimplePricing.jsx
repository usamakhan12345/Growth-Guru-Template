import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Button from "../Button/Button";
const SimplePricing = () => {
  return (
    <ContainerWrapper>
      <h3 className={styles.priceHead}>Simple pricing, unbeatable value</h3>
      <div className={styles.pricingContainer}>
        <div className={styles.price}>
          <h3>1,500€</h3>
          <h5>per months</h5>
          <Button title={"Get Started"} />
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <h5>Elite Growth talent from the Philippines, Africa or India</h5>
            </li>
            <li>
              <h5> Full-time team member (40 hours per week)</h5>
            </li>
            <li>
              <h5>Working alongside you during your normal working hours </h5>
            </li>

            <li>
              <h5> A perfect fit: We find the perfect candidate for you </h5>
            </li>
          </ul>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default SimplePricing;
