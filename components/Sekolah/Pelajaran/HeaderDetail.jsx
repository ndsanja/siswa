import Breadcrumbs from "../../Atom/Breadcrumbs";
import Card from "../../Atom/Card";
import Flex from "../../Atom/Flex";
import Grid from "../../Atom/Grid";
import Avatar from "../../Atom//Avatar";
import Tab from "../../Atom/Tab";
import Tabs from "../../Atom//Tabs";
import Link from "next/link";

export default function HeaderDetail(props) {
  const menu = ["Diskusi", "Timeline", "Silabus", "Latihan", "Deskripsi"];

  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Sosiologi
        </h1>
        <Flex className="flex-row text-textColor-primary-light text-sm space-x-4 font-semibold">
          <Link href="/12345">
            <a>
              <Breadcrumbs>Nila Dwi Sanja</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="/sekolah/kelas/1/pelajaran">
            <a>
              <Breadcrumbs>XII-IPS 3</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="/sekolah/pelajaran">
            <a>
              <Breadcrumbs>Pelajaran</Breadcrumbs>
            </a>
          </Link>
          {/* <div>.</div>
          <Link href="/sekolah/learning-path/1">
            <a>
              <Breadcrumbs>Learning-Path</Breadcrumbs>
            </a>
          </Link> */}
          <div>.</div>
          <Breadcrumbs className="text-textColor-secondary-light">
            Sosiologi
          </Breadcrumbs>
        </Flex>
      </Flex>
      <div className="h-8"></div>
      <Grid className="grid-cols-12">
        <Card className="col-span-full rounded-xl bg-info-dark h-64 overflow-hidden relative shadow-z12-light-shadow">
          <Flex className="z-10 absolute bottom-6 left-6 items-start space-x-6">
            <Avatar className="h-48 w-72 rounded bg-error-main ring-white ring-2">
              <img src="" alt="" />
            </Avatar>
            <Flex className="flex-col space-y-1 w-3/4">
              <Flex className="justify-between pr-6">
                <Flex className="flex-col">
                  <h1 className="font-semibold text-xl text-textColor-primary-dark">
                    Sosiologi
                  </h1>
                  <h4 className="font-semibold text-textColor-secondary-dark">
                    Kelas XII - ilmu sosial
                  </h4>
                </Flex>
                <a
                  className="bg-primary-main px-8 font-semibold text-textColor-primary-dark rounded-lg flex items-center justify-center"
                  href="https://sekolah-gamma.vercel.app/dashboard"
                >
                  Mulai Belajar
                </a>
              </Flex>
              <p className="text-textColor-primary-dark pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                voluptas qui ratione dolor ullam, aliquam cupiditate fugit
                aspernatur atque soluta?
              </p>
              <p className="text-textColor-primary-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              </p>
            </Flex>
          </Flex>
          <Tabs className="flex-row items-center justify-end space-x-12 absolute bottom-0 right-0 z-10 px-6 leading-10 font-semibold text-textColor-secondary-light">
            {menu.map((item) => (
              <Link
                key={item}
                href={
                  item == "Timeline"
                    ? "/sekolah/pelajaran/1"
                    : `/sekolah/pelajaran/1/${item.toLowerCase()}`
                }
              >
                <a>
                  <Tab
                    onClick={props.toogleOpenTab}
                    className={`${
                      props.openTab == item.toLowerCase()
                        ? `border-b-2 border-primary-main text-textColor-primary-light`
                        : ``
                    }`}
                  >
                    {item}
                  </Tab>
                </a>
              </Link>
            ))}
          </Tabs>
          <div className="bg-white absolute bottom-0 w-full h-12"></div>
        </Card>
      </Grid>
    </>
  );
}
