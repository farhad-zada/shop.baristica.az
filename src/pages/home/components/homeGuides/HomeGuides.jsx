import React from "react";
import { useSelector } from "react-redux";
import "./homeGuides.css";
import PagesText from "../../../../content/PagesText.json";

import AeropressImg from "../../../../assets/images/aeropress.png";
import MicroFilterImg from "../../../../assets/images/microFilter.png";
import AeroPressGuide from "../../../../assets/images/aeroPressGuide.png";


import { Link } from "react-router-dom";


const { home } = PagesText;
const { body } = home;
export default function HomeGuides() {
  const { lang } = useSelector((state) => state.baristica);
  // need api
  return (
    <div className="homeGuides">
      <div className="container">
        <div className="homeGuides-content flex ">
          <div className="homeGuides-left w-100">
            <h2 className="homeGuides-title f30 green800">
              {body[lang]?.guides?.titleLeft}
            </h2>
            <div className="homeGuides-left_content flex">
              <div className="homeGuides-left_first w-100">
                <div className="border24">
                  <img src={AeropressImg} alt="" />
                </div>
                <h3 className="f24 green800">AeroPress</h3>
              </div>
              <div className="homeGuides-left_second w-100">
                <div className="border24">
                  <img src={MicroFilterImg} alt="" className="border24"/>
                </div>
                <h3 className="f24 green800">Микро-фильтры</h3>
              </div>
            </div>
          </div>
          <div className="homeGuides-right">
            <h2 className="homeGuides-title f30 green800">
              {body[lang]?.guides?.titleRight}
            </h2>
            <div className="homeGuides-right_content w-100">
                <div>
                    <img src={AeroPressGuide} alt="" className="border24" />
                </div>
                <h2 className="f24 green800">
                Гайд по AeroPress
                </h2>
                <p className="f16 gray600">
                AeroPress - это превосходная кофеварка на одну чашку, которая использует экстракцию под высоким давлением для приготовления невероятной чашки кофе.
                </p>
                <Link to={'/'} className='border16 white f18'> {body[lang]?.guides?.btn} </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
