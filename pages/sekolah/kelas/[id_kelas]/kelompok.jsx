import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";

export default function Kelompok() {
  const [openTab, setOpenTab] = useState("kelompok");

  const handleOpen = () => {
    setOpenTab("kelompok");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleOpen={handleOpen} openTab={openTab} />
      </MainContent>
    </div>
  );
}
