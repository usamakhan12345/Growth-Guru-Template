import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../../ContainerWrapper/ContainerWrapper";
import HomeImage from "../../../assets/HomeImage.png";
import Button from "../../Button/Button";
import Cus1 from "../../../assets/cus1.png";
import Cus2 from "../../../assets/cus2.png";
import Cus3 from "../../../assets/cus3.png";
import Cus4 from "../../../assets/cus4.png";
const HomeSection = () => {
  return (
    <ContainerWrapper>
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Elite offshore talent to support your Growth team
          </h1>
          <h5 className={styles.homePara}>
            GrowthGuru embeds the best offshore Growth talent into your company.
            Scale your business faster, smarter and more affordably.
          </h5>
          <Button className={"HomeBtn"} title={"Get Started"} />
        </div>
        <div className={styles.Homeimage}>
          <img className={styles.hmImg} src={HomeImage} alt="" />
        </div>
      </div>
      <div className={styles.customerContainer}>
        <div>
          <div>
            <h5 className={styles.imgContent}>
              Trusted by customers to fuel business growth
            </h5>
          </div>
          <div className={styles.cusImageContainer}>
            <img className={styles.cusImg} src={Cus1} alt="" />
            <img className={styles.cusImg} src={Cus2} alt="" />
            <img className={styles.cusImg} src={Cus3} alt="" />
            <img className={styles.cusImg} src={Cus4} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.AssContainer}>
        <div className={styles.head}>
          <h1>
            The assistance required for your team to unlock Growth potential
          </h1>
        </div>
        <div className={styles.assParaContain}>
          <h4 className={styles.assPara}>
            From VC-backed startups to agencies to fast growing D2C brands anf
            Freelancers – all use GrowthGuru to leverage global remote talent
          </h4>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default HomeSection;
