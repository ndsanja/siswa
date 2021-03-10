import HeaderDetail from "../../../../components/Sekolah/Pelajaran/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import Silabus from "../../../../components/Sekolah/Pelajaran/Silabus";
import Timeline from "../../../../components/Sekolah/Pelajaran/Timeline";
import Latihan from "../../../../components/Sekolah/Pelajaran/Latihan";
import { useState } from "react";

export default function latihan() {
  const [openTab, setOpenTab] = useState("latihan");

  const toogleOpenTab = () => {
    setOpenTab("latihan");
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
