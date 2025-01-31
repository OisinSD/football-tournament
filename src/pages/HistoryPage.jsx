import React from "react";
import BottomBar from "../components/BottomBar";
import "../styles.css";
import { Layout } from "antd";

export default function History(){

    return(
        <>
            <Layout className="back-drop">
                <div className="word-content">
                    <h1>This page is the Histoy page</h1>
                </div>
            </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
