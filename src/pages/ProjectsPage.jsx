import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-black

        dark:bg-black
        dark:text-white
      "
    >
      <div className="px-6 py-8 sm:px-10 lg:px-16">

        <button
          onClick={() => navigate("/")}
          className="
            flex
            items-center
            gap-2
            text-sm
            tracking-[0.15em]

            text-black/60
            transition-colors
            duration-300
            hover:text-black

            dark:text-white/60
            dark:hover:text-white
          "
        >
          ← BACK
        </button>

        <div
          className="
            flex
            min-h-[80vh]
            items-center
            justify-center
            text-center
          "
        >
          <div>
            <p
              className="
                text-xs
                tracking-[0.3em]
                text-black/40

                dark:text-white/40
              "
            >
              PROJECT ARCHIVE
            </p>

            <h1
              className="
                mt-5
                font-display
                text-5xl
                font-black
                uppercase
                sm:text-7xl
                lg:text-8xl
              "
            >
              PROJECTS
            </h1>

            <p
              className="
                mt-6
                text-lg
                text-black/50

                dark:text-white/50
              "
            >
              More projects coming soon.
            </p>

            <p
              className="
                mt-2
                text-sm
                text-black/40

                dark:text-white/40
              "
            >
              This page will be updated as new work is added.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default ProjectsPage;