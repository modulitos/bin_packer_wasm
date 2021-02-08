import React, { FC, useState } from "react";
import { ChevronRight, ChevronLeft } from "./Icons";

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute z-30 top-0 right-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
        <button
          className="block text-gray text-lg text-lg rounded bg-white-500 btn-teal:hover font-bold mb-0 w-10 mt-auto"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      <section
        className="absolute inset-y-0 right-0 pl-4 max-w-full flex"
        aria-labelledby="slide-over-heading"
      >
        <div
          className={`relative z-20 w-screen max-w-4xl  transform transition ease-in-out duration-500 sm:duration-70 translate-x-${
            isOpen ? "0" : "full"
          }`}
        >
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
            <div className="relative flex-1">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
