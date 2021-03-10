import HeaderDetail from "../../../../components/Sekolah/Pelajaran/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import Silabus from "../../../../components/Sekolah/Pelajaran/Silabus";
import Timeline from "../../../../components/Sekolah/Pelajaran/Timeline";
import Latihan from "../../../../components/Sekolah/Pelajaran/Latihan";
import { useState } from "react";

export default function silabus() {
  const [openTab, setOpenTab] = useState("silabus");

  const toogleOpenTab = () => {
    setOpenTab("silabus");
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
