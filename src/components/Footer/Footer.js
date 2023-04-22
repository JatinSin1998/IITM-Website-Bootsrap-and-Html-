import React from "react";
import images from "../../Image/Banner-logo.png";

const Footer = () => {
  const paragarphColor = { color: "#074a1f" };
  return (
    <div class="container my-5">
      <hr class="my-3" />
      <footer class="text-center text-lg-start text-dark">
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">WEBSITE</h6>
                <p>Accessibility</p>
                <p>Digital Accessibility </p>
                <p>Site Map</p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  GET IN TOUCH
                </h6>
                <p> Contact HSNCV</p>
                <p>Maps & Direction</p>
                <p>Jobs</p>
                <p>Social Media</p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  SECURITY & BRAND
                </h6>
                <p>Privacy Statement</p>
                <p>Report Copy Infringement</p>
                <p>Terms & Condition</p>
                <p>Report Security Issue</p>
                <p>Trade Mark Notice</p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">QUICK LINK</h6>
                <p> Student Grievances</p>
                <p> Libary Catalogue</p>
                <p>HSNC Apps</p>
                <p>Circulars</p>
                <p>Annoucement</p>
                <p>A-z Index</p>
                <p>Campus Map</p>
                <p>Subscribe to our Newsletter</p>
              </div>
            </div>
          </section>

          <section class="p-3 pt-0 academic text-white " >
            <div class="row d-flex align-items-center" >
              <div class="d-flex flex-wrap  align-items-center  ">
                <div class="col-md-4 d-flex align-items-center flex-wrap  ">
                  <img src={images} alt="images" />
                </div>
                <span >
                  <h6 class="text-white col-md-4">ADDRESS</h6>
                  <p class="col-md-4 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  
                </span>
                <ul class="nav text-white  flex-wrap" style={{display: "flex", flexDirection: "row"}}>
                    <li class="ms-1">HOME | </li>
                    <li class="ms-1"> MAPS & DIRECTIONS | </li>
                    <li class="ms-1">MORE INFO | </li>
                    <li class="ms-1">COPYRIGHT</li>
                  </ul>
              </div>
              
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
