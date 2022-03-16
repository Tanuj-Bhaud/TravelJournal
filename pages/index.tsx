import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hsection from '../components/Hsection'
import Tbutton from '../components/Tbutton'
import tData from '../Data/travelData'
import React, {useState} from 'react'

export default function Home() {
  const [travelData, setTravelData] = useState(tData)
  
  return (
    <div className="">
      <Head>
        <title>Travel journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <Hsection travelData={travelData} />
        <Tbutton travelData={travelData} setTravelData={setTravelData}/>
      </main>
    </div>
  )
}
