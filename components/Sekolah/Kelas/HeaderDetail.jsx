import Breadcrumbs from "../../Atom/Breadcrumbs";
import Flex from "../../Atom/Flex";
import Link from "next/link";
import Tab from "../../Atom/Tab";
import Tabs from "../../Atom/Tabs";

export default function DetailHeader(props) {
  const menu = [
    "Dashboard",
    "Jadwal",
    "Tugas",
    "Pelajaran",
    "Siswa",
    "Guru",
    "Kelompok",
    "Info",
  ];

  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Kelas
        </h1>
        <Flex className="flex-row text-textColor-primary-light text-sm space-x-4 font-semibold">
          <Link href="/12345">
            <a>
              <Breadcrumbs>Nila Dwi Sanja</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="/sekolah/kelas">
            <a>
              <Breadcrumbs>Sekolah</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="/sekolah/kelas">
            <a>
              <Breadcrumbs>Kelas</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Breadcrumbs className="text-textColor-secondary-light">
            XII-IPS 3
          </Breadcrumbs>
        </Flex>
      </Flex>
      <div className="h-8"></div>

      <Tabs className="flex-row items-center justify-start space-x-12 bottom-0 right-0 z-10 leading-10 font-semibold text-textColor-secondary-light overflow-x-auto">
        {menu.map((item) => (
          <Link
            key={item}
            href={
              item == "Dashboard"
                ? "/sekolah/kelas/1"
                : `/sekolah/kelas/1/${item.toLowerCase()}`
            }
          >
            <a>
              <Tab
                onClick={props.handleDashboard}
                className={`${
                  props.openTab == item.toLowerCase() &&
                  "border-b-2 border-primary-main text-textColor-primary-light"
                }`}
              >
                {item}
              </Tab>
            </a>
          </Link>
        ))}
      </Tabs>
      <div className="h-8" />
    </>
  );
}
