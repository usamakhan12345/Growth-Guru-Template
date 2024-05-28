import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Button from "../Button/Button";
const GetStarted = () => {
  return (
    <ContainerWrapper>
      <div className={styles.getStartedContainer}>
        <div className={styles.btnContainer}>
          <Button title={"Get Started"} />
        </div>
        <p className={`${styles.suppPara} p-500-28`}>
          Ready to support your team
        </p>
        <h3 className={styles.matterHead}>
          No matter your need, we can find a Growth Gurus to support
        </h3>
        <h4 className={styles.greatHead}>
          We can find a great Growth Gurus for mostGrowth Marketing related
          roles. Always based onyour exact needs and sourced for you.
        </h4>
      </div>
      <div className={styles.marketingContainer}>
        <div className={styles.marketing}>
          <p className={`p-700-18`}>Marketing Generalist</p>
          <p className={`${styles.marketPara} p-300-16 `}>
            Pull reports, Social Media, launch ads, improve SEO. They can do it
            all.
          </p>
        </div>
        <div className={styles.marketing}>
          <p className={`p-700-18`}>SEO</p>
          <p className={`${styles.marketPara} p-300-16 `}>
            Meta Titles, Internal Links, Keyword Research, Link Outreach.
            Consider it done.
          </p>
        </div>
        <div className={styles.marketing}>
          <p className={`p-700-18`}>Data and Reporting</p>
          <p className={`${styles.marketPara} p-300-16 `}>
            Become as data-driven as you tell everyone you are. Beautiful
            dashboards are waiting for you.
          </p>
        </div>
        <div className={styles.marketing}>
          <p className={`p-700-18`}>Designer</p>
          <p className={`${styles.marketPara} p-300-16 `}>
            It’s time to up-level your creatives, videos, emails and landing
            pages. Designer or Front-end developer.
          </p>
        </div>
      </div>
      <div className={styles.marketingContainer}>
        <div className={styles.marketing}>
          <p className={`p-700-18`}>Paid Ads</p>
          <p className={`${styles.marketPara} p-300-16 `}>
            Google Ads, Facebook / Instagram, TikTok or something else? We can
            help.
          </p>
        </div>
        <div className={styles.marketing}>
          <p className={`p-700-18`}>Business Operations</p>
          <p className={`${styles.marketPara} p-300-16 `}>
            Project management, logistic coordination or accounting. Give it to
            your GrowthGuru.
          </p>
        </div>
        <div className={styles.marketing}>
          <p className={`p-700-18`}>Email Marketing</p>
          <p className={`${styles.marketPara} p-300-16 `}>
            Beautiful emails send to the right people at the right time. 100%
            automated.
          </p>
        </div>
        <div className={styles.Lastmarketing}>
          <p className={`${styles.marketlastPara} p-700-30 `}>
            Any role you can think of
          </p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Button title={"Get Started"} />
      </div>
    </ContainerWrapper>
  );
};

export default GetStarted;
