import Breadcrumbs from "../../Breadcrumbs";
import Flex from "../../Flex";
import Link from "next/link";
import Tab from "../../Tab";
import Tabs from "../../Tabs";

export default function HeaderKelas() {
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
          <Breadcrumbs className="text-textColor-secondary-light">
            Kelas
          </Breadcrumbs>
        </Flex>
      </Flex>
      <div className="h-8"></div>

      <Tabs className="flex-row items-center justify-start space-x-12 bottom-0 right-0 z-10 leading-10 font-semibold text-textColor-secondary-light overflow-x-auto">
        <Tab className="border-b-2 border-primary-main text-textColor-primary-light">
          Kelas Saya
        </Tab>
        <Tab>Jadwal</Tab>
        <Tab>Kelompok Belajar</Tab>
        <Link href="https://sekolah-gamma.vercel.app/kursus">
          <a>
            <Tab>E-learning</Tab>
          </a>
        </Link>
      </Tabs>
    </>
  );
}
