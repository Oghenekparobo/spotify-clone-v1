import React from "react";
import "./sidebaroption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebar_option">
      {Icon && <Icon className="sidebaroption_icon" />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarOption;
