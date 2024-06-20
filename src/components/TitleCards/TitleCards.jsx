import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";
function TitleCards(props) {
  const {title,category}=props
console.log(category,'category')
  const cardsRef = useRef();
  const [apiData,setApiData]=useState([])
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzc1N2JkYjNmNGYwYTMxZWI4N2E0YWE0MmYxMGIyMiIsInN1YiI6IjY2NzNmZDhhOTUzNWFhMGRiYTc3ZGRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fmPFZoTK2qdkqlXZWKg7lgnoNm-zedmnv0DOTdGkAT8'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);


  return (
    <div className="title-cards">
      <h2>{title?title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCards;
