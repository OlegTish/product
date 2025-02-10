import React from "react";

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-switch">
      <span className="material-icons" onClick={onSwitch} style={{ cursor: "pointer", fontSize: "32px" }}>
        {icon}
      </span>
    </div>
  );
}

export default IconSwitch;