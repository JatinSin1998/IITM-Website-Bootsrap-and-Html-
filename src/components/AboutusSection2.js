import React from "react";
import sectionImg from "../Image/section-img.png";

const Section2 = () => {
  return (
    <section>
    <div class="py-5 text-center">
      <h1 class="display-5 fw-bold ">ABOUT US</h1>
      <div class="d-flex align-items-center justify-content-center">
        <img src={sectionImg} class="d-block w-10 " alt="..." />
      </div>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4 py-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean
          nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui
          purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris
          eget neque at sem venenatis eleifend. Ut nonummy.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline- btn-lg px-4 btun">
            Read More
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Section2;
