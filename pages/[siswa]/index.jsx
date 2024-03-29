import MainContent from "../../components/MainContent";
import HeaderProfile from "../../components/Users/HeaderProfile";
import Profile from "../../components/Users/Profile";
import { useState } from "react";

export default function profile() {
  const [open, setOpen] = useState("profile");

  const toogleOpen = () => {
    setOpen("profile");
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
