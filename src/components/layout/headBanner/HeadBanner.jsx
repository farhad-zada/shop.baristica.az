import React, { useEffect, useState } from "react";
import './headBanner.css'

import PagesText from "../../../content/PagesText.json";
const { header } = PagesText;
const { headerIntroText } = header;

export default function HeadBanner() {
  const [lang, setLang] = useState(null);


  useEffect(() => {
    const lang = localStorage.getItem("lang");
    setLang(lang);
  }, []);
  return <div className="headBanner flex j-center white">{headerIntroText && headerIntroText[lang]}</div>;
}
