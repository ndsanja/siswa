import React from "react";
import Card from "./Card";

export default function MainContent(props) {
  return (
    <div className="w-9/12 absolute right-0 top-0 mt-24 bg-white">
      <div className="container p-10 ">{props.children}</div>
    </div>
  );
}
