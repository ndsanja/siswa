import Card from "../../Atom/Card";
import TabPanel from "../../Atom/TabPanel";
import Flex from "../../Atom/Flex";
import ListLatihan from "./ListLatihan";
import ListItemsLatihan from "./ListItemsLatihan";
import LatihanTab from "./LatihanTab";
import { useState } from "react";

export default function Silabus(props) {
  const namaTugas = [
    "Integral Pengantar",
    "Menulis Surat Tugas",
    "Kimia Pengantar",
    "Akuntansi Keuangan",
    "Praktek Machine Learning",
  ];
  const menu = ["Daftar Latihan", "Latihan Terkumpul"];

  const [openTabMenu, setOpenTabMenu] = useState("Daftar Latihan");

  return (
    <TabPanel
      className={`${props.openTab == "latihan" ? `flex` : `hidden`} flex-col`}
    >
      <Card className="rounded-xl shadow-info-light-shadow text-info-main border border-info-main p-8 mb-8">
        <Flex className="flex-row items-center space-x-4">
          <div className="w-24 h-32 bg-info-main"></div>
          <h1 className="font-semibold">
            There are 12 assignments coming up. Be sure to submit them before
            the deadline.
          </h1>
        </Flex>
      </Card>

      <LatihanTab
        openTabMenu={openTabMenu}
        setOpenTabMenu={setOpenTabMenu}
        menu={menu}
      />

      {openTabMenu == "Daftar Latihan" ? (
        <ListLatihan>
          {namaTugas.map((nama) => (
            <ListItemsLatihan
              key={nama}
              nama={nama}
              deskripsi="Kuis"
              status="Terkumpul"
              deadline="17 Feb"
              jam="20.00 WIB"
              bobot="2%"
              nilai="73 / B-"
            />
          ))}
        </ListLatihan>
      ) : (
        <ListLatihan>
          {namaTugas.map((nama) => (
            <ListItemsLatihan
              key={nama}
              nama={nama}
              deskripsi="Kuis"
              status="Mengulang"
              deadline="17 Feb"
              jam="20.00 WIB"
              bobot="2%"
              nilai="73 / B-"
            />
          ))}
        </ListLatihan>
      )}
    </TabPanel>
  );
}
