import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiVitest,
  SiDocker,
} from "react-icons/si";
import { MdPsychology } from "react-icons/md";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaVuejs />,
          <SiNextdotjs />,
          <SiNuxtdotjs />,
          <SiVitest />,
          <SiDocker />,
        ],
      },

      {
        title: "UI/UX Design",
        icons: [
          <FaFigma />,
          <SiAdobephotoshop />,
          <SiAdobeillustrator />,
          <MdPsychology />,
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "M.A in Psychology",
        stage: "University of Tehran",
      },
      {
        title: "BSc in Information Technology",
        stage: "University of Tehran",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "StackOverflow Score",
        stage: "1,165 points",
      },
      {
        title: "Foobar Service Candidate Attendance",
        stage: "Google",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Lead Frontend Developer - Pintomarket",
        stage: "2022 - Current",
      },
      {
        title: "Lead Developer & Manager - Navatel",
        stage: "2020 - 2022",
      },
      {
        title: "Lead Developer - Alaa E-School",
        stage: "2017 - 2020",
      },
      {
        title: "Developer - Alaa E-School",
        stage: "2017 - 2020",
      },
      {
        title: "Developer - Rakhsh Delivery",
        stage: "2015 - 2017",
      },
      {
        title: "Developer - Sooran Argham Fanavar",
        stage: "2012 - 2015",
      },
    ],
  },

  ,
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[330px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col  items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <span className="text-accent">Beauty</span> Through Knowledge and
            Execution.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began my journey as a developer. Since then, I've
            done remote work for agencies, consulting for startups, and
            collaborating on digital products for business and customer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  + <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              <div className="relative flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  + <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Production Ready Projects
                </div>
              </div>
              <div className="relative flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  + <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winnig Awards
                </div>
              </div>
              <div className="relative flex-1  after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-5 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  + <CountUp start={0} end={1165} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  StackOverflow Score
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col xl:flex-row md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div key={itemIndex} className="font-light mb-2 md:mb-0">
                    {item.title}
                  </div>
                  <div className="hidden md:flex ">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div className="text-2xl text-white" key={iconIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
