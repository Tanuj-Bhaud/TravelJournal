import React from "react";
import travelData from "../Data/travelData.js";
import Card from "./card.js";

export default function Hsection() {
  const travelDatalist = travelData.map(travel => {
    return <Card
    title={travel.title}
    location={travel.location}
    googleMapsUrl={travel.googleMapsUrl}
    startDate={travel.startDate}
    endDate={travel.endDate}
    description={travel.description}
    imageUrl={travel.imageUrl}

     />
})
  return (
      <><section className="text-gray-600 body-font overflow-hidden">
      <div className="container  py-24 mx-auto">
        <div className="my-8 divide-y-2 divide-gray-100">
          {travelDatalist}
        </div>
      </div>
    </section>
    </>
  )
}