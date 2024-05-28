import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
const policy = () => {
  return (
    <ContainerWrapper>
      <div className={styles.policyContainer}>
        <p className={`${styles.ploicyHead} p-700-21`}>
          We hate to brag, but are flattered when our clients do it for us.
        </p>
        <h4>
          GrowthGuru is really responsive and flexible based on our needs. But
          what we’re really, really happy about is the Ninjas and their
          commitment to the brand. They’re like an extension of our team!
        </h4>
        <p className={`p-500-22`}>Nicolas Vinh Pelocity</p>
      </div>
      <div className={styles.workContainer}>
        <div>
          <h3>How it works</h3>
          <h4 className={styles.policyypara}>
            When you partner with GrowthAssistant you do not have to evaluate
            resumes or participate in ANY interviews – we own this process 100%!
          </h4>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default policy;
