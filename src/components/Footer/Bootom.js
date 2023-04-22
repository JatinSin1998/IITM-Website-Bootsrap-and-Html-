import React from "react";

const Bootom = () => {
  const Card = ({heading}) => {
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <h2> {heading}</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div class="d-flex py-5">
   
      <Card heading="18 INSTITUTES"/>
      <Card heading="150 RESEARCH"/>
      <Card heading="4K+ STUDENT"/>
    </div>
  );
};

export default Bootom;
