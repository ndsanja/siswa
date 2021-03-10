import { useState } from "react";
import Button from "../Atom/Button";
import Container from "../Atom/Container";
import Flex from "../Atom/Flex";
import IconButton from "../Atom/IconButton";

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          open
            ? "top-0 transform transition-all duration-500 ease-in-out"
            : "-top-full transform transition-all duration-500 ease-in-out"
        } fixed z-50 right-0 h-24 bg-white bg-opacity-50 shadow-z24-light-shadow w-9/12`}
      >
        <Container className="px-10 h-full">
          <Flex className="flex items-center justify-between h-full">
            <input type="text" name="" id="" placeholder="Search" />
            <Flex className="flex-row items-center space-x-4 justify-end">
              <Button onClick={() => setOpen(false)}>menu1</Button>
            </Flex>
          </Flex>
        </Container>
      </div>

      <div className="fixed z-40 top-0 right-0 h-24 bg-white bg-opacity-50 w-9/12">
        <Container className="px-10 h-full">
          <Flex className="flex-row items-center justify-between h-full">
            <IconButton onClick={() => setOpen(true)}>icon</IconButton>
            <Flex className="flex-row items-center space-x-4 justify-end">
              <div>menu1</div>
              <div>menu2</div>
              <div>menu3</div>
              <div>menu4</div>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
}
