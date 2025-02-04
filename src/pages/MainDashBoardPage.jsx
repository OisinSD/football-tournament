import React from "react";
import { Layout } from "antd";
import "../styles.css";
import BottomBar from "../components/Bars/BottomBar";
import TopBar from "../components/Bars/TopBar";

export default function MainDashBoard(){

        return (
            // <BottomBar>
            <>
            <TopBar></TopBar>
            <Layout className="back-drop">
                <div className="word-content">
                    <h1>This is the Main Dashboard</h1>
                </div>
            </Layout>
            <BottomBar></BottomBar>
            </>
        );
    };


