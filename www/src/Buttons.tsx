import React from "react";

{
  /* SVG buttons taken from here: https://heroicons.com/*/
}

type ButtonProps = {
  onClick: Function;
};

export const PlusButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="block svg-btn btn-teal btn-teal:hover justify-self-left font-bold w-14 m-2"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  );
};

export const XButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="block svg-btn btn-red btn-red:hover self-center font-bold m-2 mb-0 w-10 mt-auto"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
