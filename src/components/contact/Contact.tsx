"use client";

import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { Blinker } from "next/font/google";
import * as Yup from "yup";
import Image from "next/image";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const handleSubmit = (values: any) => {
    // Handle form submission logic here
    sendEmail(values);
  };

  const sendEmail = async (values: any) => {
    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        setEmailSent(true);
      } else {
        setEmailSent(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="h-auto w-screen bg-gray-50 z-[1] flex justify-center items-center pt-10 "
    >
      <div className="h-[90%] w-[90%] flex justify-between flex-col items-center bg-[#322E2E] rounded-2xl z-[5] py-10">
        <div className="w-screen relative">
          <h2 className="text-gray-50 text-center z-50 responsive_subtitle font-semibold bg-zinc-600 shadow-[0_10px_10px_-10px_rgba(0,0,0,.7)]">
            CONTACT US
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center h-auto lg:h-[600px] gap-0 lg:gap-10 relative">
          {!emailSent ? (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="max-w-md mx-auto p-10 flex flex-col gap-8 justify-center items-end">
                  <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                      <label
                        htmlFor="firstName"
                        className="block text-gray-50 text-md font-normal mb-2"
                      >
                        <span className={blinker.className}> First Name</span>
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`${blinker.className} w-full border text-zinc-900 rounded-xl py-1 px-3 bg-gray-100`}
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label
                        htmlFor="lastName"
                        className="block text-gray-50 text-md font-normal mb-2"
                      >
                        <span className={blinker.className}> Last Name</span>
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`${blinker.className} w-full border text-zinc-900 rounded-xl py-1 px-3 bg-gray-100`}
                      />
                    </div>
                  </div>
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="email"
                      className="block text-gray-50 text-mdm font-normal mb-2 "
                    >
                      <span className={blinker.className}>
                        Email* (Required)
                      </span>
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`${
                        blinker.className
                      } w-full border text-zinc-900 rounded-xl py-1 px-3 bg-gray-100 ${
                        errors.email && touched.email
                          ? "border-red-500" // Apply red border for validation error
                          : ""
                      }`}
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="message"
                      className="block text-gray-50 text-md font-normal mb-2"
                    >
                      <span className={blinker.className}>
                        {" "}
                        Message* (Required)
                      </span>
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="4"
                      className={`${
                        blinker.className
                      } w-full border rounded-xl text-zinc-900 py-1 px-3 bg-gray-100 ${
                        errors.message && touched.message
                          ? "border-red-500" // Apply red border for validation error
                          : ""
                      }`}
                    />

                    {errors.message && touched.message && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </div>
                    )}
                    <div className="flex justify-start items-center mb-2 mt-2 gap-6 w-full">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/itsburgerburger/"
                      >
                        <AiFillInstagram className={"text-2xl text-gray-50 "} />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/itsburgerburger/"
                      >
                        <FaFacebookSquare className={"text-xl text-gray-50 "} />
                      </a>
                      <a target="_blank" href="tel:+12266638955">
                        <BsFillTelephoneFill
                          className={"text-xl text-gray-50 "}
                        />
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#D43300] hover:scale-[1.02] active:scale-95 transition-all text-white font-normal w-1/2 py-2 px-4 rounded-xl z-[99999] hover:bg-orange-600"
                  >
                    <span className={blinker.className}>SEND</span>
                  </button>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="flex flex-col justify-center items-center ">
              <h4 className="responsive_subtitle pt-20 lg:pt-0 pb-3 ">
                Thank you for the message!
              </h4>

              <h4 className={`${blinker.className} responsive_subtitle_small`}>
                We will get back to you soon 🍔
              </h4>
            </div>
          )}

          <Image
            src="https://burgerburger.s3.us-east-2.amazonaws.com/bb_full_logo.png"
            height={800}
            width={800}
            alt={"Burger Burger logo cut in half."}
            className="translate-y-[0] lg:-translate-y-10 max-w-[280px] hidden lg:flex"
          ></Image>
          <Image
            src="https://burgerburger.s3.us-east-2.amazonaws.com/bb_logo_cut.png"
            height={800}
            width={800}
            alt={"Burger Burger logo cut in half."}
            className="translate-y-[20%] lg:-translate-y-10 max-w-[280px] flex lg:hidden"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Contact;
