import React from 'react'
import UpCommingEventCard from '../Card/UpCommingEventCard'
import Event1 from '../../Image/event-sm-1.jpg'
import Event2 from '../../Image/event-sm-2.jpg'
import Event3 from '../../Image/event-sm-3.jpg'
import Event4 from '../../Image/event-sm-4.jpg'

const UpCommintEvent = () => {
  return (
    <section>
        <div class=" ">
        <h1 class="display-5 fw-bold text-dark text-center">UP COMMING EVENTS</h1>
        <div class=" row row-cols-1 row-cols-md-4 g-4 px-5 py-5">
             <UpCommingEventCard image={Event1}/>
             <UpCommingEventCard image={Event2}/>
             <UpCommingEventCard image={Event3}/>
             <UpCommingEventCard image={Event4}/>
        </div>
        <div class='text-center'>
           <button class="btn btn-lg btn-warning">MORE HSNC EVENTS <svg
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
        </div>
    </section>
  )
}

export default UpCommintEvent