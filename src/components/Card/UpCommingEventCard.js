import React from 'react'

const UpCommingEventCard = ({image}) => {
  return (
    <div className="col">
    <div class="card">
    <img src={image} class="card-img-top" alt="..."/>
    
    <div class="card-body">
      <h5 class="card-title">HSNC News Online</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
     
    </div>
  </div>
  </div>
  )
}

export default UpCommingEventCard