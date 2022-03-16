import React from 'react'

export default function Card(props) {
  const {
    imageUrl,
    description,
    endDate,
    startDate,
    googleMapsUrl,
    location,
    title,
  } = props
  return (
    <div>
      <div className="flex flex-wrap py-8 md:flex-nowrap">
        <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
          <div className="itens-center flex w-screen  justify-center sm:h-[230px] sm:w-[270px]">
            <img
              width="270px"
              height="270px"
              className="justify center flex items-center rounded-md sm:ml-20 md:mr-20"
              src={imageUrl}
            />
          </div>
        </div>
        <div className="ml-10 mt-6 md:flex-grow">
          <div className="flex flex-row text-black">
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#1e40af"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z" />
              </g>
            </svg>{' '}
            <span className="mr-1 font-bold">{location}</span>
            <span className="text-gray-700 underline">
              <a target="_blank" href={googleMapsUrl}>
                View on Google Maps
              </a>
            </span>
          </div>
          <h2 className="title-font mb-2 text-2xl font-bold text-gray-800">
            {title}
          </h2>

          <span className="font-bold text-black">
            {startDate}- {endDate}
          </span>
          <p className="leading-relaxed text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  )
}
