import React from "react";
import "../styles.css";
import BottomBar from "../components/BottomBar";
import { Layout } from "antd";
import TopBar from "../components/TopBar";

export default function ProfilePage(){
    return(
        <>
        <TopBar></TopBar>
        <Layout className="back-drop">
            <div className="word-content">
                <h1>This it he profile Page</h1>
            </div>
        </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
