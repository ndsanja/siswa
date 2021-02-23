import Card from "../../Card";
import Container from "../../Container";
import Flex from "../../Flex";
import IconButton from "../../IconButton";

export default function CardPelajaran() {
  return (
    <Card className="col-span-4 bg-white shadow-z12-light-shadow rounded-xl overflow-hidden">
      <div className="w-full h-36 bg-info-main">
        <img src="" alt="" />
      </div>
      <Container className="px-4">
        <Flex className="flex-col py-4 space-y-2 font-semibold text-textColor-primary-light text-sm">
          <h4 className="text-textColor-secondary-light">Ilmu Sosial</h4>
          <h1 className="text-textColor-primary-light text-xl">Sosiologi</h1>
          <p className="text-textColor-secondary-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod est
            reprehenderit esse soluta explicabo facere sapiente. Molestiae
            quibusdam ratione distinctio.
          </p>
        </Flex>
      </Container>
      <Container className="border-t">
        <Flex className="flex-row items-center justify-between p-4">
          <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-light">
            <div className="text-center text-textColor-secondary-light">
              Durasi
            </div>
            <div className="text-center">20 kali</div>
          </Flex>
          <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-light">
            <div className="text-center text-textColor-secondary-light">
              Capaian
            </div>
            <div className="text-center">30%</div>
          </Flex>
          <Flex className="flex-col space-y-1 text-sm font-semibold text-textColor-primary-light">
            <div className="text-center text-textColor-secondary-light">
              Kelas
            </div>
            <div className="text-center">Online</div>
          </Flex>
        </Flex>
      </Container>
    </Card>
  );
}
