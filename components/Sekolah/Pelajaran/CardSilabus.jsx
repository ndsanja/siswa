import { useState } from "react";
import Card from "../../Atom/Card";
import Flex from "../../Atom/Flex";
import Container from "../../Atom/Container";

export default function CardSilabus() {
  const [open, setOpen] = useState(true);
  const [expandOpen, setExpandOpen] = useState(false);

  const toogleOpen = () => {
    setOpen(!open);
  };
  const toogleExpandOpen = () => {
    setExpandOpen(!expandOpen);
  };
  return (
    <Card className="rounded-xl shadow-z12-light-shadow overflow-hidden text-textColor-primary-light font-semibold text-sm leading-relaxed tracking-wide">
      <Flex className={`${open ? `pb-4` : `pb-0`} flex-col relative`}>
        <Flex className="bg bg-grey-300 items-center justify-between p-4">
          <h1 className="">WEEK 1</h1>
          <span onClick={toogleOpen} className="cursor-pointer">
            icon
          </span>
        </Flex>
        <Flex
          className={`${open ? `flex` : `hidden`} flex-col space-y-8 px-6 py-8`}
        >
          <Flex className="flex-col space-y-3">
            <h1 className="text-2xl font-medium">Introduction</h1>
            <p className="font-medium">
              Welcome to Machine Learning! In this module, we introduce the core
              idea of teaching a computer to learn concepts using data—without
              being explicitly programmed. The Course Wiki is under
              construction. Please visit the resources tab for the most complete
              and up-to-date information.
            </p>
            <div className="space-x-3">
              <span>5 videos, 9 readings</span>
              <span
                onClick={toogleExpandOpen}
                className={`${
                  expandOpen ? `hidden` : `inline-block`
                } text-primary-main cursor-pointer hover:underline`}
              >
                Expand
              </span>
            </div>
            <div
              className={`${
                expandOpen ? `block` : `hidden`
              } pl-4 text-base py-4`}
            >
              <Container className="space-x-2 px-6 hover:underline cursor-pointer">
                <span className="font-semibold text-sm">Video:</span>
                <span className="font-normal text-sm">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
              <Container className="space-x-2 px-6 hover:underline cursor-pointer">
                <span className="font-semibold text-sm">Video:</span>
                <span className="font-normal text-sm">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
              <Container className="space-x-2 px-6 hover:underline cursor-pointer">
                <span className="font-semibold text-sm">Video:</span>
                <span className="font-normal text-sm">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
              <Container className="space-x-2 px-6 hover:underline cursor-pointer">
                <span className="font-semibold text-sm">Video:</span>
                <span className="font-normal text-sm">Judul Video</span>
                <span className="font-normal text-xs">6 Menit</span>
              </Container>
              <div
                onClick={toogleExpandOpen}
                className={`${
                  expandOpen ? "block" : "hidden"
                } text-sm font-semibold text-primary-main pt-2 hover:underline cursor-pointer`}
              >
                Show less
              </div>
            </div>
            <div>Graded: Introduction</div>
          </Flex>
        </Flex>
        <div
          onClick={toogleOpen}
          className={`${
            open ? "block" : "hidden"
          } text-sm font-semibold text-primary-main pt-2 absolute right-4 bottom-4 cursor-pointer hover:underline`}
        >
          Show less
        </div>
      </Flex>
    </Card>
  );
}
