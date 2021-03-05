import Pelajaran from "../../../components/Sekolah/Pelajaran";
import MainContent from "../../../components/MainContent";
import { useState } from "react";
import HeaderPejaran from "../../../components/Sekolah/Pelajaran/HeaderPelajaran";

export default function index() {
  const [openTab, setOpenTab] = useState("pelajaran");

  const openPelajaran = () => {
    setOpenTab("pelajaran");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderPejaran openPelajaran={openPelajaran} openTab={openTab} />
        <Pelajaran openTab={openTab} />
      </MainContent>
    </div>
  );
}
