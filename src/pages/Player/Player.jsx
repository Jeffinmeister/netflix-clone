import React, { useEffect, useState } from "react";
import "./Player.css";
import backArrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const {id}=useParams();
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const navigate=useNavigate();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzc1N2JkYjNmNGYwYTMxZWI4N2E0YWE0MmYxMGIyMiIsInN1YiI6IjY2NzNmZDhhOTUzNWFhMGRiYTc3ZGRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fmPFZoTK2qdkqlXZWKg7lgnoNm-zedmnv0DOTdGkAT8'
    }
  };
  
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

},[])
  return (
    <div className="player">
      <img src={backArrow} alt="" className="" onClick={()=>{navigate(-2)}} />
    
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="trailer"
        allowFullScreen
      >

      </iframe>
      <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  );
}

export default Player;
