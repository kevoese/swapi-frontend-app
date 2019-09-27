import React from "react";
import "./StarshipView.scss";
import starshipImg from "../../assets/starship-1.jpg";
import Slide from "../../Components/Slide";
import Starships from "../../Components/Starship";
import logo from "../../assets/logo.png";

const StarshipView = () => {
  return (
    <div className="starship-view">
      <div className="starship-view__img">
        <img src={starshipImg} alt="" />
        <span className="starship-view__img__logo">
          <img src={logo} alt="" />
        </span>
        <div className="title-wrap">
          <div className="edge1"></div>
          <h2>Cornellian Scout</h2>
          <div className="edge2"></div>
        </div>
        <div className="arrows">
          <div className="left">
            <svg
              width="32"
              height="32"
              viewBox="0 0 58 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.5764 60.9852L39.6672 13.7252L7.75655 36.4325L39.5764 60.9852Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="right">
            <svg
              width="32"
              height="32"
              viewBox="0 0 56 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7883 60.9852L17.7007 13.7252L48.5109 36.4325L17.7883 60.9852Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="starship-view__content">
        <h2>Cornellian Scout</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
          voluptatum blanditiis sapiente quas possimus, ab dolorem autem illo!
          Ipsum minima officia, accusamus voluptatem perferendis alias natus
          laudantium. Odit, esse eligendi? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nemo ad maiores facere, quis inventore
          ut eaque dolorem cum asperiores odit animi harum mollitia repudiandae
          libero minima consequatur adipisci, similique ratione. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Consequuntur, suscipit
          vel! Explicabo aut molestiae mollitia eos vero esse? Inventore harum
          ad neque reprehenderit voluptate culpa expedita vitae minima velit
          cupiditate? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quo voluptatum blanditiis sapiente quas possimus, ab dolorem autem
          illo! Ipsum minima officia, accusamus voluptatem perferendis alias
          natus laudantium. Odit, esse eligendi? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nemo ad maiores facere, quis inventore
          ut eaque dolorem cum asperiores odit animi harum mollitia repudiandae
          libero minima consequatur adipisci, similique ratione. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Consequuntur, suscipit
          vel! Explicabo aut molestiae mollitia eos vero esse? Inventore harum
          ad neque reprehenderit voluptate culpa expedita vitae minima velit
          cupiditate? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quo voluptatum blanditiis sapiente quas possimus, ab dolorem autem
          illo! Ipsum minima officia, accusamus voluptatem perferendis alias
          natus laudantium. Odit, esse eligendi? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nemo ad maiores facere, quis inventore
          ut eaque dolorem cum asperiores odit animi harum mollitia repudiandae
          libero minima consequatur adipisci, similique ratione. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Consequuntur, suscipit
          vel! Explicabo aut molestiae mollitia eos vero esse? Inventore harum
          ad neque reprehenderit voluptate culpa expedita vitae minima velit
          cupiditate?
        </p>
      </div>
      <div className="recently-viewed">
        <div className="recently-viewed__title">
            <h2>
                Recently viewed Starships
            </h2>
            <div className="line"></div>
        </div>
        <Slide>
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
          <Starships />
        </Slide>
      </div>
    </div>
  );
};

export default StarshipView;
