import React from "react";
import "../styles.css";
import BottomBar from "../components/Bars/BottomBar";
import { Layout } from "antd";
import TopBar from "../components/Bars/TopBar";
import FirstButton from "../components/Buttons/FirstButton";
import LogOutButton from "../components/Buttons/LogOutButton";
import {NavLink, useLocation} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

export default function ProfilePage(){
    const navigateToWelcomePage = useNavigate()

    return(
        <>
        <TopBar></TopBar>
        <Layout className="back-drop">
            <div className="word-content">
                <UserOutlined style={{fontSize: "60px"}}/>
                <h1>Your Profile</h1>
                
                <br></br>
            <LogOutButton
            className="second-button"
            onClick={() => navigateToWelcomePage("/")}>
                LOG OUT
            </LogOutButton>
            </div>
        </Layout>
        <BottomBar></BottomBar>
        </>
    );
}
