import React from "react";
import BottomBar from "../components/Bars/BottomBar";
import "../styles.css";
import { Layout } from "antd";
import TopBar from "../components/Bars/TopBar";

export default function TableStandings(){
    return(
        <>
        <TopBar></TopBar>
        <Layout className="back-drop">
            <div className="word-content">
                <h1>This is the Table Standings Page</h1>
            </div>
        </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
