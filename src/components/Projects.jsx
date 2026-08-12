import React from "react";

const projects = [
  {
    number: "01",
    name: "WEATHER",
    type: "APP",
    tagline: "LIVE WEATHER. ZERO GUESSWORK.",
    tech: "JAVASCRIPT · API",
    live: "https://shivamchaudhary19.github.io/weather-app/",
    github: "https://github.com/shivamchaudhary19/weather-app",

    // Medium:
    // Weather = left column, full 2 rows
    //
    // Desktop:
    // Weather = first 2 columns, first row
    grid:
      "md:col-start-1 md:row-start-1 md:row-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-1",
  },

  {
    number: "02",
    name: "NOISY",
    type: "HEADPHONES",
    tagline: "SOUND, WITHOUT THE NOISE.",
    tech: "HTML · CSS · JAVASCRIPT",
    live: "https://noisy-eight.vercel.app/",
    github: "https://github.com/shivamchaudhary19/noisy-headphones",

    // Medium:
    // Noisy = middle column, first row
    //
    // Desktop:
    // Noisy = third column, first row
    grid:
      "md:col-start-2 md:row-start-1 lg:col-start-3 lg:row-start-1",
  },

  {
    number: "03",
    name: "VELORA",
    type: "SNEAKERS",
    tagline: "MADE TO MOVE.",
    tech: "HTML · CSS · JAVASCRIPT",
    live: "https://shivamchaudhary19.github.io/sneakers-landing-page/",
    github: "https://github.com/shivamchaudhary19/sneakers-landing-page",

    // Medium:
    // Velora = third column, first row
    //
    // Desktop:
    // Velora = first column, second row
    grid:
      "md:col-start-3 md:row-start-1 lg:col-start-1 lg:row-start-2",
  },

  {
    number: "04",
    name: "SHIVAM",
    type: "PORTFOLIO",
    tagline: "THE SITE YOU'RE STANDING ON.",
    tech: "REACT · TAILWIND CSS",
    live: null,
    github: "https://github.com/shivamchaudhary19/my-portfolio",

    // Medium:
    // Portfolio = columns 2-3, second row
    
    // Desktop:
    // Portfolio = columns 2-3, second row
    grid:
      "md:col-start-2 md:col-span-2 md:row-start-2 lg:col-start-2 lg:col-span-2 lg:row-start-2",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-28
        text-black

        sm:px-10
        lg:px-16

        dark:bg-black
        dark:text-white
      "
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}

        <div className="mb-16">

          {/* Small label */}

          <div
            className="
              mb-6
              flex
              items-center
              gap-3
              text-xs
              tracking-[0.3em]
              text-black/50

              dark:text-white/50
            "
          >
            <span
              className="
                h-px
                w-8
                bg-black/60

                dark:bg-white/60
              "
            />

            <span>
              SELECTED WORK / 2025—26
            </span>
          </div>


          {/* Heading + description */}

          <div
            className="
              flex
              flex-col
              gap-8

              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <h2
              className="
                font-display
                text-[clamp(4rem,10vw,9rem)]
                font-black
                uppercase
                leading-[0.8]
                tracking-tight
              "
            >
              PROJECTS
            </h2>


            <p
              className="
                max-w-sm
                text-sm
                leading-6
                text-black/50

                md:mb-2

                dark:text-white/50
              "
            >
              Things I've built, broken & shipped.
            </p>

          </div>
        </div>


        {/* PROJECT GRID */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            md:grid-cols-3
            md:grid-rows-[360px_360px]

            lg:grid-cols-3
            lg:grid-rows-[360px_360px]
          "
        >

          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}

        </div>


        {/* VIEW ALL PROJECTS */}

        <div className="mt-20 flex justify-center">

          <button
            type="button"
            className="
              group
              relative
              overflow-hidden
              border
              border-black/25
              px-8
              py-4
              text-sm
              tracking-[0.2em]
              transition-all
              duration-300

              hover:border-black

              dark:border-white/25
              dark:hover:border-white
            "
          >

            {/* Visible text */}

            <span
              className="
                block
                transition-transform
                duration-500
                ease-[cubic-bezier(0.76,0,0.24,1)]

                group-hover:-translate-y-full
              "
            >
              VIEW ALL PROJECTS ↗
            </span>


            {/* Hover copy */}

            <span
              className="
                absolute
                left-0
                top-full
                block
                w-full
                text-center
                transition-transform
                duration-500
                ease-[cubic-bezier(0.76,0,0.24,1)]

                group-hover:-translate-y-full
              "
            >
              VIEW ALL PROJECTS ↗
            </span>

          </button>

        </div>

      </div>
    </section>
  );
}


