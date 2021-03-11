import HeaderDetail from "../../../../components/Sekolah/Kelas/HeaderDetail";
import MainContent from "../../../../components/MainContent";
import { useState } from "react";
import ListGuruKelas from "../../../../components/Sekolah/Kelas/ListGuruKelas";
import ListItemsGuruKelas from "../../../../components/Sekolah/Kelas/ListItemsGuruKelas";

export default function Guru() {
  const namaGuru = [
    "Joko Widodo",
    "Prabowo Subianto",
    "Jusuf Kalla",
    "Luhut Binsar Pandjaitan",
    "Susilo Bambang Yudhoyono",
    "Sandiaga Uno",
    "Anies Baswedan",
    "Mardigu Wowiek",
    "Gita Wirjawan",
    "Nadiem Makariem",
    "Emha Ainun Nadjib",
    "Din Syamsudin",
    "Sudjiwo Tedjo",
    "Butet Kertaradjasa",
    "Rocky Gerung",
  ];
  const [openTab, setOpenTab] = useState("guru");

  const handleOpen = () => {
    setOpenTab("guru");
  };

  return (
    <div className="bg-white">
      <MainContent>
        <HeaderDetail handleOpen={handleOpen} openTab={openTab} />
        <ListGuruKelas>
          {namaGuru.map((nama) => (
            <ListItemsGuruKelas
              key={nama}
              nama={nama}
              mapel="Matematika"
              nip="123456"
              status="Active"
              deskripsi="verified"
            />
          ))}
        </ListGuruKelas>
      </MainContent>
    </div>
  );
}
