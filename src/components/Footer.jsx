import React from "react";
import {
  FiCode,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const socialLinks = {
  github: "https://github.com/shivamchaudhary19",
  linkedin: "https://www.linkedin.com/in/shivam-chaudhary-0101843ab/",
  instagram: "#",
  email: "mailto:im.chaudharyshiva2919@gmail.com",
};

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      id = "footer"
      className="
        relative
        border-t
        border-black/15
        bg-white
        px-6
        py-12
        text-black

        sm:px-10
        lg:px-16
        lg:py-14

        dark:border-white/15
        dark:bg-black
        dark:text-white
      "
    >
      <div className="mx-auto max-w-[1400px]">

        {/* MAIN FOOTER */}

        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2

            lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr]
            lg:gap-0
          "
        >

          {/* BRAND */}

          <div
            className="
              lg:pr-12
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <FiCode
                className="
                  h-7
                  w-7
                  text-black/80

                  dark:text-white/80
                "
              />

              <h2
                className="
                  font-display
                  text-2xl
                  font-bold
                  tracking-wide
                "
              >
                Shivam Chaudhary
              </h2>
            </div>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-black/55

                dark:text-white/55
              "
            >
              Building digital experiences with passion and purpose.
            </p>
          </div>


          {/* QUICK LINKS */}

          <div
            className="
              border-black/15
              sm:border-l
              sm:pl-8

              dark:border-white/15
            "
          >
            <h3
              className="
                font-display
                text-sm
                font-bold
                tracking-[0.15em]
              "
            >
              QUICK LINKS
            </h3>

            <nav className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="
                    block
                    text-sm
                    text-black/55
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-black

                    dark:text-white/55
                    dark:hover:text-white
                  "
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>


          {/* CONNECT */}

          <div
            className="
              border-black/15
              sm:border-l
              sm:pl-8

              dark:border-white/15
            "
          >
            <h3
              className="
                font-display
                text-sm
                font-bold
                tracking-[0.15em]
              "
            >
              CONNECT
            </h3>

            <div
              className="
                mt-5
                flex
                items-center
                gap-4
              "
            >

              {/* GitHub */}

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-black/20

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-black/60

                  dark:border-white/20
                  dark:hover:border-white/60
                "
              >
                <FiGithub className="h-5 w-5" />
              </a>


              {/* LinkedIn */}

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-black/20

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-black/60

                  dark:border-white/20
                  dark:hover:border-white/60
                "
              >
                <FiLinkedin className="h-5 w-5" />
              </a>


              {/* Instagram */}

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-black/20

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-black/60

                  dark:border-white/20
                  dark:hover:border-white/60
                "
              >
                <FiInstagram className="h-5 w-5" />
              </a>


              {/* Email */}

              <a
                href={socialLinks.email}
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-black/20

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-black/60

                  dark:border-white/20
                  dark:hover:border-white/60
                "
              >
                <FiMail className="h-5 w-5" />
              </a>

            </div>
          </div>


          {/* LET'S TALK */}

          <div
            className="
              border-black/15
              sm:border-l
              sm:pl-8

              dark:border-white/15
            "
          >
            <h3
              className="
                font-display
                text-sm
                font-bold
                tracking-[0.15em]
              "
            >
              LET'S TALK
            </h3>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-black/55

                dark:text-white/55
              "
            >
              Have a project in mind?
              <br />
              Let's build something great together.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                group
                mt-5
                flex
                items-center
                gap-3
                text-sm
                font-bold
                transition-colors
                duration-300
                hover:text-black/60

                dark:hover:text-white/60
              "
            >
              <span
                className="
                  border-b
                  border-black
                  pb-1

                  dark:border-white
                "
              >
                GET IN TOUCH
              </span>

              <FiArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

        </div>


        {/* BOTTOM BAR */}

        <div
          className="
            mt-10
            border-t
            border-black/15
            pt-5

            dark:border-white/15
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              text-xs
              text-black/45

              sm:flex-row
              sm:items-center
              sm:justify-between

              dark:text-white/45
            "
          >

            <span>
              © {new Date().getFullYear()} Shivam Chaudhary. All rights reserved.
            </span>

            <span>
              Made with <span className="text-black dark:text-white">♥</span>{" "}
              and lots of coffee ☕
            </span>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;