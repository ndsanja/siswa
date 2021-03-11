import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";
import ListSiswa from "../../../../components/Sekolah/Kelas/ListSiswaKelas";
import ListItemsSiswaKelas from "../../../../components/Sekolah/Kelas/ListItemsSiswaKelas";

export default function Siswa() {
  const namaSiswa = [
    "Nila Dwi Sanja",
    "Raditya Dika",
    "Babe Cabita",
    "Dodit Mulyanto",
    "Kim Jisso",
    "Lalisa Manoban",
    "Kim Jennie",
    "Rose Rosie",
    "Fiki Naki",
    "Kaesang Pangarep",
    "Nissa Sabyan",
  ];
  const [openTab, setOpenTab] = useState("siswa");

  const handleOpen = () => {
    setOpenTab("siswa");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleOpen={handleOpen} openTab={openTab} />
        <ListSiswa>
          {namaSiswa.map((nama) => (
            <ListItemsSiswaKelas
              key={nama}
              nama={nama}
              kelas="XII-IPS 3"
              nis="123456"
              status="Active"
              deskripsi="verified"
            />
          ))}
        </ListSiswa>
      </MainContent>
    </div>
  );
}
