import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Button from "../Button/Button";
const Count = () => {
  return (
    <ContainerWrapper>
      <div className={styles.countContainer}>
        <div className={styles.count}>
          <h1 className={styles.head}>1</h1>
          <p className={`p-700-18`}>Take the survey</p>
          <h4 className={styles.countPara}>
            Once you are off the waitlist, you will meet with our team to
            confirm your requirements.
          </h4>
          <Button className={"Count-Btn"} title={"Get Started"} />
        </div>
        <div className={styles.count}>
          <h1 className={styles.head}>2</h1>
          <p className={`p-700-18`}>Take the survey</p>
          <h4 className={styles.countPara}>
            Once you are off the waitlist, you will meet with our team to
            confirm your requirements.
          </h4>
        </div>
        <div className={styles.count}>
          <h1 className={styles.head}>3</h1>
          <p className={`p-700-18`}>Take the survey</p>
          <h4 className={styles.countPara}>
            Once you are off the waitlist, you will meet with our team to
            confirm your requirements.
          </h4>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Count;
