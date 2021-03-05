import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";
import ListGuruKelas from "../../../../components/Sekolah/Kelas/ListGuruKelas";
import ListItemsGuruKelas from "../../../../components/Sekolah/Kelas/ListItemsGuruKelas";

export default function Guru() {
  const [openTab, setOpenTab] = useState("guru");

  const handleGuru = () => {
    setOpenTab("guru");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleGuru={handleGuru} openTab={openTab} />
        <ListGuruKelas>
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
          <ListItemsGuruKelas
            nama="Nadiem Makarim"
            mapel="Matematika"
            nip="123456"
            status="Active"
            deskripsi="verified"
          />
        </ListGuruKelas>
      </MainContent>
    </div>
  );
}
