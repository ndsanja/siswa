import MainContent from "../../components/MainContent";
import HeaderProfile from "../../components/Users/HeaderProfile";
import Profile from "../../components/Users/Profile";
import { useState } from "react";

export default function eraport() {
  const [open, setOpen] = useState("eraport");

  const toogleOpen = () => {
    setOpen("eraport");
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
