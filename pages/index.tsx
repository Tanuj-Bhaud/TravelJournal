import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hsection from '../components/Hsection'
import Tbutton from '../components/Tbutton'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Travel journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<main className="">  
 <Navbar />
 <Hsection />
 <Tbutton />
</main>
</div>
)}
