import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import Logo from "../../assets/Logo.png";
import Name from "../../assets/name.png";
const Table = () => {
  return (
    <ContainerWrapper>
      <div className={styles.tableContainer}>
        <table cellpadding={0} cellSpacing={0}>
          <tr>
            <th className={styles.firstHeadColumn}></th>
            <th className={styles.secondHeadColumn}>
              <div className={styles.tableLogo}>
                <div>
                  <img src={Logo} alt="" />
                </div>
                <div>
                  <img src={Name} alt="" />
                </div>
              </div>
            </th>
            <th>
              <p className={`${styles.ThirdColumn} p-700-18`}>In-House</p>
            </th>
            <th>
              <p className={`${styles.fourthColumn} p-700-18`}>
                Online Platform
              </p>
            </th>
          </tr>
          <tr>
            <td className={styles.firstColumn}>Talent quality</td>
            <td className={`${styles.SecondColumn} p-500-17`}>
              <p className={`${styles.SecondColumn} p-500-17`}>
                Top 1% all vetted
              </p>
            </td>
            <td>
              <p className={`${styles.ThirdColumn} p-500-17`}>Uncertain</p>
            </td>
            <td>
              <p className={`${styles.fourthColumn} p-500-17`}>Usually low</p>
            </td>
          </tr>
          <tr>
            <td className={`${styles.firstColumn} p-500-17`}>Speed to hire</td>
            <td className={`${styles.SecondColumn} p-500-17`}>
              <p className={`${styles.SecondColumn} p-500-17`}>days</p>
            </td>
            <td>
              <p className={`${styles.ThirdColumn} p-500-17`}>Months</p>
            </td>
            <td>
              <p className={`${styles.fourthColumn} p-500-17`}>Days</p>
            </td>
          </tr>
          <tr>
            <td className={`${styles.firstColumn} p-500-17`}>Cost</td>
            <td className={`${styles.SecondColumn} p-500-17`}>
              <p className={`${styles.SecondColumn} p-500-17`}>€</p>
            </td>
            <td>
              <p className={`${styles.ThirdColumn} p-500-17`}>€€€€€€</p>
            </td>
            <td>
              <p className={`${styles.fourthColumn} p-500-17`}>€</p>
            </td>
          </tr>
          <tr>
            <td className={`${styles.firstColumn} p-500-17`}>Match to need</td>
            <td className={`${styles.SecondColumn} p-500-17`}>
              <p className={`${styles.SecondColumn} p-500-17`}>Very high</p>
            </td>
            <td>
              <p className={`${styles.ThirdColumn} p-500-17`}>Very high</p>
            </td>
            <td>
              <p className={`${styles.fourthColumn} p-500-17`}>Uncertain</p>
            </td>
          </tr>
          <tr>
            <td className={`${styles.firstColumn} p-500-17`}>
              Managed Service
            </td>
            <td className={`${styles.SecondColumn} p-500-17`}>
              <p className={`${styles.SecondColumn} p-500-17`}>
                Dedicated Support
              </p>
            </td>
            <td>
              <p className={`${styles.ThirdColumn} p-500-17`}></p>
            </td>
            <td>
              <p className={`${styles.fourthColumn} p-500-17`}>None</p>
            </td>
          </tr>
          <tr>
            <td className={`${styles.firstColumn} p-500-17`}>Support</td>
            <td className={`${styles.SecondColumn} p-500-17`}>
              <p className={`${styles.SecondColumn} p-500-17`}>
                Dedicated Support
              </p>
            </td>
            <td>
              <p className={`${styles.ThirdColumn} p-500-17`}></p>
            </td>
            <td>
              <p className={`${styles.fourthColumn} p-500-17`}>None</p>
            </td>
          </tr>
        </table>
      </div>
    </ContainerWrapper>
  );
};

export default Table;
