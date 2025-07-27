import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const achievements = [
  {
    title: "Won 2nd place in Ardunthon 1.0 (2022)",
    icon: "🏆",
  },
  {
    title: "Completed Industry preparation training programme (2023)",
    icon: "🎓",
  },
  {
    title: "Secured 2nd Runner-Up in a competitive hackathon, Duothon 2.0 (2022)",
    icon: "🏆",
  },
  
];

const responsibilities = [
  {
    title: "Member of Leo organization in NSBM",
    icon: "🦁",
  },
  {
    title: "Volunteer in Foss community in NSBM",
    icon: "🤝",
  },
  {
    title: "Member of IEEE student branch of NSBM",
    icon: "🔌",
  },
];

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % items.length);
  const prev = () => setCurrent((current - 1 + items.length) % items.length);

  return (
    <div className="relative flex items-center justify-center w-full xs:w-[350px]">
      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-0 z-10 text-white text-3xl select-none cursor-pointer transition-transform duration-200 hover:scale-125 hover:-rotate-y-12 focus:outline-none"
        style={{ background: 'none', border: 'none' }}
      >
        &#8592;
      </button>
      {/* Card */}
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mx-10">
        <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[120px] flex flex-col items-center justify-center">
          <span className="text-4xl mb-2">{items[current].icon}</span>
          {items[current].link ? (
            <a
              href={items[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg font-semibold text-center underline hover:text-blue-400"
            >
              {items[current].title}
            </a>
          ) : (
            <span className="text-white text-lg font-semibold text-center">{items[current].title}</span>
          )}
        </div>
      </div>
      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-0 z-10 text-white text-3xl select-none cursor-pointer transition-transform duration-200 hover:scale-125 hover:rotate-y-12 focus:outline-none"
        style={{ background: 'none', border: 'none' }}
      >
        &#8594;
      </button>
    </div>
  );
};

const Feedbacks = () => (
  <section className="mt-20">
    <h2 className="text-white text-3xl font-bold mb-8 text-center">Achievements & Responsibilities</h2>
    <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-xl text-white font-semibold mb-4">Achievements</h3>
        <Carousel items={achievements} />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-xl text-white font-semibold mb-4">Roles & Responsibilities</h3>
        <Carousel items={responsibilities} />
      </div>
    </div>
  </section>
);

export default SectionWrapper(Feedbacks, "feedbacks");
