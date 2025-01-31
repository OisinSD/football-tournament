import React from "react";
import "../styles.css";
import { Layout } from "antd";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import notificationCard from "../components/Cards";
// import { Color } from "antd/es/color-picker";

export default function notifications(){

    return(
      <>
      <TopBar></TopBar>

      {/* <notificationCard> */}
      <Layout className="back-drop">
      <div className="word-content">
        <h3>Oisin will win the 2026 Cousins Cup</h3>
      </div>  
      </Layout>
      {/* </notificationCard> */}
      {/* <BottomBar></BottomBar> */}
      </>
    );
}