import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Logo from "../../assets/Logo.png";
import Name from "../../assets/name.png";
import FooterImg from "../../assets/footerdataimg.png";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoContainer}>
        <img src={Logo} alt="" />
        <img src={Name} alt="" />
      </div>
      <div className={styles.footerList}>
        <div>
          <img src={FooterImg} alt="" />
        </div>
        <div>
          <ul className={styles.listItem}>
            <li>Privacy Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
