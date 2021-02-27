import { useState } from "react";
import Card from "../../Card";
import Flex from "../../Flex";

export default function CardSilabus() {
  const [open, setOpen] = useState(true);
  const toogleOpen = () => {
    setOpen(!open);
  };
  return (
    <Card className="rounded-xl shadow-z12-light-shadow overflow-hidden text-textColor-primary-light font-semibold text-sm leading-relaxed tracking-wide">
      <Flex className={`${open ? `pb-4` : `pb-0`} flex-col`}>
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
              <span className="text-primary-main cursor-pointer">Expand</span>
            </div>
            <div>Graded: Introduction</div>
          </Flex>
          <Flex className="flex-col space-y-4">
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
              <span className="text-primary-main cursor-pointer">Expand</span>
            </div>
            <div>Graded: Introduction</div>
          </Flex>
          <Flex className="flex-col space-y-4">
            <h1 className="text-2xl font-medium">Introduction</h1>
            <p className="font-medium">
              Welcome to Machine Learning! In this module, we introduce the core
              idea of teaching a computer to learn concepts using data—without
              being explicitly programmed. The Course Wiki is under
              construction. Please visit the resources tab for the most complete
              and up-to-date information.
            </p>
            <div className="space-x-4">
              <span>5 videos, 9 readings</span>
              <span className="text-primary-main cursor-pointer">Expand</span>
            </div>
            <div>Graded: Introduction</div>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
