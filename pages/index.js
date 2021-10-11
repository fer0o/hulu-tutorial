import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
export default function Home() {
  return (
    <div>
      <Head> <title>Hulu 2.0</title> </Head>



      {/* we have 3 principal components */}

      {/* header */}
      <Header/>

      {/* navbar */}
      <Nav/>

      {/* results */}
      <Results/>
      
    </div>
  )
}
