import React from 'react'
import travelData from '../Data/travelData.js'
import Card from './card.js'

export default function Hsection() {
  const travelDatalist = travelData.map((travel) => {
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
  })
  return (
    <>
      <section className="body-font overflow-hidden text-gray-600">
        <div className="container  mx-auto py-24">
          <div className="my-8 divide-y-2 divide-gray-100">
            {travelDatalist}
            {/* a
          a
          a
          a
          a
          a
          a
          a
          a
          a
          a
          a
          Aaa
          a
          /*/}
            {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            
              <img width="200px" height="100px" className="rounded-md" src="https://media.nationalgeographic.org/assets/photos/000/282/28286.jpg" />
          
            </div>
            <div className="md:flex-grow ml-10 mt-6">
              <div className="flex flex-row text-black">
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="#1e40af" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"/></g></svg> <span className="font-bold mr-1">Japan</span><span className="underline text-gray-700"><a target="_blank" href="https://www.google.com/maps/d/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525600000001%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed">View on Google Maps</a>
              </span></div>
              <h2 className="text-2xl font-bold text-gray-800 title-font mb-2">
               Mount Fuji
              </h2>

              <span className="font-bold text-black">12 Jan 2021 - 25 Jan 2021</span>
              <p className="leading-relaxed text-gray-800">
              Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.
              </p>
          
            </div>
          </div> */}
            {/* a
          a
          a
          a
          a
          a
          a
          a
          a
          a
          a
          a
          Aaa
          a
          /*/}
            {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel vexillologist
                pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger
                bag selfies, poke vaporware kombucha lumbersexual pork belly
                polaroid hoodie portland craft beer.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                CATEGORY
              </span>
              <span className="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel vexillologist
                pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger
                bag selfies, poke vaporware kombucha lumbersexual pork belly
                polaroid hoodie portland craft beer.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
