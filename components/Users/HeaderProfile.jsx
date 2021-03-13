import Breadcrumbs from "../Atom/Breadcrumbs";
import Card from "../Atom/Card";
import Flex from "../Atom/Flex";
import Grid from "../Atom/Grid";
import Avatar from "../Atom/Avatar";
import Tab from "../Atom/Tab";
import Tabs from "../Atom/Tabs";
import Link from "next/link";

export default function HeaderProfile(props) {
  const menu = [
    { item: "Profile", link: "profile" },
    { item: "Akademik", link: "akademik" },
    { item: "Kesiswaan", link: "kesiswaan" },
    { item: "E-Raport", link: "eraport" },
    { item: "Administrasi", link: "administrasi" },
  ];

  const linkIndex = "/profile";

  return (
    <>
      <Flex className="flex-col space-y-4">
        <h1 className="font-semibold text-2xl text-textColor-primary-light">
          Profil
        </h1>
        <Flex className="flex-row text-textColor-primary-light text-sm space-x-4 font-semibold">
          <Link href="/1234">
            <a>
              <Breadcrumbs>Siswa</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>
          <Link href="/1234">
            <a>
              <Breadcrumbs>Profile</Breadcrumbs>
            </a>
          </Link>
          <div>.</div>

          <Breadcrumbs className="text-textColor-secondary-light">
            Nila Dwi Sanja
          </Breadcrumbs>
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
            {menu.map((i) => (
              <Link
                key={i.item}
                href={i.link == "profile" ? "/profile" : `/profile/${i.link}`}
              >
                <a>
                  <Tab
                    onClick={props.toogleOpen}
                    className={`${
                      props.open == i.link &&
                      "border-b-2 border-primary-main text-textColor-primary-light"
                    }`}
                  >
                    {i.item}
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
