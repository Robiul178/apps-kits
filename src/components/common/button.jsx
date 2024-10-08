import React from "react";

const Button = ({ text, text2, text3 }) => {
  return (
    <>
      <button
        className={`${
          !text ? "hidden" : ""
        } text-lg font-bold border rounded-md px-10 py-3 bg-blue-800 hover:bg-black text-white`}
      >
        {text}
      </button>
      <button
        className={`${
          !text2 ? "hidden" : ""
        } text-lg font-bold border rounded-md px-10 py-3 bg-blue-800 hover:bg-black text-white`}
      >
        {text2}
      </button>
      <button
        className={`${
          !text3 ? "hidden" : ""
        } text-lg font-bold border rounded-md px-10 py-3 bg-blue-800 hover:bg-black text-white`}
      >
        {text3}
      </button>
    </>
  );
};

export default Button;
