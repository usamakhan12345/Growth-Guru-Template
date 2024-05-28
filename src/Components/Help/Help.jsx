import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Button from "../Button/Button";
const Help = () => {
  return (
    <ContainerWrapper>
      <div className={styles.helpContainer}>
        <div className={styles.helpContent}>
          <h3>
            Let us help you take the first step with our recruitment expertise.
          </h3>
        </div>
        <div className={styles.helpBtnContainer}>
          <Button title={"Get Started"} />
        </div>
      </div>
      <div className={styles.helpContentContainer}>
        <h3>GrowthGuru is the unfair advantage to scale faster</h3>
        <div className={styles.helpPara}>
          <h4>
            Top talent can only do great work when they have the time to do it.
            We take the rote work off their plate so they have more time for
            strategy and moving the needle. Hand all your manual, repetitive
            tasks around campaign management, design and reporting to Growth
            Gurus to unlock your team.
          </h4>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Help;
