import Head from 'next/head'
import Navbar from '../components/navbar'
import Hsection from '../components/hsection'

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
</main>
</div>
)}
