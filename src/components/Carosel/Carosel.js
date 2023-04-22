import React from 'react'
import './Carosel.css'
import banner from './Banner-logo.png'
import heading from './Atcovation-logo.png'

const Carosel = () => {
  return (
    <div>
    
<div id="carouselExampleCaptions " class="carousel slide vertical w-50 carosel"   data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active ">
      <img src={banner} class="d-block w-100  small-image "  alt="..."/>
     <br/>
     <br/>
     <br/>
     <br/>
      <img src={heading} class="d-block w-100 small-image-i" alt="..."/>
      <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     
      <div class="carousel-caption ">
      
        <p class = "text-left " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
      </div>
    
    </div>
    <div class="carousel-item">
    <img src={banner} class="d-block w-100  small-image "  alt="..."/>
     <br/>
     <br/>
     <br/>
     <br/>
      <img src={heading} class="d-block w-100 small-image-i" alt="..."/>
      <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     
      <div class="carousel-caption ">
      
        <p class = "text-left " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={banner} class="d-block w-100  small-image "  alt="..."/>
     <br/>
     <br/>
     <br/>
     <br/>
      <img src={heading} class="d-block w-100 small-image-i" alt="..."/>
      <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     
      <div class="carousel-caption ">
      
        <p class = "text-left " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
      </div>
    </div>
  </div>

</div>
</div>
  )
}

export default Carosel