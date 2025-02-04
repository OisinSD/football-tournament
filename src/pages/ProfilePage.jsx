import React from "react";
import "../styles.css";
import BottomBar from "../components/Bars/BottomBar";
import { Layout } from "antd";
import TopBar from "../components/Bars/TopBar";
import FirstButton from "../components/Buttons/FirstButton";
import {NavLink, useLocation} from "react-router-dom";
import { useNavigate} from "react-router-dom";

export default function ProfilePage(){
    const navigateToWelcomePage = useNavigate()

    return(
        <>
        <TopBar></TopBar>
        <Layout className="back-drop">
            <div className="word-content">
                <h1>This is the profile Page</h1>
            <FirstButton
            className="first-button"
            onClick={() => navigateToWelcomePage("/")}>
                LOG OUT
            </FirstButton>
            </div>
        </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
