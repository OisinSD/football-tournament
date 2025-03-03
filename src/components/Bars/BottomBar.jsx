import React from "react";
import {
    HomeFilled, 
    HomeOutlined,
    TabletFilled,
    TabletOutlined,
    BookFilled,
    BookOutlined,
    UserOutlined,
    SmileFilled,
 } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";


 export default function BottomBar() {
    const { pathname } = useLocation();

    return(
        
        <div
        className="position-fixed bottom-0 text-center w-100 shadow-lg d-flex align-items-center justify-content-around"
        style={{ backgroundColor: "#222232", height: "45px" }}>
            
            <NavLink to="/mainDashBoard" className="border-0">
            {pathname === "/mainDashBoard" ? <HomeFilled style={{fontSize: "22px", color: "white"}} /> : <HomeOutlined style={{fontSize: "22px", color: "white"}}/> }
            </NavLink>

            <NavLink to="/tableStandings" className="border-0">
            {pathname === "/tableStandings" ? <TabletFilled style={{fontSize: "22px", color: "white"}} /> : <TabletOutlined style={{fontSize: "22px", color: "white"}}/>}
            </NavLink>

            <NavLink to= "/history" className="border-0">
            {pathname === "/history" ? <BookFilled style={{fontSize: "22px", color: "white"}}/> : <BookOutlined style={{fontSize: "22px", color: "white"}}/>}
            </NavLink>

            <NavLink to= "/MyProfile" className="border-0">
            {pathname === "/MyProfile" ? <SmileFilled style={{fontSize: "22px", color: "white"}}/> : <UserOutlined style={{fontSize: "22px", color: "white"}}/>} 
            </NavLink>
        </div>
        
    );
 }
