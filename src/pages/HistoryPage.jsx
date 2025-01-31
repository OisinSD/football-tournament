import React from "react";
import BottomBar from "../components/BottomBar";
import "../styles.css";
import { Layout } from "antd";
import TopBar from "../components/TopBar";

export default function History(){

    return(
        <>
        <TopBar></TopBar>
            <Layout className="back-drop">
                <div className="word-content">
                    <h1>This page is the Histoy page</h1>
                </div>
            </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
