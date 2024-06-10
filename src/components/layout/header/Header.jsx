import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../../../assets/images/logo.png";
import SearchIcon from "../../../assets/images/icons/search.svg";
import CompareIcon from '../../../assets/images/icons/compare.svg'
import FavoritesIcon from '../../../assets/images/icons/favorites.svg'
import ProfileIcon from '../../../assets/images/icons/profile.svg'
import CartIcon from '../../../assets/images/icons/cart.svg'

import PagesText from "../../../content/PagesText.json";
const { header } = PagesText;
const { headerPageLinks } = header;

export default function Header() {
  const { lang } = useSelector((state) => state.baristica);

  return (
    <header>
      <div className="container flex j-between">
        <div className="headerLeft flex a-center">
          <div className="headerLogo">
            <img src={Logo} alt="" />
          </div>
          <nav className="flex">
            {headerPageLinks[lang] &&
              headerPageLinks[lang]?.map((link, index) => (
                <Link className="green800" to={link.link} key={index}>
                  {link.title}
                </Link>
              ))}
          </nav>
        </div>
        <div className="headerActions flex">
          <span>
            <img src={SearchIcon} alt="" />
          </span>
          <span>
            <img src={CompareIcon} alt="" />
          </span>
          <span>
            <img src={FavoritesIcon} alt="" />
          </span>
          <span>
            <img src={ProfileIcon} alt="" />
          </span>
          <span className="headerCart">
            <span className="headerCart-count white f12">1</span>
            <img src={CartIcon} alt="" />
          </span>
        </div>
      </div>
    </header>
  );
}
