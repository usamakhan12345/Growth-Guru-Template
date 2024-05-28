import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
const Offer = () => {
  return (
    <ContainerWrapper>
      <div className={styles.offerContainer}>
        <div className={styles.offer}>
          <div>
            <p className={`${styles.para} ${styles.offerheading} p-500-22`}>
              BETTER TALENT
            </p>
          </div>
          <div>
            <p className={`${styles.para} p-700-30`}>Top 1%</p>
          </div>
          <div>
            <h6 className={`${styles.para} ${styles.line1}`}>
              We admit only the most exceptional individuals as Growth Gurus
            </h6>
          </div>
          <div>
            <h6 className={`${styles.para} ${styles.line2}`}>
              Plus we hire each role uniquely based on your needs
            </h6>
          </div>
        </div>
        <div className={styles.offer}>
          <div>
            <p className={`${styles.para} ${styles.offerheading} p-500-22`}>
              LOWER COST
            </p>
          </div>
          <div>
            <p className={`${styles.para} p-700-30`}>Save over 70%</p>
          </div>
          <div>
            <h6 className={`${styles.para} ${styles.line1}`}>
              Using GrowthGuru compared to entry-level US and European talent
            </h6>
          </div>
          <div>
            <h6 className={`${styles.para} ${styles.line2}`}>
              Simple pricing: most roles are just €1,500 per month (full-time)
            </h6>
          </div>
        </div>
        <div className={styles.offer}>
          <div>
            <p className={`${styles.para} ${styles.offerheading} p-500-22`}>
              FAST HIRING
            </p>
          </div>
          <div>
            <p className={`${styles.para} p-700-30`}>Hire within days</p>
          </div>
          <div>
            <h6 className={`${styles.para} ${styles.line1}`}>
              We’ll find and place your Growth Guru in around 1 week
            </h6>
          </div>
          <div>
            <h6 className={`${styles.para} ${styles.line2}`}>
              All of the sourcing, interviewing and vetting process is done for
              you
            </h6>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Offer;
