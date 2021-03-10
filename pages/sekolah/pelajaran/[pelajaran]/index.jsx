import HeaderDetail from "../../../../components/Sekolah/Pelajaran/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import Timeline from "../../../../components/Sekolah/Pelajaran/Timeline";

import { useState } from "react";

export default function timeline() {
  const [openTab, setOpenTab] = useState("timeline");

  const toogleOpenTab = () => {
    setOpenTab("timeline");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail toogleOpenTab={toogleOpenTab} openTab={openTab} />
        <div className="h-8"></div>
        <Timeline openTab={openTab} />
      </MainContent>
    </div>
  );
}
