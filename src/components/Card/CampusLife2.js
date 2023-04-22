import React from "react";
import image3 from "../../Image/life-bg1.jpg";
import image4 from "../../Image/life-xsm.jpg";

const CampusLife2 = () => {
  const backgroundStyle = { backgroundColor: "#c5c5c5" };
  const paragarphColor = { color: "#d1a411" };
  const Card = () => {
    return (
      <div class="card-group">
        <div class="card">
          <img src={image4} class="card-img-top" alt="..." />
        </div>
        <div class="card" style={backgroundStyle}>
          <div class="card-body text-start">
            <h5 class="card-title">ARTS & CULTURE</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.Lorem ipsum dolor sit amet
            </p>
            <p style={paragarphColor}>
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div class=" w-50">
        <div class="card ">
          <div class="bg-image w-100 container-fluid">
            <img src={image3} alt="images" />
            <div class="position-absolute bottom-0 text-light w-100">
              <h3> STUDENT LIFE</h3>
              <p class="p-2 m-0 ">
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              </p>
              <p style={paragarphColor}>
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </p>
            </div>
          </div>
        </div>

        <Card />
      </div>
    </>
  );
};

export default CampusLife2;
