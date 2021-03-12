import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import DashboardKelas from "../../../../components/Sekolah/Kelas/DashboardKelas";
import { useState } from "react";

export default function Dashboard() {
  const [openTab, setOpenTab] = useState("dashboard");

  const handleOpen = () => {
    setOpenTab("dashboard");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleOpen={handleOpen} openTab={openTab} />
        <DashboardKelas />
      </MainContent>
    </div>
  );
}
