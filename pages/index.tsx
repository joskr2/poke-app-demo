import type { NextPage } from 'next'
import Head from 'next/head'
import Adition from './components/Adition/Adition'
import Information from './components/Information/Information'
import Search from './components/Search/Search'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Poke App</title>
        <meta name="description" content="Demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Search/>
        <Information/>
        <Adition/>
      </main>
    </div>
  )
}

export default Home
