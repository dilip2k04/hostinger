import React from "react";
import "./Contact.css";
import Input from "./components/Input/Input";
import Tab from "../AboutUs/components/Tab/Tab";
import Accordion from "./components/Accordion/Accordion";

export default function Contact() {
  const accordion_data = [
    {
      question: "What makes IQ Bridge different ?",
      answer:
        " Ans . Our institution’s elite foundation by IIT-IIM alumni, coupled with expert CBSE-certified tutors, ensures a premium learning experience. We emphasize independent thinking and bridging learning gaps, making education transformative.",
    },
    {
      question: "How are your classes conducted ?",
      answer:
        " Ans . Our online sessions use state-of-the-art technology to deliver interactive, live lessons that engage students and promote active learning.",
    },
    {
      question: "How can parents monitor progress ? ",
      answer:
        " Ans . We provide detailed progress reports, conduct regular assessments, and offer parent-teacher meetings to keep you informed about your child’s performance.",
    },
    {
      question: "What are the qualifications of your tutors ?",
      answer:
        " Ans . Our tutors are experienced educators with expertise in the CBSE curriculum and a passion for teaching",
    },
    {
      question: "Is there flexibility in scheduling classes ?",
      answer:
        "Ans . Yes, we offer flexible class timings to accommodate the diverse schedules of families across the GCC region.",
    },
    {
      question: "Is there a trial class ?",
      answer:
        " Ans . Yes, we offer a free demo class to help you experience our teaching methods and see how we can make a difference in your child’s education.",
    },
  ];

  return (
    <div className="contact_container">
      <h5 className="contact_title mb-5">
        <i>Contact Us</i>
      </h5>
      <div className="form_tab row g-0">
        <div className="col-5 d-none d-md-block d-lg-block d-xl-block">
          <img
            src="/imgs/form.png"
            style={{ height: "60%", width: "100%", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="col-md-7 col-12 d-flex flex-column">
          <form>
            <Input label={"Your Name"} />
            <Input label={"Contact Number"} />
            <Input label={"Email"} />
            <Input label={"Child Grade"} />
            <Input label={"Prefered Subject"} />
            <div className="d-flex justify-content-center align-items-center">
              <button className="form_button">Book A Demo</button>
            </div>
          </form>
        </div>
      </div>
      <div className="faq_section">
        <Tab title="Frequently asked Questions (FAQ)" is_title={true} />
        <div className="accordions_tab d-flex  row g-0">
          {accordion_data.map((acc, idx) => {
            return (
              <div className="col-md-6">
                <Accordion
                question={acc.question}
                answer={acc.answer}
                key={idx}
                id={idx}
              />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
