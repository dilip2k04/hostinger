import React from "react";
import "./Contact.css";
import Input from "./components/Input/Input";
import Tab from "../AboutUs/components/Tab/Tab";
import Accordion from "./components/Accordion/Accordion";

export default function Contact() {
  const accordion_data = [
    {
      question: "What Makes IQ Bridge different ?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur ducimus molestias, veritatis perferendis obcaecati molestiae dolore dolor eveniet architecto dolorum hic voluptas quae voluptates at, et adipisci accusantium fugit?",
    },
    {
      question: "How can parent monitor progress ?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur ducimus molestias, veritatis perferendis obcaecati molestiae dolore dolor eveniet architecto dolorum hic voluptas quae voluptates at, et adipisci accusantium fugit?",
    },
    {
      question: "Is there flexibility in scheduling classes? ",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur ducimus molestias, veritatis perferendis obcaecati molestiae dolore dolor eveniet architecto dolorum hic voluptas quae voluptates at, et adipisci accusantium fugit?",
    },
    {
      question: "How are your classes conducted",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur ducimus molestias, veritatis perferendis obcaecati molestiae dolore dolor eveniet architecto dolorum hic voluptas quae voluptates at, et adipisci accusantium fugit?",
    },
    {
      question: "What are the qualifications of your tutors ?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur ducimus molestias, veritatis perferendis obcaecati molestiae dolore dolor eveniet architecto dolorum hic voluptas quae voluptates at, et adipisci accusantium fugit?",
    },
    {
      question: "Is there a trial class ?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur ducimus molestias, veritatis perferendis obcaecati molestiae dolore dolor eveniet architecto dolorum hic voluptas quae voluptates at, et adipisci accusantium fugit?",
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
