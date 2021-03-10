import HeaderDetail from "../../../../components/Sekolah/Pelajaran/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import Silabus from "../../../../components/Sekolah/Pelajaran/Silabus";
import Timeline from "../../../../components/Sekolah/Pelajaran/Timeline";
import Latihan from "../../../../components/Sekolah/Pelajaran/Latihan";
import { useState } from "react";

export default function deskripsi() {
  const [openTab, setOpenTab] = useState("deskripsi");

  const toogleOpenTab = () => {
    setOpenTab("deskripsi");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail toogleOpenTab={toogleOpenTab} openTab={openTab} />
        <div className="h-8"></div>
        <Silabus openTab={openTab} />
        <Timeline openTab={openTab} />
        <Latihan openTab={openTab} />
      </MainContent>
    </div>
  );
}
