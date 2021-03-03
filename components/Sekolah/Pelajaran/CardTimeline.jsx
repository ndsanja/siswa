import { useState } from "react";
import Card from "../../Card";
import Container from "../../Container";
import Flex from "../../Flex";
import Grid from "../../Grid";

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
            <Flex className="flex-row py-4 divide-x divide-textColor-secondary-light">
              <Flex className="w-5/12 flex-col items-end px-6 mt-6">
                <div className="space-x-4 hover:bg-grey-300 p-4 cursor-pointer w-full text-right">
                  <span className="font-normal">Videos</span>
                  <span>#</span>
                  <span>waktu 42 menit</span>
                </div>
                <div className="space-x-4 hover:bg-grey-300 p-4 cursor-pointer w-full text-right">
                  <span className="font-normal">Reading</span>
                  <span>#</span>
                  <span>waktu 42 menit</span>
                </div>
                <div className="space-x-4 hover:bg-grey-300 p-4 cursor-pointer w-full text-right">
                  <span className="font-normal">Kelas</span>
                  <span>#</span>
                  <span>waktu 42 menit</span>
                </div>
              </Flex>
              <Flex className="flex-col w-7/12 px-6 space-y-4">
                <Flex className="flex-row justify-between">
                  <Flex className="flex-col flex-1">
                    <div>Judul</div>
                  </Flex>
                  <Flex className="flex-row justify-start">
                    <div>Deadline</div>
                  </Flex>
                </Flex>
                <Flex className="flex-row justify-between hover:bg-grey-300 cursor-pointer p-1">
                  <Flex className="flex-col flex-1 space-y-2">
                    <div className="text-base">Kuis</div>
                    <div className="font-normal">
                      Lorem ipsum, dolor sit amet consectetur adipisicin
                    </div>
                    <div className="text-base">30 menit</div>
                  </Flex>
                  <Flex className="flex-col space-y-1 font-medium">
                    <div>7 Feb</div>
                    <div>20.00 WIB</div>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
