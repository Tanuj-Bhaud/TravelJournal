import React from 'react'
import MyModal from './ModalFunction'

function Tbutton({travelData, setTravelData}) {

  return (
      <div
        className="flex h-20 w-screen items-center justify-center"
      >
        <MyModal travelData={travelData} setTravelData={setTravelData} />
      </div>
  )
}

export default Tbutton
