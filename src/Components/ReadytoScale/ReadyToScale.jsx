import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import std1 from "../../assets/std1.png";
import std2 from "../../assets/std2.png";
import std3 from "../../assets/std3.png";
const ReadyToScale = () => {
  return (
    <ContainerWrapper>
      <div className={styles.talentContainer}>
        <div className={styles.talent}>
          <div className={styles.plugplaytalent1}>
            <div className={styles.imgCon}>
              <div>
                <img className={styles.telImg} src={std1} alt="" />
              </div>
              <div>
                <p className={`${styles.stdpName}   p-400-21`}>Ida</p>
                <p className={`${styles.stdpName} p-400-21`}>Web developer</p>
              </div>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
          </div>
          <div className={styles.plugplaytalent2}>
            <div className={styles.imgCon}>
              <div>
                <img className={styles.telImg} src={std1} alt="" />
              </div>
              <div>
                <p className={`${styles.stdpName}   p-400-21`}>Ida</p>
                <p className={`${styles.stdpName} p-400-21`}>Web developer</p>
              </div>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
          </div>
          <div className={styles.plugplaytalent3}>
            <div className={styles.imgCon}>
              <div>
                <img className={styles.telImg} src={std1} alt="" />
              </div>
              <div>
                <p className={`${styles.stdpName}   p-400-21`}>Ida</p>
                <p className={`${styles.stdpName} p-400-21`}>Web developer</p>
              </div>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
          </div>
        </div>
        <div className={styles.talentContent}>
          <div className={styles.contentCon}>
            <h3>Top 1% talent</h3>
            <p className={`${styles.talentPara} p-400-21`}>
              We only hire 1 out of 400 applicants. You work with the best of
              the best offshore talent. It’s harder to get into GrowthAssistant
              than Harvard!
            </p>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default ReadyToScale;
