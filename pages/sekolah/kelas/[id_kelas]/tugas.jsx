import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";
import ListTugasKelas from "../../../../components/Sekolah/Kelas/ListTugas";
import ListItemsTugasKelas from "../../../../components/Sekolah/Kelas/ListItemsTugasKelas";

export default function Tugas() {
  const namaTugas = [
    "Integral Pengantar",
    "Menulis Surat Tugas",
    "Kimia Pengantar",
    "Akuntansi Keuangan",
    "Praktek Machine Learning",
  ];

  const [openTab, setOpenTab] = useState("tugas");

  const handleOpen = () => {
    setOpenTab("tugas");
  };
  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleOpen={handleOpen} openTab={openTab} />
        <ListTugasKelas>
          {namaTugas.map((nama) => (
            <ListItemsTugasKelas
              key={nama}
              nama={nama}
              deskripsi="Tugas / essai offline"
              mapel="Matematika"
              guru="Nadiem Makarim"
              status="Terkumpul"
              deadline="17 Feb"
              jam="20.00 WIB"
              bobot="2%"
              nilai="73 / B-"
              keterangan="remidi"
            />
          ))}
        </ListTugasKelas>
      </MainContent>
    </div>
  );
}
