import Breadcrumbs from "../../Atom/Breadcrumbs";
import Flex from "../../Atom/Flex";
import Tab from "../../Atom/Tab";
import Tabs from "../../Atom/Tabs";
import Button from "../../Atom/Button";
import Link from "next/link";

export default function HeaderPejaran(props) {
  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Pelajaran
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

          {props.openTab == "pelajaran" ? (
            <Link href="#">
              <a>
                <Breadcrumbs className="text-textColor-secondary-light">
                  Pelajaran
                </Breadcrumbs>
              </a>
            </Link>
          ) : (
            <Link href="#">
              <a>
                <Breadcrumbs className="text-textColor-secondary-light">
                  Learning-Path
                </Breadcrumbs>
              </a>
            </Link>
          )}
        </Flex>
      </Flex>
      <div className="h-8"></div>
      <Flex className="flex-row justify-between">
        <Tabs className="flex-row items-center justify-start space-x-12 bottom-0 right-0 z-10 leading-10 font-semibold text-textColor-secondary-light overflow-x-auto">
          <Link href="/sekolah/pelajaran">
            <a>
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
            </a>
          </Link>
          <Link href="/sekolah/learning-path">
            <a>
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
            </a>
          </Link>
          <Tab>
            <a href="https://sekolah-gamma.vercel.app/kursus">E-Learning</a>
          </Tab>
        </Tabs>
        <Flex
          className={`${
            props.openTab == "learning-path" ? "flex" : "hidden"
          } flex-row space-x-4`}
        >
          <Button className="rounded-xl text-primary-main border-2 border-primary-main px-3 py-2 font-semibold">
            Buat Path
          </Button>
          <Link href="https://sekolah-gamma.vercel.app/kursus">
            <a>
              <Button className="rounded-xl text-info-main border-2 border-info-main px-3 py-2 font-semibold">
                Explore Path
              </Button>
            </a>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
