import React from "react";
import styles from "./style.module.scss";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import UserCard from "../UserCard/UserCard";
import BuildingImage from "../../assets/buildingImage.png";
import Button from "../Button/Button";
const MeetUp = ({ isGreen }) => {
  return (
    <ContainerWrapper>
      <div
        style={{ backgroundColor: isGreen ? "#838E55" : "" }}
        className={styles.meetUpContainer}
      >
        <div className={styles.meetupContent}>
          <h3>Meet your potential future Growth Guru</h3>
          <p className={`p-400-21`}>
            Scroll through some sample profiles. Your Growth Guru will have all
            the relevant skills and experiences needed to support your business.
          </p>
          {isGreen && <Button title={"Get Started"} />}
        </div>
        <div className={styles.UserCardCon}>
          {!isGreen && <UserCard />}
          {isGreen && (
            <img className={styles.buildingImg} src={BuildingImage} alt="" />
          )}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default MeetUp;
