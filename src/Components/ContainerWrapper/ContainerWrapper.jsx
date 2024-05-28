import React from "react";
import styles from "./style.module.scss";
const ContainerWrapper = ({ children }) => {
  return <div className={styles.containerWrapper}>{children}</div>;
};

export default ContainerWrapper;
