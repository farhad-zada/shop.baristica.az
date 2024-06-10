import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./subHeader.css";

import FacebookIcon from "../../../assets/images/icons/facebook.svg";
import InstagramIcon from "../../../assets/images/icons/instagram.svg";
import LinkedinIcon from "../../../assets/images/icons/linkedin.svg";

import { setLang } from "../../../redux/slice";

import PagesText from "../../../content/PagesText.json";
import { useDispatch, useSelector } from "react-redux";
const { header } = PagesText;
const { subHeaderLinks } = header;

export default function SubHeader() {

  const { lang } = useSelector((state) => state.baristica)

  const dispatch = useDispatch()

  const changeLang = (lang) => {
    localStorage.setItem("lang", lang);
    dispatch(setLang(lang));
  };


  return (
    <div className="subHeader">
      <div className="container flex j-between">
        <div className="subHeader-info flex a-center">
          <span className="green800">+994 (12) 444 44 44</span>

          {subHeaderLinks[lang] &&
            subHeaderLinks[lang]?.map((link, index) => (
              <Link className="green800" to={link.link} key={index}>
                {link.title}
              </Link>
            ))}
        </div>

        <div className="subHeader-inner flex a-center">
          <div className="subHeader-socials flex a-center">
            <span>
              <img src={FacebookIcon} alt="" />
            </span>

            <span>
              <img src={InstagramIcon} alt="" />
            </span>

            <span>
              <img src={LinkedinIcon} alt="" />
            </span>
          </div>

          <div className="subHeader-langs flex">
            <span className="green800" onClick={() => changeLang("az")}>
              Az
            </span>
            <span className="green800" onClick={() => changeLang("en")}>
              En
            </span>
            <span className="green800" onClick={() => changeLang("ru")}>
              Ru
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
