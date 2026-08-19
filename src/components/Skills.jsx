import React from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

import {
  VscCode,
} from "react-icons/vsc";

import {
  FiTarget,
  FiCode,
  FiMonitor,
  FiPenTool,
} from "react-icons/fi";


const skillGroups = [
  {
    number: "01",
    title: "FRONTEND",
    skills: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "JavaScript (ES6+)",
        icon: SiJavascript,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: SiCss,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    number: "02",
    title: "TOOLS",
    skills: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "VS Code",
        icon: VscCode,
      },
    ],
  },

  {
    number: "03",
    title: "CORE",
    skills: [
      {
        name: "DSA",
        icon: FiCode,
      },
      {
        name: "Problem Solving",
        icon: FiTarget,
      },
      {
        name: "Responsive Design",
        icon: FiMonitor,
      },
      {
        name: "UI/UX Principles",
        icon: FiPenTool,
      },
    ],
  },
];


const currentlyDeepening = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Frontend Architecture",
  "UI Motion",
  "Performance Optimization",
];


function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-24
        text-black
        sm:px-10
        lg:px-16
        lg:py-28

        dark:bg-black
        dark:text-white
      "
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}

        <div className="relative">

          {/* Vertical label */}

          <div
            className="
              pointer-events-none
              absolute
              left-9
              top-1/2
              hidden
              -translate-x-1/2
              text-[10px]
              tracking-[0.5em]
              text-black/50

              dark:text-white/50

              lg:block
            "
          >
            <span className="inline-block -rotate-90 origin-top-left">
              SKILLS / STACK
            </span>
          </div>


          {/* Large background number */}

          <span
            className="
              pointer-events-none
              absolute
              right-0
              top-[-2rem]
              select-none
              font-display
              text-[10rem]
              leading-none
              text-black/[0.035]

              sm:text-[14rem]

              lg:top-[-3rem]
              lg:text-[20rem]

              dark:text-white/[0.035]
            "
          >
            03
          </span>


          {/* Main heading */}

          <h2
            className="
              relative
              z-10
              max-w-5xl
              font-display
              text-[clamp(3.5rem,7vw,7rem)]
              font-black
              uppercase
              leading-[0.88]
              tracking-tight
            "
          >
            THE TOOLS
            <br />

            <span
              className="
                text-transparent
                [-webkit-text-stroke:1px_rgba(0,0,0,0.35)]

                dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.35)]
              "
            >
              BEHIND THE WORK.
            </span>
          </h2>


          {/* Divider */}

          <div
            className="
              my-8
              h-px
              w-16
              bg-black/60

              dark:bg-white/60
            "
          />


          {/* Intro */}

          <p
            className="
              max-w-xl
              text-base
              leading-7
              text-black/60

              sm:text-lg

              dark:text-white/60
            "
          >
            I use these technologies to turn ideas into real, functional,
            and impactful products.
          </p>

        </div>


        {/* SKILL GROUPS */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.number}
              number={group.number}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>


        {/* CURRENTLY DEEPENING */}

        <div
          className="
            mt-5
            border
            border-black/15
            p-5

            sm:p-6

            dark:border-white/15
          "
        >

          {/* Heading */}

          <div
            className="
              flex
              flex-col
              gap-4

              lg:flex-row
              lg:items-center
            "
          >

            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
              "
            >
              <span className="text-lg">✦</span>

              <h3
                className="
                  font-display
                  text-sm
                  font-bold
                  tracking-[0.2em]
                "
              >
                CURRENTLY DEEPENING
              </h3>
            </div>


            <div
              className="
                hidden
                h-px
                flex-1
                bg-black/15

                lg:block

                dark:bg-white/15
              "
            />

          </div>


          {/* Tags */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
            "
          >
            {currentlyDeepening.map((item) => (
              <span
                key={item}
                className="
                  border
                  border-black/20
                  px-4
                  py-2
                  text-xs
                  tracking-wide
                  text-black/75

                  transition-all
                  duration-300

                  hover:border-black/60
                  hover:text-black

                  dark:border-white/20
                  dark:text-white/75
                  dark:hover:border-white/60
                  dark:hover:text-white
                "
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


/* SKILL GROUP */

function SkillGroup({ number, title, skills }) {
  return (
    <div
      className="
        flex
        min-h-[280px]
        flex-col
        border
        border-black/15
        p-6

        transition-colors
        duration-300

        hover:border-black/40

        dark:border-white/15
        dark:hover:border-white/40
      "
    >

      {/* Number + line */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <span
          className="
            font-display
            text-sm
            font-bold
            tracking-wider
            text-black/70

            dark:text-white/70
          "
        >
          {number}
        </span>

        <span
          className="
            h-px
            flex-1
            bg-black/20

            dark:bg-white/20
          "
        />

      </div>


      {/* Group title */}

      <h3
        className="
          mt-8
          font-display
          text-2xl
          font-bold
          tracking-[0.15em]
        "
      >
        {title}
      </h3>


      {/* Skills */}

      <div className="mt-8 space-y-5">

        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="
              flex
              items-center
              gap-4
            "
          >

            {/* Skill icon */}

            <Icon
              className="
                h-5
                w-5
                shrink-0
                text-black/70

                dark:text-white/70
              "
            />

            {/* Skill name */}

            <span
              className="
                text-sm
                text-black/75

                dark:text-white/75
              "
            >
              {name}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Skills;