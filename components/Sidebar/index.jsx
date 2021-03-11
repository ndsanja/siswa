import Avatar from "../Atom/Avatar";
import Flex from "../Atom/Flex";
import Container from "../Atom/Container";
import Link from "next/link";

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
  return (
    <div className="w-1/4 border-r border-grey-400 fixed overflow-y-auto top-0 left-0 h-screen z-30 bg-white">
      <Container className="px-10 py-24">
        <Flex className="flex-row justify-start items-center space-x-4 rounded-xl bg-grey-200 p-4">
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
          <div>Siswa</div>
          <Flex className="flex-col">
            <ul className="list-disc list-inside space-y-3">
              {menuSiswa.map((menu) => (
                <Link key={menu} href={`/${menu.toLowerCase()}`}>
                  <a>
                    <li>{menu}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </Flex>
        </Flex>
        <div className="h-10" />
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Sekolah</div>
          <Flex className="flex-col">
            <ul className="list-disc list-inside space-y-3">
              {menuSekolah.map((menu) => (
                <Link key={menu} href={`/sekolah/${menu.toLowerCase()}`}>
                  <a>
                    <li>{menu}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </Flex>
        </Flex>
        <div className="h-10" />
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Blog</div>
          <Flex className="flex-col">
            <ul className="list-disc list-inside space-y-3">
              {menuBlog.map((menu) => (
                <Link key={menu} href={`/blog/${menu.toLowerCase()}`}>
                  <a>
                    <li>{menu}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
