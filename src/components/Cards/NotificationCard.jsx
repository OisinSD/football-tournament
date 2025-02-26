import { Card } from "antd";
import React from "react";
import "../../styles.css";
import { ExpandAltOutlined } from "@ant-design/icons";


export default function NotificationCard({image, title, description}){
    const shortenText = (text, maxlength) => {
        if (text.length <= maxlength) {
          return text;
        }
        return text.slice(0, maxlength) + "...";
      };


    return(
        <Card className="notification-card">
          {/* <div className="notification-content"> */}
                {/* <img src={image} alt={title} className="notifiation-image" /> */}
                {/* <div className="notification-text"> */}
                    <h3 className="notificaiton-title">{shortenText(title, 20)}</h3>
                    <p className="notificaiton-description">{shortenText(description, 40)}</p>
                {/* </div> */}
                <ExpandAltOutlined className="notification-icon"/>
             {/* </div> */}
       
        </Card>
    );
}