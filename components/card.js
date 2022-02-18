import React from 'react'


 const Card =(props)=> {
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
    
    <div className="flex justify-center flex-col sm:flex-row mb-6 ">
      <img src={imageUrl} alt={title} className="w-full sm:w-64 sm:mr-8 rounded-2xl" />

      <div className="mt-2 mb-6 md:flex-grow">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z" />
            </g>
          </svg>{' '}
          <span className="mr-1 font-bold">{location}</span>
          <span className="text-gray-700 underline ml-6">
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
        <p className="leading-relaxed text-gray-400">{description}</p>
      </div>


    </div>
  )
 }


export default Card

const LocationIcon = () => {
  return (<svg
    className="mt-1"
    xmlns="http://www.w3.org/2000/svg"
    ariaHidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#1e40af"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z" />
    </g>
  </svg>)
}