/* PROJECT CARD */

function ProjectCard({ project }) {
  return (
    <article
      className={`
        group
        relative
        min-h-0
        ${project.grid}
      `}
    >

      <div
        className="
          flex
          h-full
          min-h-0
          flex-col
          overflow-hidden

          border
          border-black/15
          bg-white

          transition-all
          duration-500

          group-hover:border-black/40

          dark:border-white/15
          dark:bg-[#080808]
          dark:group-hover:border-white/40
        "
      >

        {/* VISUAL AREA */}

        <div
          className="
            relative
            min-h-0
            flex-1
            overflow-hidden

            bg-black/[0.02]

            dark:bg-white/[0.02]
          "
        >

          {/* Large background project name */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >
            <span
              className="
                select-none
                whitespace-nowrap
                font-display
                text-[clamp(4rem,8vw,9rem)]
                font-black
                uppercase
                leading-none
                tracking-tight

                text-black/[0.06]

                transition-all
                duration-700
                ease-out

                group-hover:scale-105
                group-hover:text-black/[0.11]

                dark:text-white/[0.07]
                dark:group-hover:text-white/[0.13]
              "
            >
              {project.name}
            </span>
          </div>


          {/* Project number */}

          <span
            className="
              absolute
              left-5
              top-5
              z-20

              font-display
              text-sm
              font-bold
              tracking-wider

              text-black/60

              dark:text-white/70
            "
          >
            {project.number}
          </span>


          {/* Live project arrow */}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live project`}
              className="
                absolute
                right-5
                top-5
                z-20

                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full
                border
                border-black/20

                text-lg
                text-black/60

                transition-all
                duration-300

                hover:border-black
                hover:bg-black
                hover:text-white

                dark:border-white/20
                dark:text-white/70
                dark:hover:border-white
                dark:hover:bg-white
                dark:hover:text-black
              "
            >
              ↗
            </a>
          )}


          {/* Project type */}

          <span
            className="
              absolute
              bottom-5
              left-5

              text-[9px]
              tracking-[0.35em]

              text-black/35

              dark:text-white/30
            "
          >
            {project.type}
          </span>

        </div>


        {/* PROJECT INFORMATION */}

        <div
          className="
            shrink-0
            border-t
            border-black/10
            p-5

            dark:border-white/10
          "
        >

          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >

            {/* Project name */}

            <div>

              <h3
                className="
                  font-display
                  text-3xl
                  font-black
                  uppercase
                  leading-none
                  tracking-tight
                "
              >
                {project.name}
              </h3>

              <p
                className="
                  mt-1
                  font-display
                  text-lg
                  font-bold
                  uppercase
                  leading-none
                  tracking-wide

                  text-black/35

                  dark:text-white/35
                "
              >
                {project.type}
              </p>

            </div>


            {/* Tech */}

            <span
              className="
                text-[9px]
                tracking-[0.15em]

                text-black/35

                dark:text-white/35
              "
            >
              {project.tech}
            </span>

          </div>


          {/* Tagline */}

          <p
            className="
              mt-4
              text-sm
              font-semibold
              tracking-wide

              text-black/75

              dark:text-white/80
            "
          >
            {project.tagline}
          </p>


          {/* Links */}

          <div
            className="
              mt-4
              flex
              items-center
              gap-6
            "
          >

            {/* Live */}

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[10px]
                  font-bold
                  tracking-[0.2em]

                  text-black/55

                  transition-colors
                  duration-300

                  hover:text-black

                  dark:text-white/60
                  dark:hover:text-white
                "
              >
                VIEW PROJECT ↗
              </a>
            ) : (
              <span
                className="
                  text-[10px]
                  font-bold
                  tracking-[0.2em]

                  text-black/30

                  dark:text-white/30
                "
              >
                LIVE SOON
              </span>
            )}


            {/* GitHub */}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[10px]
                font-bold
                tracking-[0.2em]

                text-black/55

                transition-colors
                duration-300

                hover:text-black

                dark:text-white/60
                dark:hover:text-white
              "
            >
              GITHUB ↗
            </a>

          </div>

        </div>

      </div>

    </article>
  );
}

export default Projects;