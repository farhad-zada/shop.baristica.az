import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon, RIDS, YoutubeIcon } from "../../../assets/images/icons/icons";
import PagesText from "../../../content/PagesText.json";
import "./footer.css";

const { footer } = PagesText;

export default function Footer() {
  const { lang } = useSelector((state) => state.baristica)
  return (
    <footer>
      <div className="container">
        <div className="footerTop flex a-center j-between w-100">
            <div className="footerTop-left">
                <div className="footerTop-socials flex a-center">
                    <Link className="social" to="facebook.com">
                        {FacebookIcon}
                    </Link>
                    <Link className="social" to="instagram.com">
                        {InstagramIcon}
                    </Link>
                    <Link className="social" to="linkedin.com">
                        {LinkedinIcon}
                    </Link>
                    <Link className="social" to="linkedin.com">
                        {YoutubeIcon}
                    </Link>
                </div>
            </div>
            <div className="footerTop-right flex">
                <div className="footerTop-text w-100">
                    <p className="gray300 f16 footerTop-title">{lang ? footer[lang].discount.title : ''}</p>
                    <h3 className="white f36 footerTop-subtitle">{lang ? footer[lang].discount.subtitle : ''}</h3>
                </div>
                <form action="" className="footerTop-form flex w-100">
                    <input type="text" name="" id="" placeholder={lang ? footer[lang].input.placeholder : ''} className="w-100 border16 gray300 f18"/>
                    <button className="footerTop-form_button defaultBtn border16 white">{lang ? footer[lang].input.btn : ''}</button>
                </form>
            </div>
        </div>
        <hr/>
        <div className="footerCenter flex a-start j-between w-100">
            <div className="footerCenter-left flex a-start">
                { lang && footer[lang]?.menu?.map((elem) => (
                    <div className="footerCeneter-menu" key={elem?.title}>
                        <h6 className="white f18">{elem?.title}</h6>
                        <ul>
                            {elem?.list.map((item, key) => (
                                <li key={key}><Link className="gray300 f16" to={item?.link}>{item?.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footerCenter-right">
                <h1 className="f36 white">{lang ? footer[lang].side_info.number : ''}</h1>
                <p className="f16 gray300">{lang ? footer[lang].side_info.text : ''}</p>
            </div>
        </div>
        <hr />
        <div className="footerBottom flex a-center j-between">
            <div className="footerBottom-left">
                <h6 className="white f16">© 2023 «Baristica»</h6>
            </div>
            <div className="footerBottom-right">
                <ul className="footerBottom-menu flex">
                    { lang && footer[lang].bottom_menu?.map((elem) => (
                        <li key={elem.title}>
                            <Link className="gray300 f16" to={elem.link}>{elem.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
