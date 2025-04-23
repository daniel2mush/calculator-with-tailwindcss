import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [lightBG, setLightBG] = useState(false);

  const clear = () => setInputValue("");

  const display = (value: string) => {
    setInputValue((v) => v + value);
  };
  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <div
      className={
        lightBG
          ? " bg-white w-full min-h-screen flex justify-center items-center"
          : " bg-slate-900 w-full min-h-screen flex justify-center items-center"
      }>
      <div className=" w-full max-w-sm  ">
        <div className="  my-2">
          <button
            onClick={() => setLightBG(!lightBG)}
            className=" bg-white py-2 px-2 rounded text-gray-900">
            Toggle background
          </button>
        </div>
        <form className=" form">
          <input type="text" value={inputValue} className="view" />
          <span className="clear" onClick={() => clear()}>
            c
          </span>
          <span onClick={() => display("/")}>/</span>
          <span onClick={() => display("*")}>*</span>
          <span onClick={() => display("7")}>7</span>
          <span onClick={() => display("8")}>8</span>
          <span onClick={() => display("9")}>9</span>
          <span onClick={() => display("-")}>-</span>
          <span onClick={() => display("4")}>4</span>
          <span onClick={() => display("5")}>5</span>
          <span onClick={() => display("6")}>6</span>
          <span className="plus" onClick={() => display("+")}>
            +
          </span>
          <span onClick={() => display("1")}>1</span>
          <span onClick={() => display("2")}>2</span>
          <span onClick={() => display("3")}>3</span>
          <span onClick={() => display("0")}>0</span>
          <span onClick={() => display("00")}>00</span>
          <span onClick={() => display(".")}>.</span>
          <span onClick={() => calculate()}>=</span>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
