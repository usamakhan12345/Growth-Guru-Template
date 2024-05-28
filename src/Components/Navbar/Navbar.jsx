import React, { useState } from "react";
import styles from "./style.module.scss";
import Logo from "../../assets/Logo.png";
import Name from "../../assets/name.png";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Button from "../Button/Button";
import { CiMenuBurger } from "react-icons/ci";
import { useRef } from "react";
const Navbar = () => {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const navbarRef = useRef();
  return (
    <div ref={navbarRef} className={styles.rohan}>
      <ContainerWrapper>
        <div className={styles.navbarContainer}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="" />
            <img src={Name} alt="" />
          </div>
          <div className={styles.listContainer}>
            <ul className={styles.headerList}>
              <li>
                <p className={`p-600-16`}>Home</p>
              </li>
              <li>
                <p className={`p-600-16`}>Agency</p>
              </li>
              <li>
                <p className={`p-600-16`}>Contact</p>
              </li>
            </ul>
          </div>
          <div className={styles.headerBtn}>
            <Button title={"Get Started"} />
          </div>
          <div className={styles.menuIcon}>
            <CiMenuBurger />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Navbar;
