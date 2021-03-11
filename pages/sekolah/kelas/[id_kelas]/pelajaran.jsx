import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import Grid from "../../../../components/Atom/Grid";
import CardPelajaran from "../../../../components/Sekolah/Pelajaran/CardPelajaran";
import { useState } from "react";

export default function Dashboard() {
  const namaPelajaran = [
    "Matematika",
    "Sosiologi",
    "Kimia",
    "Ekonomi",
    "Sejarah",
    "Pkn",
    "Biologi",
    "Fisika",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Agama",
    "BK",
  ];

  const [openTab, setOpenTab] = useState("pelajaran");

  const handleOpen = () => {
    setOpenTab("pelajaran");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleOpen={handleOpen} openTab={openTab} />
        <Grid className="grid-cols-12 gap-6">
          {namaPelajaran.map((nama) => (
            <CardPelajaran key={nama} namaPelajaran={nama} />
          ))}
        </Grid>
      </MainContent>
    </div>
  );
}
