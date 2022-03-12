import React from 'react';
import axios from 'axios';

import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import { BASE_URL } from 'utils/requests'

import './styles.css';


function Listing() {

  //FORMA ERRADA
  axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(resposne => {
          console.log(resposne.data)
        })  


  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
        </div>
      </div>
      
      
    </>
  );
}


export default Listing;
