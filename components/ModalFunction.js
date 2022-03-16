import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import travelData from '../Data/travelData'

import Hsection from './Hsection'
export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal(event) {
    event.preventDefault()
    setIsOpen(false)
    travelData.push({
      title: `${locationState}`,
      location: `${countryState}`,
      googleMapsUrl: `${urlState}`,
      startDate: `${startState}`,
      endDate: `${endState}`,
      description: `${descState}`,
      imageUrl: `${imageState}`,
    })

    console.log(travelData)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [locationState, setLocationState] = useState('')
  const [countryState, setCountrystate] = useState('')
  const [urlState, setUrlState] = useState('')
  const [startState, setStartState] = useState('')
  const [endState, setEndState] = useState('')
  const [descState, setDesState] = useState('')
  const [imageState, setImageState] = useState('')

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Add Travel
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h2"
                  className="text-lg font-bold leading-6 text-gray-900"
                >
                  Add Details of your Previous Travel
                </Dialog.Title>
                <div className="mt-2">
                  <form>
                    <label className="block" htmlFor="name">
                      Location:
                      <input
                        className="ml-2 border"
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setLocationState(e.target.value)}
                        value={locationState}
                        placeholder="Enter Location"
                      />
                    </label>
                    <label className="my-2 block" htmlFor="name">
                      Country:
                      <input
                        className="ml-2 border"
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setCountrystate(e.target.value)}
                        value={countryState}
                        placeholder="Enter Country"
                      />
                    </label>
                    <label className="my-2 block" htmlFor="name">
                      GPS Url:
                      <input
                        className="ml-2 border"
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setUrlState(e.target.value)}
                        value={urlState}
                        placeholder="Enter GPS Url"
                      />
                    </label>
                    <label className="my-2 block" htmlFor="name">
                      Start Date:
                      <input
                        className="ml-2 border"
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setStartState(e.target.value)}
                        value={startState}
                        placeholder="Enter Start Date"
                      />
                    </label>
                    <label className="my-2 block" htmlFor="name">
                      End Date:
                      <input
                        className="ml-2 border"
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setEndState(e.target.value)}
                        value={endState}
                        placeholder="Enter End Date"
                      />
                    </label>
                    <label className="my-2 block" htmlFor="name">
                      description:
                      <input
                        className="ml-2 border"
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setDesState(e.target.value)}
                        value={descState}
                        placeholder="Enter description"
                      />
                    </label>
                    <label className="my-2 block" htmlFor="name">
                      Image:
                      <input
                        className="ml-2 border"
                        id="name"
                        type="text"
                        name="name"
                        onChange={(e) => setImageState(e.target.value)}
                        value={imageState}
                        placeholder="Enter Image"
                      />
                    </label>

                    <div className="mt-4">
                      <button
                        type="Submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* title: location: googleMapsUrl: startDate: endDate: description:
                imageUrl: */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
