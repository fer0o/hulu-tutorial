import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'
export default function Home({results}) {
  //console.log(props)
  return (
    <div>
      <Head> <title>Hulu 2.0</title> </Head>



      {/* we have 3 principal components */}

      {/* header */}
      <Header/>

      {/* navbar */}
      <Nav/>

      {/* results */}
      <Results results={results}/>
      
    </div>
  )
}

//hace render en el server
export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url||requests.fetchTrending.url
     }`
     ).then(res => res.json())

     return{
       props:{
         results: request.results,
       }
     }


}
