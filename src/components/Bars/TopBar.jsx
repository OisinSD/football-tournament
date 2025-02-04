import React from "react";
import "../../styles.css";
import { BellOutlined, BellFilled, AlignCenterOutlined, LeftOutlined } from "@ant-design/icons";
import { NavLink, useLocation} from "react-router-dom";

export default function TopBar(){
    const {pathname} = useLocation();
    return(
        /** This is the top bar which contains 3 parts, a top left icon (does nothing), center text, top right icon(notification page)**/ 
            <div 
            className="position-fixed top-0 w-100 shadow-lg d-flex align-items-center justify-content-between px-3"
            style={{ backgroundColor: "#181928", height: "60px" }}>
               
            {pathname === "/notifications" ? (
                <NavLink to ="/mainDashBoard" className="border-0">
                    <LeftOutlined style={{fontSize: "24px", color:"white"}}/> 
                </NavLink> )
                :
                (<AlignCenterOutlined style={{fontSize: "24px", color:"white"}}/> )}
                
            <h4 style={{color: "white"}}>The Cousins Cup</h4>
            <NavLink to = "/notifications" className="border-0">
            {pathname === "/notifications" ? <BellFilled style={{fontSize: "24px", color: "white"}}/> : <BellOutlined style={{fontSize: "24px", color: "white"}}/> }
            </NavLink>

            </div>
    );
}