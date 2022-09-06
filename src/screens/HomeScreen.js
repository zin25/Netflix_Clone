import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* {Navbar} */}
      <Nav />

      {/* {Banners} */}
      <Banner />

      {/* {Row} */}
      <Row title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals}isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      ​<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      ​<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  )
}

export default HomeScreen