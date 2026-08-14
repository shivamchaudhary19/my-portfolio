import React from "react";
import {
  FiCode,
  FiBox,
  FiLayers,
  FiTrendingUp,
  FiBookOpen,
  FiZap,
  FiCpu,
  FiTarget,
} from "react-icons/fi";

const journeyStages = [
  {
    number: "01",
    title: "FOUNDATION",
    icon: FiCode,
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "Started with the basics. Understood how things work on the web.",
    cardIcon: FiBookOpen,
    cardTitle: "LEARNED THE BASICS",
    cardText: "Built strong fundamentals",
  },

  {
    number: "02",
    title: "BUILDING",
    icon: FiBox,
    tags: ["DOM", "APIs", "GIT", "PROJECTS"],
    description:
      "Built real-world projects. Broke things, fixed things, learned a lot.",
    cardIcon: FiZap,
    cardTitle: "SHIPPED PROJECTS",
    cardText: "Turned ideas into real apps",
  },

  {
    number: "03",
    title: "SHIFT",
    icon: FiLayers,
    tags: ["REACT", "TAILWIND CSS", "COMPONENTS"],
    description:
      "Discovered the power of components and started thinking in React.",
    cardIcon: FiCpu,
    cardTitle: "LEVELLED UP",
    cardText: "Better UI. Better code.",
  },

  {
    number: "04",
    title: "RIGHT NOW",
    icon: FiTrendingUp,
    tags: ["REACT", "DSA", "UI/UX", "MORE"],
    description:
      "Building deeper. Solving problems. Getting better one step at a time.",
    cardIcon: FiTarget,
    cardTitle: "FOCUS MODE",
    cardText: "Building the future I want",
  },
];

function Journey() {
  return (
    <section
      id="journey"
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
              left-0
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
              JOURNEY
            </span>
          </div>


          {/* Background number */}

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
              lg:text-[17rem]

              dark:text-white/[0.035]
            "
          >
            04
          </span>


          {/* Heading */}

          <h2
            className="
              relative
              z-10
              max-w-4xl
              font-display
              text-[clamp(3.5rem,7vw,7rem)]
              font-black
              uppercase
              leading-[0.88]
              tracking-tight
            "
          >
            THE PATH
            <br />

            <span
              className="
                text-transparent

                [-webkit-text-stroke:1px_rgba(0,0,0,0.35)]

                dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.35)]
              "
            >
              SO FAR.
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

          <div className="space-y-1">
            <p
              className="
                text-lg
                font-medium
                text-black/70

                dark:text-white/70
              "
            >
              Not a straight line.
            </p>

            <p
              className="
                text-lg
                text-black/45

                dark:text-white/45
              "
            >
              Just better builds.
            </p>
          </div>

        </div>


        {/* TIMELINE */}

        <div
          className="
            mt-20
            overflow-x-auto
            pb-6
            scrollbar-none
          "
        >
          <div
            className="
              relative
              min-w-[1050px]
              px-2
              pt-4
            "
          >

            {/* Main timeline line */}

            <div
              className="
                absolute
                left-8
                right-8
                top-[42px]
                h-px
                border-t
                border-dashed
                border-black/30

                dark:border-white/30
              "
            />


            {/* Right arrow */}

            <div
              className="
                absolute
                right-2
                top-[31px]
                text-xl
                text-black/50

                animate-pulse

                dark:text-white/50
              "
            >
              →
            </div>


            {/* Stages */}

            <div
              className="
                grid
                grid-cols-4
                gap-10
              "
            >
              {journeyStages.map((stage, index) => (
                <JourneyStage
                  key={stage.number}
                  stage={stage}
                  index={index}
                />
              ))}
            </div>

          </div>
        </div>


        {/* FINAL STATEMENT */}

        <div
          className="
            mt-10
            border
            border-black/15
            px-6
            py-8
            transition-colors
            duration-500
            hover:border-black/50
            dark:border-white/15
            dark:hover:border-white/50
            sm:px-8
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-4
              text-center

              md:flex-row
            "
          >

            <span
              className="
                text-3xl
                leading-none
                text-black/50

                dark:text-white/50
              "
            >
              “
            </span>

            <p
              className="
                font-display
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]

                sm:text-base
              "
            >
              STILL BUILDING. STILL BREAKING.
              <br className="sm:hidden" />
              {" "}
              STILL FIGURING OUT BETTER WAYS TO DO IT.
            </p>

            <span
              className="
                text-3xl
                leading-none
                text-black/50

                dark:text-white/50
              "
            >
              ”
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}


/* JOURNEY STAGE */

function JourneyStage({ stage }) {
  const StageIcon = stage.icon;
  const CardIcon = stage.cardIcon;

  return (
    <article className="relative">

      {/* Number */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "
      >
        <span
          className="
            mb-3
            font-display
            text-sm
            font-bold
            tracking-wider
            text-black/70

            dark:text-white/70
          "
        >
          {stage.number}
        </span>


        {/* Timeline node */}

        <div
          className="
            relative
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            border
            border-black
            bg-white

            transition-transform
            duration-500
            hover:scale-125

            dark:border-white
            dark:bg-black
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-black

              dark:bg-white
            "
          />
        </div>
      </div>


      {/* Stage icon */}

      <div className="mt-8 flex justify-center">

        <div
          className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            border
            border-black/25

            transition-transform
            duration-500
            hover:scale-105
            hover:rotate-3

            dark:border-white/25
          "
        >
          <StageIcon
            className="
              h-12
              w-12
              text-black/75

              dark:text-white/75
            "
          />
        </div>

      </div>


      {/* Stage title */}

      <h3
        className="
          mt-7
          text-center
          font-display
          text-xl
          font-bold
          tracking-[0.14em]

          sm:text-2xl
        "
      >
        {stage.title}
      </h3>


      {/* Tags */}

      <div
        className="
          mt-5
          flex
          flex-wrap
          justify-center
          gap-2
        "
      >
        {stage.tags.map((tag) => (
          <span
            key={tag}
            className="
              border
              border-black/20
              px-3
              py-1.5
              text-[9px]
              tracking-[0.12em]
              text-black/70

              transition-colors
              duration-300
              hover:border-black/50
              hover:text-black

              dark:border-white/20
              dark:text-white/70
              dark:hover:border-white/50
              dark:hover:text-white
            "
          >
            {tag}
          </span>
        ))}
      </div>


      {/* Description */}

      <p
        className="
          mx-auto
          mt-6
          max-w-[230px]
          text-center
          text-sm
          leading-6
          text-black/55

          dark:text-white/55
        "
      >
        {stage.description}
      </p>


      {/* Achievement card */}

      <div
        className="
          mt-7
          border
          border-black/15
          p-5

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-black/40

          dark:border-white/15
          dark:hover:border-white/40
        "
      >

        <div className="flex items-center gap-4">

          <CardIcon
            className="
              h-7
              w-7
              shrink-0
              text-black/70

              dark:text-white/70
            "
          />

          <div>

            <h4
              className="
                font-display
                text-xs
                font-bold
                tracking-[0.15em]
              "
            >
              {stage.cardTitle}
            </h4>

            <p
              className="
                mt-1
                text-xs
                text-black/45

                dark:text-white/45
              "
            >
              {stage.cardText}
            </p>

          </div>

        </div>

      </div>

    </article>
  );
}

export default Journey;