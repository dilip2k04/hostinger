import { useEffect, useState } from "react";
import "./OurProgram.css";
import Tab from "../AboutUs/components/Tab/Tab";
import Card from "./components/Card/Card";
import BroadCard from "./components/BroadCard/BroadCard";
import Testimonial from "./components/Testimonial/Testimonial";
import axios from "axios";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";

export default function OurProgram({ is_main_page }) {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log('fetching testimonials')
        const response = await axios.get("http://localhost:3000/get-feedbacks");
        setTestimonials(response.data.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  const subjectData = [
    { title: "English", img: "/imgs/sub2.png", link: "#contact_us" },
    { title: "Hindi", img: "/imgs/sub1.png", link: "#contact_us" },
    { title: "Mathematics", img: "/imgs/sub6.png", link: "#contact_us" },
    { title: "Science", img: "/imgs/sub5.png", link: "#contact_us" },
    { title: "Social Science", img: "/imgs/sub4.png", link: "#contact_us" },
    { title: "Computer Science", img: "/imgs/sub3.png", link: "#contact_us" },
  ];

  const teachingData = [
    {
      title: "Interactive Sessions",
      img: "/imgs/teaching1.png",
      content: "Interactive live classes using multimedia tools that promote active participation",
      is_right_pic: false,
    },
    {
      title: "Quizzes",
      img: "/imgs/teaching2.png",
      content: "Quizzes to encourage independent thought and self-directed learning",
      is_right_pic: true,
    },
    {
      title: "Regular Assessments",
      img: "/imgs/teaching5.png",
      content: "Regular assessments to monitor progress and identify areas for improvement",
      is_right_pic: false,
    },
    {
      title: "Personalized Attention",
      img: "/imgs/teaching4.png",
      content: "Personalized attention to meet the unique needs of each student",
      is_right_pic: true,
    },
  ];

  const renderProgramSection = () => (
    <div className="ourprogram" id="our_program_section">
      <h5 className="ourprogram_title"><i>Our Programs</i></h5>
      <div className="ourprogram_tab row g-0">
        <div className="col-12 col-md-7" id="ourprogram_img_Tab">
          <img className="ourprogram_img" src="/imgs/our program 1.jpg" alt="Our Programs" />
        </div>
        <div className="col-12 col-md-5 p-2 d-flex justify-content-center align-items-center flex-column">
          <h4 className="ourprogram_content">
            We offer one-on-one tutoring sessions tailored to each student's unique learning style and pace, ensuring effective understanding and retention of concepts.
          </h4>
          <Link className="ourprogram_button btn hover-border-primary" to="/contact-us">
            Book a Demo
          </Link>
          <hr />
        </div>
      </div>
      <Tab title="Grade Specific Online Tuition" is_title={true} />
      <div className="row g-0 mb-4 md-flex flex-row" id="Courses">
        {[3, 6].map((grade, idx) => (
          <div key={idx} className="col-12 col-md-6 p-2 mb-3 d-flex flex-column justify-content-center align-items-center">
            <h3 className="grade_title">Grade {grade} - {grade + 2}</h3>
            <div className="card text-bg-dark grade_card">
              <img src={`/imgs/gradec${idx + 1}.png`} className="card-img" alt={`Grade ${grade} - ${grade + 2}`} />
              <div className="card-img-overlay overlay-text">
                <p className="card-text p-3 pt-5 fs-5">
                  {grade === 3
                    ? "Strong focus on foundational skills in Mathematics, Science, and English. Activities that stimulate curiosity and independent problem-solving."
                    : "Advanced concepts in core subjects to prepare students for academic challenges. Comprehensive guidance to build critical thinking and analytical skills."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tab title="Subjects We Cover" is_title={true} />
      <div className="all_sub p-5 pt-0 row d-flex g-0 align-items-center justify-content-center">
        {subjectData.map((sub, idx) => (
          <div key={idx} className="col-6 col-md-4 d-flex justify-content-center align-items-center">
            <Card title={sub.title} img={sub.img} link={sub.link} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeachingMethodology = () => (
    <>
      <Tab title="Teaching Methodology" is_title={true} />
      <div className="teaching_container w-100 d-flex flex-column justify-content-center align-items-center" id="Teaching">
        {teachingData.map((d, idx) => (
          <BroadCard key={idx} title={d.title} content={d.content} img={d.img} is_right_pic={d.is_right_pic} />
        ))}
      </div>
    </>
  );

  const renderTestimonials = () => (
    <>
      <Tab title="Testimonials" is_title={true} />
      <div className="testimonial-container">
        <div className="testimonial-wrapper row g-2 d-flex flex-row">
          {testimonials.map((testimonial, idx) => (
            <div className="col-12 col-md-4 testimonial-item" key={idx}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  if (is_main_page) {
    return (
      <>
        {renderProgramSection()}
        <AboutUs is_main_page={is_main_page} />
        {renderTeachingMethodology()}
        {renderTestimonials()}
      </>
    );
  }

  return (
    <div className="ourprogram" id="our_program_section">
      {renderProgramSection()}
      {renderTeachingMethodology()}
      {renderTestimonials()}
    </div>
  );
}