import MainContent from "../../../components/MainContent";
import { useState } from "react";
import LearningPath from "../../../components/Sekolah/Pelajaran/LearningPath";
import HeaderPejaran from "../../../components/Sekolah/Pelajaran/HeaderPelajaran";

export default function index() {
  const [openTab, setOpenTab] = useState("learning-path");

  const openLearningPath = () => {
    setOpenTab("learning-path");
  };
  return (
    <div className="bg-white">
      <MainContent>
        <HeaderPejaran openLearningPath={openLearningPath} openTab={openTab} />
        <LearningPath openTab={openTab} />
      </MainContent>
    </div>
  );
}
