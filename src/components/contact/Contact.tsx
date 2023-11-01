"use client";

import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";

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
  const handleSubmit = (values: any) => {
    // Handle form submission logic here
    alert("EMAIL ENVIADO");
  };

  return (
    <section
      id="contact"
      className="h-auto w-screen bg-gray-50 z-[1] flex justify-center items-center pt-10 pb-10"
    >
      <div className="h-[90%] w-[90%] flex justify-between flex-col items-center bg-zinc-800 rounded-2xl z-[5] pt-10">
        <div className="w-screen relative">
          <h2 className="text-gray-50 text-center z-50 responsive_title">
            CONTACT US
          </h2>
          <div className=" h-6 w-[90%] bg-zinc-600 shadow-gray-900 shadow-md z-[-1] absolute overflow-hidden top-[50%] rounded-l-full right-0"></div>
        </div>

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
                    className="block text-gray-50 text-sm font-bold mb-2"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`w-full border text-zinc-900 rounded-xl py-1 px-3 bg-gray-100`}
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-50 text-sm font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border text-zinc-900 rounded-xl py-1 px-3 bg-gray-100"
                  />
                </div>
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-gray-50 text-sm font-bold mb-2 "
                >
                  Email*
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full border text-zinc-900 rounded-xl py-1 px-3 bg-gray-100 ${
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
                  className="block text-gray-50 text-sm font-bold mb-2"
                >
                  Message*
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border rounded-xl text-zinc-900 py-1 px-3 bg-gray-100"
                />

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
                    <BsFillTelephoneFill className={"text-xl text-gray-50 "} />
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#D43300] hover:scale-[1.05] transition-all text-white font-bold w-1/2 py-2 px-4 rounded-xl z-[99999] hover:bg-orange-700"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>

        <Image
          src="https://burgerburger.s3.us-east-2.amazonaws.com/bb_logo_cut.png"
          height={800}
          width={800}
          alt={"Burger Burger logo cut in half."}
          className="translate-y-6 max-w-[300px]"
        ></Image>
      </div>
    </section>
  );
};

export default Contact;
