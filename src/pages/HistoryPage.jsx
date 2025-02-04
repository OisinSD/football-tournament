import React from "react";
import BottomBar from "../components/Bars/BottomBar";
import "../styles.css";
import { Layout } from "antd";
import TopBar from "../components/Bars/TopBar";

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
