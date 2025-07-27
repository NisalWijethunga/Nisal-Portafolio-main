import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const CertificationCard = ({ index, title, icon, issuer, date, link }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div 
        ref={cardRef} 
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ${link ? 'cursor-pointer hover:shadow-lg transition-all duration-300' : ''}`}
        onClick={link ? handleClick : undefined}
      >
        <div className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${link ? 'hover:bg-opacity-80 transition-all duration-300' : ''}`}>
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
          <p className="text-secondary text-[14px] text-center">{issuer}</p>
          <p className="text-secondary text-[12px] text-center">{date}</p>
          {link && (
            <p className="text-[#915EFF] text-[12px] text-center mt-2 font-semibold">
              Click to verify →
            </p>
          )}
        </div>
      </div>
    </Tilt>
  );
};

const Certification = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? certifications : certifications.slice(0, 4);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following certifications showcase my commitment to continuous learning and professional development. Each certification represents expertise in specific technologies and frameworks that I use in my development work.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {displayedCertifications.map((certification, index) => (
          <CertificationCard key={certification.title} index={index} {...certification} />
        ))}
      </div>

      {!showAll && certifications.length > 4 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-tertiary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            See More Certifications
          </button>
        </div>
      )}

      {showAll && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(false)}
            className="bg-tertiary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Show Less
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Certification, "certifications"); 