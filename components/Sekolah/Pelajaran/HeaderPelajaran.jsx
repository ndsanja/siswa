import Breadcrumbs from "../../Breadcrumbs";
import Flex from "../../Flex";
import Link from "next/link";
import Tab from "../../Tab";
import Tabs from "../../Tabs";

export default function HeaderPejaran(props) {
  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Pelajaran
        </h1>
        <Flex className="flex-row text-textColor-primary-light text-sm space-x-4 font-semibold">
          <Link href="/">
            <a>
              <Breadcrumbs>Dashboard</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="#">
            <a>
              <Breadcrumbs>Sekolah</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="#">
            <a>
              <Breadcrumbs className="text-textColor-secondary-light">
                Pelajaran
              </Breadcrumbs>
            </a>
          </Link>
        </Flex>
      </Flex>
      <div className="h-8"></div>

      <Tabs className="flex-row items-center justify-start space-x-12 bottom-0 right-0 z-10 leading-10 font-semibold text-textColor-secondary-light overflow-x-auto">
        <Tab
          onClick={props.openPelajaran}
          className={`${
            props.openTab == "pelajaran"
              ? "border-b-2 border-primary-main text-textColor-primary-light"
              : ""
          }`}
        >
          Daftar Pelajaran
        </Tab>
        <Tab
          onClick={props.openLearningPath}
          className={`${
            props.openTab == "learning-path"
              ? "border-b-2 border-primary-main text-textColor-primary-light"
              : ""
          }`}
        >
          Learning Path
        </Tab>
        <Tab>
          <a href="https://sekolah-gamma.vercel.app/kursus">E-Learning</a>
        </Tab>
      </Tabs>
    </>
  );
}
