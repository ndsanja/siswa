import { useState } from "react";

export default function Navbar() {
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
        <div className="container px-10 flex items-center justify-between h-full">
          <div>icon</div>
          <div className="flex items-center space-x-4 justify-end">
            <div onClick={() => setOpen(false)} className="cursor-pointer">
              menu1
            </div>
          </div>
        </div>
      </div>
      <div className="fixed z-40 top-0 right-0 h-24 bg-white bg-opacity-50 w-9/12">
        <div className="container px-10 flex items-center justify-between h-full">
          <div onClick={() => setOpen(true)} className="cursor-pointer">
            icon
          </div>
          <div className="flex items-center space-x-4 justify-end">
            <div>menu1</div>
            <div>menu2</div>
            <div>menu3</div>
            <div>menu4</div>
          </div>
        </div>
      </div>
    </>
  );
}
