import Breadcrumbs from "../Breadcrumbs";
import Card from "../Card";
import Flex from "../Flex";
import Link from "next/link";
import Grid from "../Grid";
import Avatar from "../Avatar";
import Tab from "../Tab";
import Tabs from "../Tabs";

export default function HeaderProfile() {
  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Profile
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
              <Breadcrumbs>Siswa</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="#">
            <a>
              <Breadcrumbs>Profil</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="#">
            <a>
              <Breadcrumbs className="text-textColor-secondary-light">
                Nila Dwi Sanja
              </Breadcrumbs>
            </a>
          </Link>
        </Flex>
      </Flex>
      <div className="h-8"></div>
      <Grid className="grid-cols-12">
        <Card className="col-span-full rounded-xl bg-info-dark h-64 overflow-hidden relative shadow-z12-light-shadow">
          <div className="z-10 absolute bottom-6 left-6 flex items-center space-x-6">
            <Avatar className="h-28 w-28 rounded-full bg-error-main ring-white ring-2 ">
              <img src="" alt="" />
            </Avatar>
            <Flex className="flex-col space-y-1">
              <h1 className="font-semibold text-xl text-textColor-primary-dark">
                Nila Dwi Sanja
              </h1>
              <h4 className="font-semibold text-textColor-secondary-dark">
                Siswa - XI-IPS 3
              </h4>
            </Flex>
          </div>
          <Tabs className="flex-row items-center justify-end space-x-12 absolute bottom-0 right-0 z-10 px-6 leading-10 font-semibold text-textColor-secondary-light">
            <Tab className="border-b-2 border-primary-main text-textColor-primary-light">
              Profile
            </Tab>
            <Tab>Info</Tab>
            <Tab>Kesiswaan</Tab>
            <Tab>Administrasi</Tab>
          </Tabs>
          <div className="bg-white absolute bottom-0 w-full h-12"></div>
        </Card>
      </Grid>
    </>
  );
}
