import React, { FC, useState } from "react";

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <section
        className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
        aria-labelledby="slide-over-heading"
      >
        <div
          className={`relative w-screen max-w-4xl  transform transition ease-in-out duration-500 sm:duration-70 translate-x-${
            isOpen ? "0" : "full"
          }`}
        >
          <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
            <button
              className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => {
                console.log("clicked!!! isOpen:", isOpen);
                setIsOpen(!isOpen);
              }}
            >
              <span className="sr-only">Close panel</span>
              {/*// <!-- Heroicon name: x -->*/}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
            <div className="mt-6 relative flex-1 px-4 sm:px-6">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
