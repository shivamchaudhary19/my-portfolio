import React, { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";

import { functions } from "../lib/appwrite";


// SOCIAL LINKS //

const CONTACT_EMAIL = "im.chaudharyshiva2919@gmail.com";

const SOCIAL_LINKS = {
  github: "https://github.com/shivamchaudhary19/",
  linkedin: "https://www.linkedin.com/in/shivam-chaudhary-0101843ab/",
};


function Contact() {

  // FORM STATE //

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  // HANDLE INPUT //

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SUBMIT FORM //

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await functions.createExecution({
        functionId: import.meta.env.VITE_APPWRITE_FUNCTION_ID,

        method: "POST",

        path: "/",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

        async: false,
      });

      if (response.responseStatusCode >= 200 && response.responseStatusCode < 300) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }

    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };


  return (
    <section
      id="contact"
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

      {/* MAIN CONTAINER */}

      <div className="mx-auto max-w-[1400px]">


        {/* HEADER */}

        <div
          className="
            mb-16
            flex
            flex-col
            gap-12

            lg:grid
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >


          {/* SIDE */}

          <div className="relative">

            {/* Section number */}

            <span
              className="
                pointer-events-none
                absolute
                -right-5
                -top-14
                select-none
                font-display
                text-[9rem]
                leading-none
                text-black/[0.035]

                sm:text-[12rem]

                dark:text-white/[0.035]
              "
            >
              06
            </span>


            {/* Small label */}

            <div
              className="
                mb-8
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
              />

              <span>
                CONTACT
              </span>
            </div>


            {/* Main heading */}

            <h2
              className="
                relative
                z-10
                max-w-2xl
                font-display
                text-[clamp(4rem,7vw,7rem)]
                font-black
                uppercase
                leading-[0.84]
                tracking-tight
              "
            >
              LET'S BUILD
              <br />

              <span
                className="
                  text-transparent
                  [-webkit-text-stroke:1px_rgba(0,0,0,0.35)]

                  dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.35)]
                "
              >
                SOMETHING.
              </span>
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
              Have a project in mind or just want to say hello?
              I'd love to hear from you.
            </p>


            { /* CONTACT LINKS */ }

            <div className="mt-10">


              {/* EMAIL */}

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border-b
                  border-black/15
                  py-4

                  dark:border-white/15
                "
              >

                <span
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-black/20

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:border-black/60

                    dark:border-white/20
                    dark:group-hover:border-white/60
                  "
                >
                  <FiMail className="h-5 w-5" />
                </span>


                <div className="min-w-0">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-black/50

                      dark:text-white/50
                    "
                  >
                    EMAIL
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-sm
                      sm:text-base
                    "
                  >
                    {CONTACT_EMAIL}
                  </p>

                </div>


                <FiArrowUpRight
                  className="
                    ml-auto
                    h-5
                    w-5
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />

              </a>


              {/* GITHUB */}

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border-b
                  border-black/15
                  py-4

                  dark:border-white/15
                "
              >

                <span
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-black/20

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:border-black/60

                    dark:border-white/20
                    dark:group-hover:border-white/60
                  "
                >
                  <FiGithub className="h-5 w-5" />
                </span>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-black/50

                      dark:text-white/50
                    "
                  >
                    GITHUB
                  </p>

                  <p className="mt-1 text-sm sm:text-base">
                    github.com/YOUR_USERNAME
                  </p>

                </div>


                <FiArrowUpRight
                  className="
                    ml-auto
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />

              </a>


              {/* LINKEDIN */}

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border-b
                  border-black/15
                  py-4

                  dark:border-white/15
                "
              >

                <span
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-black/20

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:border-black/60

                    dark:border-white/20
                    dark:group-hover:border-white/60
                  "
                >
                  <FiLinkedin className="h-5 w-5" />
                </span>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-black/50

                      dark:text-white/50
                    "
                  >
                    LINKEDIN
                  </p>

                  <p className="mt-1 text-sm sm:text-base">
                    linkedin.com/in/YOUR_USERNAME
                  </p>

                </div>


                <FiArrowUpRight
                  className="
                    ml-auto
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />

              </a>

            </div>

          </div>


          {/* RIGHT SIDE  */}

          <div>

            <form
              onSubmit={handleSubmit}
              className="
                relative
                border
                border-black/20
                p-6

                sm:p-8

                dark:border-white/20
              "
            >

              {/* Decorative corner */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-3
                  h-8
                  w-8
                  border-r
                  border-t
                  border-black/60

                  dark:border-white/60
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-3
                  -left-3
                  h-8
                  w-8
                  border-b
                  border-l
                  border-black/60

                  dark:border-white/60
                "
              />


              {/* NAME */}

              <FormField
                label="YOUR NAME"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />


              {/* EMAIL */}

              <FormField
                label="YOUR EMAIL"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />


              {/* MESSAGE */}

              <div className="mt-8">

                <label
                  htmlFor="message"
                  className="
                    mb-3
                    block
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-black/60

                    dark:text-white/60
                  "
                >
                  YOUR MESSAGE
                </label>


                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    resize-none
                    border
                    border-black/20
                    bg-transparent
                    px-5
                    py-4
                    text-sm
                    text-black
                    outline-none

                    transition-colors
                    duration-300

                    placeholder:text-black/30

                    focus:border-black/60

                    dark:border-white/20
                    dark:text-white
                    dark:placeholder:text-white/30
                    dark:focus:border-white/60
                  "
                />

              </div>


              {/* STATUS */}

              {status === "success" && (
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    border
                    border-black/15
                    px-4
                    py-3
                    text-sm

                    dark:border-white/15
                  "
                >
                  <FiCheck className="h-5 w-5" />

                  <span>
                    Message sent successfully.
                  </span>
                </div>
              )}


              {status === "error" && (
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    border
                    border-black/15
                    px-4
                    py-3
                    text-sm

                    dark:border-white/15
                  "
                >
                  <FiAlertCircle className="h-5 w-5" />

                  <span>
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  group
                  relative
                  mt-6
                  flex
                  h-16
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  border
                  border-black
                  bg-black
                  px-6
                  text-sm
                  font-bold
                  tracking-[0.18em]
                  text-white

                  transition-all
                  duration-300

                  hover:bg-transparent
                  hover:text-black

                  disabled:cursor-not-allowed
                  disabled:opacity-50

                  dark:border-white
                  dark:bg-white
                  dark:text-black

                  dark:hover:bg-transparent
                  dark:hover:text-white
                "
              >

                {/* Normal text */}

                <span
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      gap-3
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.76,0,0.24,1)]
                      group-hover:-translate-y-full
                    "
                  >
                    SEND MESSAGE
                    <FiSend className="h-4 w-4" />
                  </span>

                  <span
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      gap-3
                      translate-y-full
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.76,0,0.24,1)]
                      group-hover:translate-y-0
                    "
                  >
                    LET'S GO
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}


/* FORM FIELD */

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <div className="mb-8">

      <label
        htmlFor={name}
        className="
          mb-3
          block
          text-[10px]
          font-bold
          tracking-[0.2em]
          text-black/60

          dark:text-white/60
        "
      >
        {label}
      </label>


      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          border
          border-black/20
          bg-transparent
          px-5
          py-4
          text-sm
          text-black
          outline-none

          transition-colors
          duration-300

          placeholder:text-black/30

          focus:border-black/60

          dark:border-white/20
          dark:text-white
          dark:placeholder:text-white/30
          dark:focus:border-white/60
        "
      />

    </div>
  );
}


export default Contact;