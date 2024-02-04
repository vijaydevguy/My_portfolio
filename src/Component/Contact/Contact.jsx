// import React, { useEffect, useState } from "react";
import {useState } from "react";

import "./Contact.scss";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import Confetti from "react-confetti";

let contact = {
  hide: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", staggerChildren: 0.1 },
  },
};
let form = {
  hide: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", staggerChildren: 0.1 },
  },
};

let popUp_open = {
  hide: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" },
  },
};

const Contact = () => {
  //Confetti Pieces :
  const [pieces, setPieces] = useState(250);

  //Confetti iniital false:
  let [confetti, setConfetti] = useState(false);

  //Collect form data store in one state :
  let [formData, setFormData] = useState({ name: "", email: "", project: "" });

  //Popup show :
  let [popup, setPopup] = useState(false);

  //Form Submit loader :

  let [loading, setLoading] = useState(false);

  //Confetti function :
  const StopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 7000);
  };

  //Form Logic :
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      project: "",
    },

    //Validation :
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 character or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      project: Yup.string()
        .max(100, "Name must be 100 character or less")
        .required("Project is required"),
    }),
    //Form Submit :
    onSubmit: (values) => {
      setFormData({
        name: values.name,
        email: values.email,
        project: values.project,
      });
      setLoading(!loading);

      setTimeout(() => {
        setPopup(!popup);
        setLoading(false);
        setConfetti(!confetti);
      }, 4000);

      StopConfetti();
      formik.values.name = "";
      formik.values.email = "";
      formik.values.project = "";
    },
  });

  // console.log(formik.errors);

  return (
    <>
      <motion.div
        className="contact_container"
        id="contact"
        onClick={() => setPopup(false)}
      >
        <motion.div
          className="contact_title"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", duration: 1 },
          }}
        >
          <h2>Contact Me</h2>
          <small>Get in touch</small>
        </motion.div>

        <motion.div className="contact_sections">
          <motion.div
            className="left"
            variants={contact}
            initial="hide"
            whileInView="show"
          >
            <motion.h4 variants={contact}>Talk to me</motion.h4>

            <motion.div className="box" variants={contact}>
              <i className="uil uil-fast-mail" style={{ color: "red" }}></i>
              <h5>Email</h5>
              <small>0105vijay02@gmail.com</small>

              <motion.a href="mailto:0105vijay02@gmail.com">
                <motion.p>
                  Write me{" "}
                  <motion.i
                    initial={{ x: 0, opacity: 0, transition: { duration: 1 } }}
                    animate={{
                      x: 10,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        repeat: Infinity,
                        duration: 2,
                      },
                    }}
                    class="uil uil-arrow-right"
                    i
                  ></motion.i>
                </motion.p>
              </motion.a>
            </motion.div>
            <motion.div className="box" variants={contact}>
              <i className="uil uil-whatsapp" style={{ color: "green" }}></i>
              <h5>Whatsapp</h5>
              <small>+91 8248640264</small>

              <motion.a href="https://api.whatsapp.com/send?phone=+91 8248640264&text=Hi, Hello">
                <motion.p>
                  Write me{" "}
                  <motion.i
                    initial={{ x: 0, opacity: 0, transition: { duration: 1 } }}
                    animate={{
                      x: 10,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        repeat: Infinity,
                        duration: 2,
                      },
                    }}
                    class="uil uil-arrow-right"
                    i
                  ></motion.i>
                </motion.p>
              </motion.a>
            </motion.div>
            <motion.div className="box" variants={contact}>
              <i className="uil uil-linkedin" style={{ color: "rgba(51, 118, 250, 1)"}}></i>
              <h5>LinkedIn</h5>
              <small>VIJAYA KUMAR</small>

              <motion.a href="https://www.linkedin.com/in/s-vijaykumar/">
                <motion.p>
                  Write me{" "}
                  <motion.i
                    initial={{ x: 0, opacity: 0, transition: { duration: 1 } }}
                    animate={{
                      x: 10,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        repeat: Infinity,
                        duration: 2,
                      },
                    }}
                    class="uil uil-arrow-right"
                    i
                  ></motion.i>
                </motion.p>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="right"
            variants={form}
            initial="hide"
            whileInView="show"
          >
            <motion.h4 variants={form}>Write me Your project</motion.h4>

            <motion.form onSubmit={formik.handleSubmit} variants={form}>
              <motion.div className="form_group" variants={form}>
                <label
                  htmlFor="name"
                  className={`${formik.errors.name ? "error" : ""} `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </motion.div>
              <motion.div className="form_group" variants={form}>
                <label
                  htmlFor="email"
                  className={`${formik.errors.email ? "error" : ""} `}
                >
                  {" "}
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  onBlur={formik.handleBlur}
                />
              </motion.div>
              <motion.div className="form_group" variants={form}>
                <label
                  htmlFor="project"
                  className={`${formik.errors.project ? "error" : ""} `}
                >
                  {" "}
                  {formik.touched.project && formik.errors.project
                    ? formik.errors.project
                    : "Project"}
                </label>
                <textarea
                  value={formik.values.project}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="project"
                  id="project"
                  cols="30"
                  rows="10"
                ></textarea>
              </motion.div>

              <motion.div className="submit" variants={form}>
                <motion.button className="submit" type="submit">
                  {!loading ? "Send Message" : "Sending...."}
                  {!loading ? (
                    <motion.img
                      initial={{
                        y: 0,

                        transition: { duration: 2 },
                      }}
                      animate={{
                        y: -10,

                        transition: { duration: 3, repeat: Infinity },
                      }}
                      width="45"
                      height="45"
                      src="https://img.icons8.com/color/48/launched-rocket--v1.png"
                      alt="launched-rocket--v1"
                    />
                  ) : (
                    <motion.img
                      initial={{
                        rotate: 0,
                        transition: { duration: 0 },
                      }}
                      animate={{
                        rotate: 360,
                        transition: { duration: 2, repeat: Infinity },
                      }}
                      width="40"
                      height="40"
                      src="https://img.icons8.com/fluency/48/000000/loading-sign.png"
                      alt="loading-sign"
                    />
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>

        <motion.div className="popup_container">
          {popup ? (
            <motion.div
              className="popup"
              variants={popUp_open}
              initial="hide"
              animate="show"
            >
              <motion.i
                onClick={() => setPopup(false)}
                class="uil uil-times"
              ></motion.i>
              <h4>Thanks for your responce!</h4>
              <small>{formData.name}</small>
              <p>Your email successfully received </p>
              <small>{formData.email}</small>
              <small>I will let you know soon...</small>
            </motion.div>
          ) : (
            ""
          )}
        </motion.div>

        {confetti ? (
          <Confetti
            gravity={0.2}
            numberOfPieces={pieces}
            className="confetti"
          />
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
};

export default Contact;
