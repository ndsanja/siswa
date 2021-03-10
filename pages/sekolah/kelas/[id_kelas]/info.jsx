import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";

export default function Info() {
  const [openTab, setOpenTab] = useState("info");

  const handleOpen = () => {
    setOpenTab("info");
  };
  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleOpen={handleOpen} openTab={openTab} />
      </MainContent>
    </div>
  );
}
