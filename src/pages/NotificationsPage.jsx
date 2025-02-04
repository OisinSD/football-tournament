import React from "react";
import "../styles.css";
import { Layout } from "antd";
import TopBar from "../components/Bars/TopBar";
import NotificationCard from "../components/Cards/NotificationCard";
import Winner from "../assets/cousinsCupWinner.png";


export default function Notifications(){

    return(
      <>
      <TopBar/>
      <Layout className="back-drop">
      
      <div>
        <NotificationCard
          image = {Winner}
          title="2024 Winner"
          description=""
          />
      </div>
      </Layout>
      </>
    );
}