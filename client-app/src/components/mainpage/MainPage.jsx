import React from "react";
import Container from "../container/Container";
import styles from "./MainPage.module.css";
import Window from "../window/Window";
const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Container>
        <div className={styles.mainPageInner}>
          <Window></Window>
        </div>
      </Container>
    </div>
  );
};
export default MainPage;
