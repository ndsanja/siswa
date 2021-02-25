import Card from "../../Card";
import Container from "../../Container";
import Flex from "../../Flex";
import IconButton from "../../IconButton";
import Link from "next/link";

export default function CardKelas() {
  return (
    <Card className="col-span-4 bg-white shadow-z12-light-shadow rounded-xl overflow-hidden">
      <Link href="/sekolah/kelas/1">
        <a>
          <div className="w-full h-36 bg-info-main">
            <img src="" alt="" />
          </div>
          <Container className="px-4">
            <Flex className="flex-col py-4 space-y-2 items-center justify-center font-semibold text-textColor-primary-light text-sm">
              <h1 className="text-center">Nama Kelas</h1>
              <p className="text-center text-textColor-secondary-light">
                Deskripsi Kelas
              </p>
            </Flex>
            <Flex className="flex-row items-center justify-center space-x-2 mb-8">
              <IconButton>icon 1</IconButton>
              <IconButton>icon 1</IconButton>
              <IconButton>icon 1</IconButton>
              <IconButton>icon 1</IconButton>
            </Flex>
          </Container>
          <Container className="border-t">
            <Flex className="flex-row items-center justify-between p-4">
              <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-light">
                <div className="text-center text-textColor-secondary-light">
                  Siswa
                </div>
                <div className="text-center">40</div>
              </Flex>
              <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-light">
                <div className="text-center text-textColor-secondary-light">
                  Guru
                </div>
                <div className="text-center">12</div>
              </Flex>
              <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-light">
                <div className="text-center text-textColor-secondary-light">
                  Pelajaran
                </div>
                <div className="text-center">12</div>
              </Flex>
            </Flex>
          </Container>
        </a>
      </Link>
    </Card>
  );
}
