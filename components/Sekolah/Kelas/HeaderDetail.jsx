import Breadcrumbs from "../../Breadcrumbs";
import Flex from "../../Flex";
import Link from "next/link";
import Tab from "../../Tab";
import Tabs from "../../Tabs";

export default function DetailHeader(props) {
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
        <Link href="/sekolah/kelas/1">
          <a>
            <Tab
              onClick={props.handleDashboard}
              className={`${
                props.openTab == "dashboard" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Dashboard
            </Tab>
          </a>
        </Link>
        <Link href="/sekolah/kelas/1/jadwal">
          <a>
            <Tab
              onClick={props.handleJadwal}
              className={`${
                props.openTab == "jadwal" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Jadwal
            </Tab>
          </a>
        </Link>
        <Link href="/sekolah/kelas/1/tugas">
          <a>
            <Tab
              onClick={props.handleTugas}
              className={`${
                props.openTab == "tugas" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Tugas
            </Tab>
          </a>
        </Link>
        <Link href="/sekolah/kelas/1/pelajaran">
          <a>
            <Tab
              onClick={props.handlePelajaran}
              className={`${
                props.openTab == "pelajaran" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Pelajaran
            </Tab>
          </a>
        </Link>
        <Link href="/sekolah/kelas/1/siswa">
          <a>
            <Tab
              onClick={props.handleSiswa}
              className={`${
                props.openTab == "siswa" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Siswa
            </Tab>
          </a>
        </Link>
        <Link href="/sekolah/kelas/1/guru">
          <a>
            <Tab
              onClick={props.handleGuru}
              className={`${
                props.openTab == "guru" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Guru
            </Tab>
          </a>
        </Link>
        <Link href="/sekolah/kelas/1/kelompok">
          <a>
            <Tab
              onClick={props.handleKelompok}
              className={`${
                props.openTab == "kelompok" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Kelompok
            </Tab>
          </a>
        </Link>
        <Link href="/sekolah/kelas/1/info">
          <a>
            <Tab
              onClick={props.handleInfo}
              className={`${
                props.openTab == "info" &&
                "border-b-2 border-primary-main text-textColor-primary-light"
              }`}
            >
              Info
            </Tab>
          </a>
        </Link>
      </Tabs>
      <div className="h-8" />
    </>
  );
}
