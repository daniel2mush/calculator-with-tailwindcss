import React, { useState } from "react";
import accordionItems from "../utils/accordion";
import { ArrowDown, ArrowDown01, ChevronDown, ChevronUp } from "lucide-react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number[]>([]);
  function handleIsActive(id: number) {
    //
    const isItemOpen = isOpen.includes(id);

    if (isItemOpen) {
      const newItem = isOpen.filter((item) => item !== id);
      setIsOpen(newItem);
      return;
    }

    const newitem = [...isOpen, id];
    setIsOpen(newitem);
  }
  return (
    <section className=" bg-gray-300 flex items-center justify-center min-h-screen">
      <div className=" bg-white w-full max-w-md rounded shadow-md">
        {accordionItems.map((i) => {
          const isItemOpen = isOpen.includes(i.id);
          return (
            <div key={i.id} className=" border-b-2 px-4 py-2">
              <div
                onClick={() => handleIsActive(i.id)}
                className=" flex justify-between cursor-pointer">
                <p className=" font-bold text-gray-600 text">{i.title}</p>{" "}
                <button className=" text-gray-600  ">
                  {isItemOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
              {isItemOpen ? (
                <p className=" font-light text-gray-600 text-xs">{i.content}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
