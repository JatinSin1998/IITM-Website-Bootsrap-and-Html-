import React from 'react'
import sectionImg from "../Image/section-img.png";
import CampusLife1 from './Card/CampusLife1';

const CampusLifeSection = () => {
   
  return (
    <section>
    
    <div class="py-1 text-center ">
        <h1 class="display-5 fw-bold text-dark">CAMPUS LIFE</h1>
        <div class="d-flex align-items-center justify-content-center">
          <img src={sectionImg} class="d-block w-10 " alt="..."  />
        </div>
        {/* Card Component */}
        
         <CampusLife1 />
         
        

         </div>
         <div class='text-center'>
           <button class="btn btn-lg btn-warning">VIEW MORE <svg
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
          </svg></button>
          </div>
        
         </section>
  )
}

export default CampusLifeSection