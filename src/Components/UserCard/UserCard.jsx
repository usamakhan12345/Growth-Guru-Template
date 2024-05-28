import React from "react";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import std1 from "../../assets/std1.png";

import styles from "./style.module.scss";
const UserCard = () => {
  return (
    <ContainerWrapper>
      <div className={styles.talentContainer1}>
        <div className={styles.talent}>
          <div className={styles.plugplaytalent1}>
            <div className={styles.imgCon}>
              <div>
                <img src={std1} alt="" />
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
      </div>
    </ContainerWrapper>
  );
};

export default UserCard;
