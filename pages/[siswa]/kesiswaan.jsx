import MainContent from "../../components/MainContent";
import HeaderProfile from "../../components/Users/HeaderProfile";
import Profile from "../../components/Users/Profile";
import { useState } from "react";

export default function kesiswaan() {
  const [open, setOpen] = useState("kesiswaan");

  const toogleOpen = () => {
    setOpen("kesiswaan");
  };
  return (
    <div className="bg-white">
      <MainContent>
        <HeaderProfile open={open} toogleOpen={toogleOpen} />
        <Profile />
      </MainContent>
    </div>
  );
}
