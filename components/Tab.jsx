import React from "react";

export default function Tab(props) {
  return (
    <div className={`cursor-pointer ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}
