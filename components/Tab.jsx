import React from "react";

export default function Tab(props) {
  return (
    <div
      onClick={props.onClick && props.onClick}
      className={`cursor-pointer ${props.className && props.className}`}
    >
      {props.children}
    </div>
  );
}
