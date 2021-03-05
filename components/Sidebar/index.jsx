import Avatar from "../Avatar";
import Flex from "../Flex";
import Container from "../Container";
import Link from "next/link";

export default function Index() {
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
        {/* <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Dashboard</div>
          <Flex className="flex-col">
            <ul className="list-disc list-inside space-y-3">
              <Link href="/">
                <a>
                  <li>Dashboard</li>
                </a>
              </Link>
              <li>Analisa</li>
            </ul>
          </Flex>
        </Flex> */}
        <div className="h-10"></div>
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Siswa</div>
          <Flex className="flex-col">
            <ul className="list-disc list-inside space-y-3">
              <Link href="/profile">
                <a>
                  <li>Profil</li>
                </a>
              </Link>
              <li>Akun</li>
              <li>Kalender</li>
              <li>Catatan</li>
            </ul>
          </Flex>
        </Flex>
        <div className="h-10"></div>
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Sekolah</div>
          <Flex className="flex-col">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <Link href="/sekolah/kelas">
                  <a>Kelas</a>
                </Link>
              </li>
              <li>
                <Link href="/sekolah/pelajaran">
                  <a>Pelajaran</a>
                </Link>
              </li>
              <li>Laboratorium</li>
              <li>Ekstrakurikuler</li>
              <li>Perpustakaan</li>
            </ul>
          </Flex>
        </Flex>
        <div className="h-10"></div>
        <Flex className="flex-col space-y-4 text-textColor-secondary-light font-semibold">
          <div>Blog</div>
          <Flex className="flex-col">
            <ul className="list-disc list-inside space-y-3">
              <li>Membuat Post</li>
              <li>Daftar Post</li>
              <li>Media</li>
            </ul>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
