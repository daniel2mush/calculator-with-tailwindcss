import React, { useEffect, useRef, useState } from "react";
import testimonials, { testiObj } from "../utils/tesimonials";
import TestimonialModel from "./TestimonialModel";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const IndexInterval = useRef(0);

  const handleClickRight = () => {
    const newIndex = (index + 1) % testimonials.length;
    console.log(newIndex);
    setIndex(newIndex);
  };
  const handleClickLeft = () => {
    const newIndex = (index - 1 + testimonials.length) % testimonials.length;
    console.log(newIndex);
    setIndex(newIndex);
  };

  useEffect(() => {
    IndexInterval.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 2000);

    return () => {
      clearInterval(IndexInterval.current);
    };
  }, []);

  return (
    <section className=" flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" bg-white shadow-lg w-full max-w-sm h-auto rounded px-5 py-5">
        <TestimonialModel
          testimonials={testimonials[index]}
          onClickLeft={handleClickLeft}
          onClickRight={handleClickRight}
        />
      </div>
    </section>
  );
};

export default Testimonials;
