import React, { useEffect, useState } from 'react'

import Card from './Card.js'

export default function Hsection({
  travelData
}) {


  

    



  return (
    <>
      <section className="body-font overflow-hidden text-gray-600">
        <div className="pb-15  container mx-auto pt-24">
          <div className="my-8 divide-y-2 divide-gray-100">
            {travelData.map((travel, index) =>
          <Card
            title={travel.title}
            location={travel.location}
            googleMapsUrl={travel.googleMapsUrl}
            startDate={travel.startDate}
            endDate={travel.endDate}
            description={travel.description}
            imageUrl={travel.imageUrl}
            key={index}
          
          />)}
          </div>
        </div>
      </section>
    </>
  )
}
