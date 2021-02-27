import Breadcrumbs from "../../Breadcrumbs";
import Card from "../../Card";
import Flex from "../../Flex";
import Link from "next/link";
import Grid from "../../Grid";
import Avatar from "../../Avatar";
import Tab from "../../Tab";
import Tabs from "../../Tabs";

export default function HeaderDetail(props) {
  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Sosiologi
        </h1>
        <Flex className="flex-row text-textColor-primary-light text-sm space-x-4 font-semibold">
          <Link href="/">
            <a>
              <Breadcrumbs>Dashboard</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Breadcrumbs>Sekolah</Breadcrumbs>
          <div>.</div>
          <Link href="/sekolah/pelajaran">
            <a>
              <Breadcrumbs>Pelajaran</Breadcrumbs>
            </a>
          </Link>
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
            <Tab
              onClick={props.openSilabus}
              className={`${
                props.openTab == "silabus"
                  ? `border-b-2 border-primary-main text-textColor-primary-light`
                  : ``
              }`}
            >
              Silabus
            </Tab>
            <Tab
              onClick={props.openTimeline}
              className={`${
                props.openTab == "timeline"
                  ? `border-b-2 border-primary-main text-textColor-primary-light`
                  : ``
              }`}
            >
              Timeline
            </Tab>
            <Tab>Latihan</Tab>
            <Tab>Deskripsi</Tab>
          </Tabs>
          <div className="bg-white absolute bottom-0 w-full h-12"></div>
        </Card>
      </Grid>
    </>
  );
}
