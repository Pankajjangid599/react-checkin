import React, { useState, useRef, useEffect } from "react";

const cat = {
  all: [
    { id: 1, name: "Item 1", src: "\meal.jpg", price: "3.000 KD" },
    { id: 2, name: "Item 2", src: "\meal.jpg", price: "4.000 KD" },
  ],
  meals: [
    { id: 3, name: "original chiken Mea", src: "\meal.jpg", price: "5.000 KD",desc:"Hand-breaded crispy chicken,shredded lettuce, original" },
    { id: 4, name: "spicy chickn Meal ", src: "\meal.jpg", price: "6.000 KD",desc:"Hand-breaded crispy chicken,shredded lettuce, original" },
  ],
  sandwiches: [
    { id: 5, name: "Sandwich 1", src: "\sandwitch.jpg", price: "2.500 KD",desc:"Hand-breaded crispy chicken,shredded lettuce, original" },
    { id: 6, name: "Sandwich 2", src: "\sandwitch.jpg", price: "3.500 KD",desc:"Hand-breaded crispy chicken,shredded lettuce, original" },
  ],
};

const ScrollSpyWithBlur = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categoriesRef = useRef({});

  console.log(activeCategory)

  useEffect(() => {
    const handleScroll = () => {
      const offsets = Object.keys(categoriesRef.current).map((key) => {
        const rect = categoriesRef.current[key]?.getBoundingClientRect();
        return { key, offset: rect?.top || 0 };
      });

      const currentCategory =
        offsets.find(({ offset }) => offset > 0)?.key || "all";
      setActiveCategory(currentCategory);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen p-4 ">
      {/* Category Tabs */}
      <div className="sticky top-0 w-full flex gap-4 py-2 bg-white z-10">
        {Object.keys(cat).map((key) => (
          <div
            key={key}
            className={`flex justify-between items-center cursor-pointer  ${
              activeCategory === key
                ? ""
                : ""
            } `}
            onClick={() => {
              categoriesRef.current[key]?.scrollIntoView({
                behavior: "smooth",
              });
              setActiveCategory(key);
            }}
          >
            <div className="flex flex-col justify-center place-items-center">

            <img
              src={`${cat[key][0]?.src}`}
              alt={key}
              className={` ${
                activeCategory === key
                  ? "border border-gray-400 text-black"
                  : "border-gray-200 border text-gray-500 opacity-60"
              }   rounded-full w-16 h-16 `}
            />
            <p className={` ${
                activeCategory === key
                  ? " text-black"
                  : " text-gray-500 opacity-60 "
              }    text-sm mt-2 capitalize`}>{key}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Category Content */}
      <div className="mt-8 py-4">
        {Object.keys(cat).map((key) => (
          <div
            key={key}
            ref={(el) => (categoriesRef.current[key] = el)}
            className=""
          >
            <button className="py-2.5 my-2 text-gray-500 bg-gray-100 rounded shadow w-full capitalize font-semibold text-sm"
            style={{backgroundColor:"rgb(119 119 119 / 12%)"}}
            >
              {key}
            </button>
            <div className="grid grid-cols-2 gap-4">
              {cat[key].map((item) => (
                <div
                  key={item.id}
                  className=" p-4 rounded-md text-start"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-32 mx-auto rounded-full"
                  />
                  <p className="mt-2 font-semibold capitalize text-black text-sm">{item.name}</p>
                  <p className="mt-2 capitalize text-black text-xs">{item.desc}</p>
                  <p className="mt-1 text-gray-600 text-end">{item.price}</p>
                  <button className="mt-4 w-full py-1 text-[#9aa89e] rounded"
                  style={{border:"1px solid rgb(154 168 158 / 50%)"}}
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpyWithBlur;
