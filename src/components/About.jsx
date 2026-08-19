import React from "react";
import Me from "../assets/Me.png";
import ImageSlideshow from "./ImageSlideshow";
import Me1 from "../assets/Me1.png";
import Me2 from "../assets/Me2.png";
import Me3 from "../assets/Me3.png";
import Me4 from "../assets/Me4.png";
import Me5 from "../assets/Me5.png";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-24
        text-black
        sm:px-10
        lg:px-16

        dark:bg-black
        dark:text-white
      "
    >
      {/* Decorative vertical text */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[40%]
          hidden
          -translate-y-1/2
          rotate-[-90deg]
          text-[10px]
          tracking-[0.5em]
          text-black/50
          lg:block

          dark:text-white/50
        "
      >
        ABOUT ME
      </div>

      {/* Main container */}
      <div className="mx-auto max-w-[1400px]">

        <div
          className="
            mb-10
            flex
            items-center
            gap-3
            text-xs
            tracking-[0.3em]
            text-black/60

            dark:text-white/60
          "
        >
          <span
            className="
              h-px
              w-8
              bg-black/60

              dark:bg-white/60
            "
          ></span>

          <span>ABOUT</span>

          <span
            className="
              h-px
              w-8
              bg-black/60

              dark:bg-white/60
            "
          ></span>
        </div>


        <div
          className="
            grid
            grid-cols-1
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >

          {/* LEFT CONTENT */}

          <div className="relative">

            {/* Large section number */}
            <span
              className="
                pointer-events-none
                absolute
                -right-4
                -top-16
                select-none
                font-display
                text-[10rem]
                leading-none
                text-black/[0.035]
                sm:text-[14rem]
                lg:-right-8
                lg:-top-20
                lg:text-[17rem]

                dark:text-white/[0.035]
              "
            >
              01
            </span>


            {/* Heading */}
            <h2
              className="
                relative
                z-10
                max-w-3xl
                font-display
                text-[clamp(3.5rem,7vw,7rem)]
                font-black
                uppercase
                leading-[0.88]
                tracking-tight
              "
            >
              THE PERSON
              <br />
              BEHIND THE CODE
            </h2>


            {/* Divider */}
            <div
              className="
                my-8
                h-px
                w-20
                bg-black/60

                dark:bg-white/60
              "
            ></div>


            {/* Strong opening */}
            <p
              className="
                max-w-2xl
                text-xl
                font-semibold
                leading-relaxed
                sm:text-2xl
              "
            >
              I don't just write code. I break things until I understand them
              — then build them better.
            </p>


            {/* Main paragraphs */}
            <div
              className="
                mt-7
                max-w-2xl
                space-y-5
                text-sm
                leading-7
                text-black/60
                sm:text-base

                dark:text-white/60
              "
            >
              <p>
                Second-year CS student, self-taught outside the classroom.
                I've been shipping real projects, solving DSA daily, and
                treating every deployed project as proof — not a promise.
              </p>

              <p>
                I learn by building, not by hoarding solved counts. Every
                problem gets understood before it gets solved — no rushing
                past the{" "}
                <span
                  className="
                    text-black

                    dark:text-white
                  "
                >
                  "why."
                </span>{" "}
                Days are for building. Bugs are part of the process, not an
                interruption to it.
              </p>
            </div>


            {/* Statement */}
            <p
              className="
                mt-7
                font-display
                text-sm
                font-bold
                tracking-[0.15em]
                sm:text-base
              "
            >
              LEARN. BUILD. BREAK. UNDERSTAND. REPEAT.
            </p>


            {/* Closing */}
            <div
              className="
                mt-7
                max-w-2xl
                space-y-5
                text-sm
                leading-7
                text-black/60
                sm:text-base

                dark:text-white/60
              "
            >
              <p>
                I'm not chasing a finish line. I'm building momentum that
                compounds — one project, one problem, one improvement at a
                time.
              </p>

              <p
                className="
                  font-semibold
                  text-black

                  dark:text-white
                "
              >
                This isn't a phase. This is just how I move.
              </p>
            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
              lg:justify-end
            "
          >

            {/* Image number / decorative text */}
            <div
              className="
                absolute
                -right-2
                top-1/2
                hidden
                -translate-y-1/2
                rotate-90
                text-[10px]
                tracking-[0.5em]
                text-black/40
                xl:block

                dark:text-white/40
              "
            >
              BUILD &nbsp; › &nbsp; BREAK &nbsp; › &nbsp; IMPROVE
            </div>


            {/* Image frame */}
            <div
              className="
                relative
                w-full
                max-w-[520px]
                border
                border-black/20
                p-3
                sm:p-4
                lg:max-w-[500px]

                dark:border-white/20
              "
            >

              {/* Corner decoration - top right */}
              <span
                className="
                  absolute
                  -right-4
                  -top-4
                  h-10
                  w-10
                  border-r
                  border-t
                  border-black/70

                  dark:border-white/70
                "
              ></span>


              {/* Corner decoration - bottom left */}
              <span
                className="
                  absolute
                  -bottom-4
                  -left-4
                  h-10
                  w-10
                  border-b
                  border-l
                  border-black/70

                  dark:border-white/70
                "
              ></span>


              {/* Image */}
              <div
                className="
                  relative
                  aspect-[3/4]
                  overflow-hidden
                  bg-zinc-100

                  dark:bg-zinc-950
                "
              >

                <ImageSlideshow
                  images={[Me, Me1, Me2, Me3, Me4, Me5]}
                  interval={3000}
                />

                {/* Image overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent

                    dark:from-black/60
                  "
                ></div>


                {/* Small image label */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    text-[10px]
                    tracking-[0.3em]
                    text-white/80
                  "
                >
                  SHIVAM CHAUDHARY
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* LOWER GRID */}

        <div
          className="
            mt-24
            grid
            grid-cols-1
            border-t
            border-black/15
            md:grid-cols-3

            dark:border-white/15
          "
        >

          {/* HOW I THINK */}

          <div
            className="
              border-b
              border-black/15
              py-10
              md:border-b-0
              md:border-r
              md:pr-10

              dark:border-white/15
            "
          >

            <SectionTitle title="HOW I THINK" />

            <div className="mt-8 space-y-8">

              <ThinkItem
                number="01"
                title="FUNCTION FIRST"
                text="If it doesn't solve a problem, making it prettier won't save it."
              />

              <ThinkItem
                number="02"
                title="DETAILS MATTER"
                text="Spacing, hierarchy, feedback, responsiveness — the small things decide everything."
              />

              <ThinkItem
                number="03"
                title="MAKE. BREAK. IMPROVE."
                text="I don't expect the first version to be the best version."
              />

            </div>
          </div>


          {/* CURRENTLY */}

          <div
            className="
              border-b
              border-black/15
              py-10
              md:border-b-0
              md:border-r
              md:px-10

              dark:border-white/15
            "
          >

            <SectionTitle title="CURRENTLY" />

            <div className="mt-8 space-y-7">

              <CurrentItem
                symbol="</>"
                title="BUILDING"
                text="React applications & real-world projects"
              />

              <CurrentItem
                symbol="▢"
                title="LEARNING"
                text="Advanced JavaScript, React & UI engineering"
              />

              <CurrentItem
                symbol="✦"
                title="EXPLORING"
                text="Animation, interaction design & performance"
              />

            </div>
          </div>


          {/* TECH */}

          <div className="py-10 md:pl-10">

            <SectionTitle title="TECH I WORK WITH" />

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Git & GitHub",
                "HTML",
                "CSS",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    border
                    border-black/20
                    px-4
                    py-2
                    text-xs
                    tracking-wide
                    text-black/70

                    transition-all
                    duration-300

                    hover:border-black/60
                    hover:text-black

                    dark:border-white/20
                    dark:text-white/70
                    dark:hover:border-white/60
                    dark:hover:text-white
                  "
                >
                  {tech}
                </span>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-3">

      <span
        className="
          h-px
          w-6
          bg-black/60

          dark:bg-white/60
        "
      ></span>

      <h3
        className="
          font-display
          text-sm
          font-bold
          tracking-[0.15em]
        "
      >
        {title}
      </h3>

    </div>
  );
}


function ThinkItem({ number, title, text }) {
  return (
    <div className="flex gap-5">

      <span
        className="
          font-display
          text-3xl
          font-bold
          leading-none
        "
      >
        {number}
      </span>

      <div>

        <h4
          className="
            text-sm
            font-bold
            tracking-wide
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-black/50

            dark:text-white/50
          "
        >
          {text}
        </p>

      </div>

    </div>
  );
}


function CurrentItem({ symbol, title, text }) {
  return (
    <div className="flex gap-5">

      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          text-lg
          text-black/80

          dark:text-white/80
        "
      >
        {symbol}
      </span>

      <div>

        <h4
          className="
            text-sm
            font-bold
            tracking-wide
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1
            text-sm
            leading-6
            text-black/50

            dark:text-white/50
          "
        >
          {text}
        </p>

      </div>

    </div>
  );
}


export default About;