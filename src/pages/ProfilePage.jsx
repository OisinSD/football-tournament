import React from "react";
import "../styles.css";
import BottomBar from "../components/BottomBar";
import { Layout } from "antd";

export default function ProfilePage(){
    return(
        <>
        <Layout className="back-drop">
            <div className="word-content">
                <h1>This it he profile Page</h1>
            </div>
        </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
