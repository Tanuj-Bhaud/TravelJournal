import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Travel journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <HeroSection />
      </main>
    </div>
  )
}
