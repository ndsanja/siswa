import HeaderDetail from "../../../components/Sekolah/Pelajaran/HeaderDetail";
import MainContent from "../../../components/MainContent";
import Silabus from "../../../components/Sekolah/Pelajaran/Silabus";
import Timeline from "../../../components/Sekolah/Pelajaran/Timeline";
import { useState } from "react";

export default function id_pelajaran() {
  const [openTab, setOpenTab] = useState("silabus");
  const openSilabus = () => {
    setOpenTab("silabus");
  };
  const openTimeline = () => {
    setOpenTab("timeline");
  };
  const openLatihan = () => {
    setOpenTab("silabus");
  };
  const openDeskripsi = () => {
    setOpenTab("silabus");
  };
  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail
          openTab={openTab}
          openSilabus={openSilabus}
          openTimeline={openTimeline}
        />
        <div className="h-8"></div>
        <Silabus openTab={openTab} />
        <Timeline openTab={openTab} />
      </MainContent>
    </div>
  );
}
