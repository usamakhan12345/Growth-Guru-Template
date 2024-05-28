import React from "react";
import styles from "./style.module.scss";
const Button = ({ title, className }) => {
  return (
    <div>
      <button className={`${styles.btn} ${className}`}>{title}</button>
    </div>
  );
};

export default Button;
