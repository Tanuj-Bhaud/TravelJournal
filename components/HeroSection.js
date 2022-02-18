import React from 'react'
import travelData from '../Data/travelData.js'
import Card from './Card.js'

export default function HeroSection() {
  return (
    <>
      <section className="body-font overflow-hidden text-gray-600">
       
     <div className="container mx-auto px-5 py-24">
            {travelData.map((travel) => {
              return (
                <Card
                  title={travel.title}
                  location={travel.location}
                  googleMapsUrl={travel.googleMapsUrl}
                  startDate={travel.startDate}
                  endDate={travel.endDate}
                  description={travel.description}
                  imageUrl={travel.imageUrl}
                />
              )
            })}
     </div>

      </section>
    </>
  )
}
