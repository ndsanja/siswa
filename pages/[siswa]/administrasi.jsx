import MainContent from "../../components/MainContent";
import HeaderProfile from "../../components/Users/HeaderProfile";
import Profile from "../../components/Users/Profile";
import { useState } from "react";

export default function administrasi() {
  const [open, setOpen] = useState("administrasi");

  const toogleOpen = () => {
    setOpen("administrasi");
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
