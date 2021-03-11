import Avatar from "../Atom/Avatar";
import Flex from "../Atom/Flex";
import Container from "../Atom/Container";
import Link from "next/link";
import { useState } from "react";

export default function Index() {
  const menuSiswa = ["Profil", "Akun", "Kalender", "Catatan"];
  const menuSekolah = [
    "Kelas",
    "Pelajaran",
    "Laboratorium",
    "Ekstrakulikuler",
    "Perpustakaan",
  ];
  const menuBlog = ["Post Baru", "Daftar Post", "Media"];

  const [active, setActive] = useState("");

  return (
    <div className="w-1/4 border-r border-grey-400 fixed overflow-y-auto top-0 left-0 h-screen z-30 bg-white">
      <Container className="py-24">
        <Flex className="mx-10 flex-row justify-start items-center space-x-4 rounded-xl bg-grey-200 p-4">
          <Avatar className="h-10 w-10 rounded-full bg-red-400">
            <img src="" alt="" />
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-textColor-primary-light text-sm font-semibold">
              Nila Dwi Sanja
            </h4>
            <h5 className="text-textColor-secondary-light text-sm font-semibold">
              siswa
            </h5>
          </div>
        </Flex>
        <div className="h-4" />

        <div className="h-10" />
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div className="mx-10">Siswa</div>
          <Flex className="flex-col">
            {menuSiswa.map((menu) => (
              <Link key={menu} href={`/${menu.toLowerCase()}`}>
                <a
                  onClick={() => setActive(menu.toLowerCase())}
                  className={`hover:bg-grey-200 ${
                    active == menu.toLowerCase() &&
                    "bg-primary-lighter bg-opacity-40 text-primary-main border-r-4 border-primary-main"
                  }`}
                >
                  <div className="space-x-4 py-3 z-10 px-10">
                    <span>O</span>
                    <span>{menu}</span>
                  </div>
                </a>
              </Link>
            ))}
          </Flex>
        </Flex>
        <div className="h-10" />
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div className="mx-10">Sekolah</div>
          <Flex className="flex-col">
            {menuSekolah.map((menu) => (
              <Link key={menu} href={`/sekolah/${menu.toLowerCase()}`}>
                <a
                  onClick={() => setActive(menu.toLowerCase())}
                  className={`hover:bg-grey-200 ${
                    active == menu.toLowerCase() &&
                    "bg-primary-lighter bg-opacity-40 text-primary-main border-r-4 border-primary-main"
                  }`}
                >
                  <div className="space-x-4 py-3 z-10 px-10">
                    <span>O</span>
                    <span>{menu}</span>
                  </div>
                </a>
              </Link>
            ))}
          </Flex>
        </Flex>
        <div className="h-10" />
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div className="mx-10">Blog</div>
          <Flex className="flex-col">
            {menuBlog.map((menu) => (
              <Link key={menu} href={`/blog/${menu.toLowerCase()}`}>
                <a
                  onClick={() => setActive(menu.toLowerCase())}
                  className={`hover:bg-grey-200 ${
                    active == menu.toLowerCase() &&
                    "bg-primary-lighter bg-opacity-40 text-primary-main border-r-4 border-primary-main"
                  }`}
                >
                  <div className="space-x-4 py-3 z-10 px-10">
                    <span>O</span>
                    <span>{menu}</span>
                  </div>
                </a>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
