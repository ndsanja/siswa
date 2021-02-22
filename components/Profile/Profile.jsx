import React from "react";
import Card from "../Card";
import HeaderProfile from "./HeaderProfile";

export default function Profile() {
  return (
    <div>
      <HeaderProfile />
      <div className="h-8"></div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <div className="grid gap-6">
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-32"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-72"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-72"></Card>
          </div>
        </div>
        <div className="col-span-8">
          <div className="grid gap-6">
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-52"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-96"></Card>
            <Card className=" bg-white shadow-z12-light-shadow rounded-xl h-96"></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
