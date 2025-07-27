import React from "react";
import { coreCompetencies } from "../constants";
import { Tilt } from "react-tilt";

const CoreCompetencyCard = ({ title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[120px] flex items-center justify-center">
          <span className="text-white text-lg font-semibold text-center">{title}</span>
        </div>
      </div>
    </Tilt>
  );
};

const CoreCompetencies = () => (
  <section className="mt-20">
    <h2 className="text-white text-3xl font-bold mb-8 text-center">Core Competencies</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
      {coreCompetencies.map((item) => (
        <CoreCompetencyCard key={item.title} title={item.title} />
      ))}
    </div>
  </section>
);

export default CoreCompetencies; 