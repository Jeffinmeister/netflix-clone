import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import PlayIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="caption-img" />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={PlayIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="" />
              More info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movie"} category={'popular'}/>
      <TitleCards title={" Only on Netflix"} category={'now_playing'}/>
      <TitleCards title={" Upcoming"} category={'upcoming'}/>
      <TitleCards title={" Topics for you"} category={'top_rated'}/>

      </div>
      <Footer/>
    </div>
  );
}
