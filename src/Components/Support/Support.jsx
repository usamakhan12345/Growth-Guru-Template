import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import SuppImg from "../../assets/suppImage.png";
import Alarm from "../../assets/alarm-outline.png";
const Support = () => {
  return (
    <ContainerWrapper>
      <div className={styles.supportContainer}>
        <div className={styles.suppContent}>
          <h3>The key to success? Our “embed model”</h3>
          <h4 className={styles.suppPara}>
            We are not only providing talent, we are fully embedding a new team
            member into your company.
          </h4>
        </div>
        <div className={styles.suppImage}>
          <img className={styles.supImg} src={SuppImg} alt="" />
        </div>
      </div>
      <div className={styles.facilitiesContainer}>
        <div className={styles.firstFaci}>
          <div className={styles.suppImgCon}>
            <img className={styles.supImg} src={Alarm} alt="" />
          </div>
          <p className={`${styles.talentHead} p-700-18`}>
            Full-time or Part-Time
          </p>
          <h6 className={styles.talentContent}>
            Our talent works full-time or part-time, 40 hours (or 20 hours) a
            week for you (and only you).
          </h6>
        </div>
        <div className={styles.firstFaci}>
          <div className={styles.suppImgCon}>
            <img className={styles.supImg} src={Alarm} alt="" />
          </div>
          <p className={`${styles.talentHead} p-700-18`}>
            Full-time or Part-Time
          </p>
          <h6 className={styles.talentContent}>
            Our talent works full-time or part-time, 40 hours (or 20 hours) a
            week for you (and only you).
          </h6>
        </div>
        <div className={styles.firstFaci}>
          <div className={styles.suppImgCon}>
            <img className={styles.supImg} src={Alarm} alt="" />
          </div>
          <p className={`${styles.talentHead} p-700-18`}>
            Full-time or Part-Time
          </p>
          <h6 className={styles.talentContent}>
            Our talent works full-time or part-time, 40 hours (or 20 hours) a
            week for you (and only you).
          </h6>
        </div>
        <div className={styles.firstFaci}>
          <div className={styles.suppImgCon}>
            <img className={styles.supImg} src={Alarm} alt="" />
          </div>
          <p className={`${styles.talentHead} p-700-18`}>
            Full-time or Part-Time
          </p>
          <h6 className={styles.talentContent}>
            Our talent works full-time or part-time, 40 hours (or 20 hours) a
            week for you (and only you).
          </h6>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Support;
