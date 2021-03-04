import Breadcrumbs from "../../Breadcrumbs";
import Card from "../../Card";
import Flex from "../../Flex";
import Link from "next/link";
import Grid from "../../Grid";
import Avatar from "../../Avatar";
import Tab from "../../Tab";
import Tabs from "../../Tabs";

export default function HeaderDetailLearningPath(props) {
  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          UTBK Ilmu Pengetahuan Sosial
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
              <Breadcrumbs>learning-Path</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Breadcrumbs className="text-textColor-secondary-light">
            UTBK Ilmu Pengetahuan Sosial
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
                    UTBK Ilmu Pengetahuan Sosial
                  </h1>
                  <h4 className="font-semibold text-textColor-secondary-dark">
                    ilmu sosial
                  </h4>
                </Flex>
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
          {/* <Tabs className="flex-row items-center justify-end space-x-12 absolute bottom-0 right-0 z-10 px-6 leading-10 font-semibold text-textColor-secondary-light">
            <Tab
              onClick={props.openTimeline}
              className={`${
                props.openTab == "pelajaran"
                  ? `border-b-2 border-primary-main text-textColor-primary-light`
                  : ``
              }`}
            >
              Pelajaran
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
              onClick={props.openLatihan}
              className={`${
                props.openTab == "latihan"
                  ? `border-b-2 border-primary-main text-textColor-primary-light`
                  : ``
              }`}
            >
              Latihan
            </Tab>
            <Tab>Deskripsi</Tab>
          </Tabs> */}
          <div className="bg-white absolute bottom-0 w-full h-12"></div>
        </Card>
      </Grid>
    </>
  );
}
