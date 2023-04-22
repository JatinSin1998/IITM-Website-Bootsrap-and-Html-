import React from "react";
import sectionImg from "../Image/section-img.png";
import Card from "./Card/CardSection";
const AcademicSection = () => {
  const style = { filter: "invert(100%)" };
  const buttonStyle = { backgroundColor: "#040303" };
  return (
    <section className="academic">
      <div class="py-5 text-center ">
        <h1 class="display-5 fw-bold text-white">ACADEMICS</h1>
        <div class="d-flex align-items-center justify-content-center">
          <img src={sectionImg} class="d-block w-10 " alt="..." style={style} />
        </div>
        <div class="d-flex justify-content-between px-5 py-5">
          <p className="academicParagraph text-white">
            Apply to more than 130 areas of study <br />
            across 13 school and college
          </p>
          <button
            type="button"
            style={buttonStyle}
            className="btn btn-outline- btn-lg px-4 btun text-white"
          >
            Apply Now
          </button>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 px-5 py-5">
          <Card title="UG COURSE" color="white" backgroundColor="#074a1f" />
          <Card title="PG COURSE" color="#c5c5c5" backgroundColor="#d1a411" />
          <Card title="RESEARCH" backgroundColor="#074a1f" />
          <Card title="SHORT COURSE" backgroundColor="#074a1f" />
        </div>
        
      </div>
      <div className="btun text-center pt-3 pb-2">
        <h4 class=" fw-bold text-dark">
          EXPLORE ALL PROGRAMS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </h4>
      </div>
     
    </section>
  );
};

export default AcademicSection;
