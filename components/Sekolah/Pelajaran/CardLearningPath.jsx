import Card from "../../Card";
import Container from "../../Container";
import Avatar from "../../Avatar";
import Flex from "../../Flex";
import Link from "next/link";
import IconButton from "../../IconButton";

export default function CardLearningPath() {
  return (
    <Card className="col-span-4 bg-white shadow-z12-light-shadow rounded-xl overflow-hidden">
      <Link href="pelajaran/learning-path/1">
        <a>
          <div className="w-full h-28 relative">
            <div className="bg-primary-main transform -skew-y-12 absolute w-full -top-8 -bottom-8">
              <img src="" alt="" />
            </div>
            <Avatar className="h-20 w-20 rounded-lg ring ring-white bg-warning-main absolute left-6 -bottom-16">
              <img src="" alt="" />
            </Avatar>
          </div>
          <Container className="bg-info-dark">
            <Container className="px-4 h-60">
              <Flex className="flex-col py-24 space-y-8 font-semibold text-textColor-primary-dark text-sm">
                <h1 className="text-textColor-primary-dark text-xl">
                  UTBK Ilmu Pengetahuan Sosial
                </h1>
                <Flex className="font-medium tracking-wider flex-wrap justify-center space-x-2">
                  <span className="">Ekonomi</span>
                  <span className="">Sosiologi</span>
                  <span className="">Sejarah</span>
                  <span className="">Geografi</span>
                </Flex>
              </Flex>
            </Container>
            <Container className="border-t">
              <Flex className="flex-row items-center justify-between p-4">
                <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-dark">
                  <div className="text-center font-normal">Durasi</div>
                  <div className="text-center">20 kali</div>
                </Flex>
                <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-dark">
                  <div className="text-center font-normal">Capaian</div>
                  <div className="text-center">30%</div>
                </Flex>
                <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-dark">
                  <div className="text-center font-normal">Kelas</div>
                  <div className="text-center">Online</div>
                </Flex>
              </Flex>
            </Container>
          </Container>
        </a>
      </Link>
    </Card>
  );
}
