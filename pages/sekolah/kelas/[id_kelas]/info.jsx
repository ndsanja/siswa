import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";

export default function Info() {
  const [openTab, setOpenTab] = useState("info");

  const handleInfo = () => {
    setOpenTab("info");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleInfo={handleInfo} openTab={openTab} />
      </MainContent>
    </div>
  );
}
