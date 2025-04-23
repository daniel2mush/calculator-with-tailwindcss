import React from "react";
import { testiObj } from "../utils/tesimonials";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
  Dot,
} from "lucide-react";

export interface TestimonialModelProps {
  testimonials: testiObj;
  onClickRight: () => void;
  onClickLeft: () => void;
}

const TestimonialModel = ({
  testimonials,
  onClickLeft,
  onClickRight,
}: TestimonialModelProps) => {
  return (
    <section>
      <p className=" text-gray-600 font-light text-center">
        {testimonials.quote}
      </p>
      <div className=" flex justify-center">
        <Dot />
        <Dot />
        <Dot />
      </div>
      <div className=" flex justify-center font-bold text-gray-700">
        <h2> - {testimonials.name}</h2>
      </div>
      <div className=" flex justify-between">
        <button
          onClick={onClickLeft}
          className="  bg-blue-800 px-3 py-1 rounded-md hover:bg-blue-600 active:bg-sky-400 shadow-sm">
          <ArrowLeftCircle className=" text-white" />
        </button>
        <button
          onClick={onClickRight}
          className="  bg-blue-800 px-3 py-1 rounded-md hover:bg-blue-600 active:bg-sky-400 shadow-sm">
          <ArrowRightCircle className=" text-white" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialModel;
