import React from 'react'
import MyModal from './ModalFunction'

function Tbutton(props) {
  const handleClick = () => {
    return <MyModal />
  }
  return (
    <div>
      {' '}
      <div
        onClick={handleClick}
        className="flex h-20 w-screen items-center justify-center"
      >
        <MyModal />
      </div>
    </div>
  )
}

export default Tbutton
