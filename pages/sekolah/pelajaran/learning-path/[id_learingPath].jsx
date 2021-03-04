import MainContent from "../../../../components/MainContent";
import Silabus from "../../../../components/Sekolah/Pelajaran/Silabus";
import Timeline from "../../../../components/Sekolah/Pelajaran/Timeline";
import Latihan from "../../../../components/Sekolah/Pelajaran/Latihan";
import PathPelajaran from "../../../../components/Sekolah/Pelajaran/PathPelajaran";
import { useState } from "react";
import HeaderDetailLearningPath from "../../../../components/Sekolah/Pelajaran/HeaderDetailLearningPath";

export default function id_learningPath() {
  const [openTab, setOpenTab] = useState("pelajaran");

  const openPelajaran = () => {
    setOpenTab("pelajaran");
  };
  const openSilabus = () => {
    setOpenTab("silabus");
  };
  const openTimeline = () => {
    setOpenTab("timeline");
  };
  const openLatihan = () => {
    setOpenTab("latihan");
  };
  const openDeskripsi = () => {
    setOpenTab("silabus");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetailLearningPath
          openTab={openTab}
          openPelajaran={openPelajaran}
          openSilabus={openSilabus}
          openTimeline={openTimeline}
          openLatihan={openLatihan}
        />
        <div className="h-8"></div>
        <PathPelajaran openTab={openTab} />
        <Silabus openTab={openTab} />
        <Timeline openTab={openTab} />
        <Latihan openTab={openTab} />
      </MainContent>
    </div>
  );
}
