import Pelajaran from "../../../components/Sekolah/Pelajaran";
import MainContent from "../../../components/MainContent";
import { useState } from "react";
import LearningPath from "../../../components/Sekolah/Pelajaran/LearningPath";
import HeaderPejaran from "../../../components/Sekolah/Pelajaran/HeaderPelajaran";

export default function index() {
  const [openTab, setOpenTab] = useState("pelajaran");

  const openPelajaran = () => {
    setOpenTab("pelajaran");
  };

  const openLearningPath = () => {
    setOpenTab("learning-path");
  };
  return (
    <div className="bg-white">
      <MainContent>
        <HeaderPejaran
          openPelajaran={openPelajaran}
          openLearningPath={openLearningPath}
          openTab={openTab}
        />
        <Pelajaran openTab={openTab} />
        <LearningPath openTab={openTab} />
      </MainContent>
    </div>
  );
}
