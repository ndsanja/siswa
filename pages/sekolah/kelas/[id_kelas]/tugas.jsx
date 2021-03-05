import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";
import ListTugasKelas from "../../../../components/Sekolah/Kelas/ListTugas";
import ListItemsTugasKelas from "../../../../components/Sekolah/Kelas/ListItemsTugasKelas";

export default function Tugas() {
  const [openTab, setOpenTab] = useState("tugas");

  const handleTugas = () => {
    setOpenTab("tugas");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleTugas={handleTugas} openTab={openTab} />
        <ListTugasKelas>
          <ListItemsTugasKelas
            nama="Integral Pengantar"
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
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
          <ListItemsTugasKelas
            nama="Integral Pengantar"
            deskripsi="Tugas"
            mapel="Matematika"
            guru="Nadiem Makarim"
            status="Terkumpul"
            deadline="17 Feb"
            jam="20.00 WIB"
            bobot="2%"
            nilai="73 / B-"
          />
        </ListTugasKelas>
      </MainContent>
    </div>
  );
}
