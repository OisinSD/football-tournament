import React from "react";
import BottomBar from "../components/BottomBar";
import "../styles.css";
import { Layout } from "antd";

export default function TableStandings(){
    return(
        <>
        <Layout className="back-drop">
            <div className="word-content">
                <h1>This is the Table Standings Page</h1>
            </div>
        </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
