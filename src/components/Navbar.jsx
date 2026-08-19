import React, { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import { scrollToSection } from "../utils/smoothScroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}

      <nav
        className="
          relative
          z-50
          flex
          h-16
          items-center
          justify-between
          px-5
          py-2

          bg-[#F2F2F0]
          text-black
          
          dark:bg-[#141414]

          md:px-6
        "
      >

        {/* LOGO */}

        <a
          href="#home"
          onClick={closeMenu}
          className="
            flex
            flex-col
            gap-[2px]
          "
        >
          <span
            className="
              text-lg
              font-bold
              leading-none

              text-black

              dark:text-white
            "
          >
            SHIVAM
          </span>

          <span
            className="
              text-xs
              font-medium
              leading-none
              tracking-[0.2em]

              text-black/80

              dark:text-white/80
            "
          >
            CHAUDHARY
          </span>
        </a>


        {/* DESKTOP NAV LINKS */}

        <div
          className="
            hidden
            items-center
            gap-8

            md:flex
          "
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="
              transition-colors
              duration-300

              hover:text-black/50
              dark:text-white
              dark:hover:text-white/50
            "
          >
            Home
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="
              transition-colors
              duration-300

              hover:text-black/50
              dark:text-white
              dark:hover:text-white/50
            "
          >
            About
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="
              transition-colors
              duration-300

              hover:text-black/50
              dark:text-white
              dark:hover:text-white/50
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="
              transition-colors
              duration-300

              hover:text-black/50
              dark:text-white
              dark:hover:text-white/50
            "
          >
            Contact
          </a>
        </div>


        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* Theme Button */}

          <ThemeBtn />


          {/* Resume */}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            border
            border-black/20
            px-4
            py-2
            text-sm

            transition-all
            duration-300

            hover:border-black
            hover:bg-black
            hover:text-white
            dark:text-white
            dark:border-white/25
            dark:hover:border-white
            dark:hover:bg-white
            dark:hover:text-black

            md:block
          "
        >
          RESUME ↗
        </a>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            className="
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-1.5
              border

              border-black/20

              transition-all
              duration-300

              hover:border-black

              dark:border-white/20
              dark:hover:border-white

              md:hidden
            "
          >

            {/* Top */}

            <span
              className={`
                h-px
                w-5

                bg-black

                transition-all
                duration-300

                dark:bg-white

                ${
                  menuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }
              `}
            />


            {/* Middle */}

            <span
              className={`
                h-px
                w-5

                bg-black

                transition-all
                duration-300

                dark:bg-white

                ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            />


            {/* Bottom */}

            <span
              className={`
                h-px
                w-5

                bg-black

                transition-all
                duration-300

                dark:bg-white

                ${
                  menuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }
              `}
            />

          </button>

        </div>

      </nav>


      {/* MOBILE OVERLAY */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-40

          bg-black/40
          backdrop-blur-sm

          transition-opacity
          duration-300

          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />


      {/* MOBILE SIDEBAR */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-50

          h-full
          w-[78%]
          max-w-sm

          border-l

          border-black/15

          bg-white
          p-8
          text-black

          shadow-2xl

          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]

          dark:border-white/15
          dark:bg-[#0d0d0d]
          dark:text-white

          md:hidden

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* SIDEBAR HEADER */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              font-display
              text-xl
              font-black
              tracking-wide
            "
          >
            MENU
          </span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              text-2xl

              text-black/60

              transition-colors
              duration-300

              hover:text-black

              dark:text-white/60
              dark:hover:text-white
            "
          >
            ×
          </button>
        </div>


        {/* SIDEBAR LINKS */}

        <div
          className="
            mt-12
            flex
            flex-col
          "
        >

          <a
            href="#home"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-5

              font-display
              text-2xl
              font-bold

              transition-all
              duration-300

              hover:translate-x-2

              dark:border-white/10
            "
          >
            HOME
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-5

              font-display
              text-2xl
              font-bold

              transition-all
              duration-300

              hover:translate-x-2

              dark:border-white/10
            "
          >
            ABOUT
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-5

              font-display
              text-2xl
              font-bold

              transition-all
              duration-300

              hover:translate-x-2

              dark:border-white/10
            "
          >
            PROJECTS
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-5

              font-display
              text-2xl
              font-bold

              transition-all
              duration-300

              hover:translate-x-2

              dark:border-white/10
            "
          >
            SKILLS
          </a>

          <a
            href="#journey"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-5

              font-display
              text-2xl
              font-bold

              transition-all
              duration-300

              hover:translate-x-2

              dark:border-white/10
            "
          >
            JOURNEY
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              border-b
              border-black/10
              py-5

              font-display
              text-2xl
              font-bold

              transition-all
              duration-300

              hover:translate-x-2

              dark:border-white/10
            "
          >
            CONTACT
          </a>

        </div>


        {/* SIDEBAR FOOTER */}

        <div className="mt-auto pt-10">

          <p
            className="
              text-xs
              tracking-[0.2em]

              text-black/40

              dark:text-white/40
            "
          >
            MAKE. BREAK. IMPROVE.
          </p>

        </div>

      </aside>
    </>
  );
}

export default Navbar;