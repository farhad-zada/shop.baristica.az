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
import ProfileDropdown from "../../profileDropdown/ProfileDropdown";
const { header } = PagesText;
const { headerPageLinks } = header;

export default function Header() {
  const [profileDropdown, setProfileDropdown] = useState(false)
  const { lang, compareProducts, cartProducts } = useSelector((state) => state.baristica);

  return (
    <header>
      <div className="container flex j-between">
        <div className="headerLeft flex a-center">
          <Link to={'/'} className="headerLogo">
            <img src={Logo} alt="" />
          </Link>
          <nav className="flex">
            {lang &&
              headerPageLinks[lang]?.map((link, index) => (
                <Link className="green800" to={link.link} key={index}>
                  {link.title}
                </Link>
              ))}
          </nav>
        </div>
        <div className="headerActions flex">
          <ProfileDropdown status={profileDropdown} setStatus={setProfileDropdown} />
          <span>
            <img src={SearchIcon} alt="" />
          </span>
          <Link to={'/compare'} className="headerCart">
            <span className="headerCart-count white f12">{compareProducts?.length}</span>
            <img src={CompareIcon} alt="" />
          </Link>
          <Link to={'/favorites'}>
            <img src={FavoritesIcon} alt="" />
          </Link>
          <span onClick={() => setProfileDropdown(!profileDropdown)}>
            <img src={ProfileIcon} alt="" />
          </span>
          <Link to={'/cart'} className="headerCart">
            <span className="headerCart-count white f12">{cartProducts?.length}</span>
            <img src={CartIcon} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
