import React from "react";
import { Layout } from "antd";
import "../styles.css";
import BottomBar from "../components/BottomBar";

export default function MainDashBoard(){

        return (
            // <BottomBar>
            <>
            <Layout className="back-drop">
                <div className="word-content">
                    <h1>This is the Main Dashboard</h1>
                </div>
            </Layout>
            <BottomBar></BottomBar>
            </>
        );
    };


