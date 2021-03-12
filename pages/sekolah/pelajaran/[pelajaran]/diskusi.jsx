import HeaderDetail from "../../../../components/Sekolah/Pelajaran/HeaderDetail";
import DiskusiUmum from "../../../../components/Sekolah/Pelajaran/DiskusiUmum";
import DiskusiKelas from "../../../../components/Sekolah/Pelajaran/DiskusiKelas";
import DiskusiKelompok from "../../../../components/Sekolah/Pelajaran/DiskusiKelompok";
import MainContent from "../../../../components/MainContent";
import TabPanel from "../../../../components/Atom/TabPanel";

import { useState } from "react";
import DiskusiTab from "../../../../components/Sekolah/Pelajaran/DiskusiTab";

export default function timeline() {
  const menu = ["Diskusi Kelompok", "Diskusi Kelas", "Diskusi Umum"];

  const [openTab, setOpenTab] = useState("diskusi");
  const [openTabMenu, setOpenTabMenu] = useState("Diskusi Kelompok");

  const toogleOpenTab = () => {
    setOpenTab("diskusi");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail toogleOpenTab={toogleOpenTab} openTab={openTab} />
        <div className="h-8" />
        <DiskusiTab
          openTabMenu={openTabMenu}
          setOpenTabMenu={setOpenTabMenu}
          menu={menu}
        />
        <TabPanel>
          {openTabMenu == "Diskusi Kelompok" && <DiskusiKelompok />}
          {openTabMenu == "Diskusi Kelas" && <DiskusiKelas />}
          {openTabMenu == "Diskusi Umum" && <DiskusiUmum />}
        </TabPanel>
      </MainContent>
    </div>
  );
}
