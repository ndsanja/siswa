import { useState } from "react";
import Card from "../../Card";
import Container from "../../Container";
import Flex from "../../Flex";

export default function CardTimeline() {
  const [open, setOpen] = useState(true);
  const toogleOpen = () => {
    setOpen(!open);
  };
  return (
    <Card className="rounded-xl shadow-z12-light-shadow overflow-hidden text-textColor-primary-light font-semibold text-sm leading-relaxed tracking-wide">
      <Flex className={`${open ? `pb-4` : `pb-0`} flex-col`}>
        <Flex className="bg bg-grey-300 flex-row items-center justify-between p-4">
          <h1 className="flex-1">WEEK 1</h1>
          <h1 className="mr-4">Estimasi Waktu: 6 Jam 30 Menit</h1>
          <span onClick={toogleOpen} className="cursor-pointer">
            icon
          </span>
        </Flex>
        <Flex
          className={`${
            open ? `flex` : `hidden`
          } flex-col space-y-8 pb-8 divide-y divide-grey-300`}
        >
          <Flex className="flex-col pt-8">
            <h1 className="text-2xl font-medium px-6">Introduction</h1>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
          </Flex>
          <Flex className="flex-col pt-8">
            <h1 className="text-2xl font-medium px-6">Introduction</h1>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
          </Flex>
          <Flex className="flex-col pt-8">
            <h1 className="text-2xl font-medium px-6">Introduction</h1>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
            <div className="pl-4 text-base py-4 cursor-pointer hover:bg-grey-300">
              <Container className="space-x-2 z-10 px-6">
                <span>#</span>
                <span className="font-semibold">Video:</span>
                <span className="font-normal">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
