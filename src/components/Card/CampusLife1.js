import React from "react";
import image1 from "../../Image/life-md1.jpg";
import image2 from "../../Image/life-md2.jpg";
import CampusLife2 from "./CampusLife2";

const CampusLife1 = () => {
  const background = { backgroundColor: "#c5c5c5" };
  const paragarphColor = { color: "#d1a411" };
  const Card = ({image}) => {
    return (
   
        <div class="card px-2">
        <img src={image} class="card-img-top" alt="..." />
        </div>
   
    );
  };
  return (
    <>
      <div class="px-5 py-5 d-flex">
        <div class="card w-50">
          <div class="card-body" style={background}>
            <h5 class="card-title text-start">Studen Life</h5>
            <p class="card-text text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p style={paragarphColor} class="card-text text-start">
              Learn More
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
          <div class="card-group py-4">
         <Card image={image1}/>
         <Card image = {image2}/>
      </div>
        </div>
        <CampusLife2/>
      </div>
     
    </>
  );
};

export default CampusLife1;
