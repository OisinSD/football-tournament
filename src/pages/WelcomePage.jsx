import React from "react";
import FirstButton from "../components/Buttons/FirstButton";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import CousinsImg from "../assets/WelcomeImg.png";
import "../styles.css";
import TopBar from "../components/Bars/TopBar";


export default function WelcomePage(){
    const navigateToMainDash = useNavigate() 
    
        return (
            <>
            
            <Layout 
            className="welcome-page"
            style={{ backgroundImage: `url(${CousinsImg})` }} 
            >
                 {/* Faded overlay */}
                <div className="fade-effect"></div>

            <div 
            className="container-fluid content-container" 
            >
                    <div className="discription">
                    <h1 className="fw-bolder mt-4">The Cousins Cup App</h1>
                        <p>
                            Create new events and view past tournaments.
                        </p>
                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <FirstButton className ="first-button"
                                
                                onClick={() => navigateToMainDash("/mainDashBoard")}
                                >
                                    Get Started
                                </FirstButton>
                            </div>
                        </div>
                    </div>
                </div>
          
            </Layout>
            </>
        );
    }

