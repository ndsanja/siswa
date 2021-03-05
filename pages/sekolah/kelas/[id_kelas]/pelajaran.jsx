import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import Grid from "../../../../components/Grid";
import CardPelajaran from "../../../../components/Sekolah/Pelajaran/CardPelajaran";
import { useState } from "react";

export default function Dashboard() {
  const [openTab, setOpenTab] = useState("pelajaran");

  const handlePelajaran = () => {
    setOpenTab("pelajaran");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handlePelajaran={handlePelajaran} openTab={openTab} />
        <Grid className="grid-cols-12 gap-6">
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
          <CardPelajaran />
        </Grid>
      </MainContent>
    </div>
  );
}
