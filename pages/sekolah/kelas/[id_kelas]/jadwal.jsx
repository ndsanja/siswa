import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";

export default function Jadwal() {
  const [openTab, setOpenTab] = useState("jadwal");

  const handleJadwal = () => {
    setOpenTab("jadwal");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleJadwal={handleJadwal} openTab={openTab} />
      </MainContent>
    </div>
  );
}
