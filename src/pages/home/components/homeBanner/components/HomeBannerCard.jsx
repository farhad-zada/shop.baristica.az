import React from "react";
import { Link } from "react-router-dom";

import Img from '../../../../../assets/images/HomeBannerStore.png'

export default function HomeBannerCard(props) {
  const { key, content } = props;
  return (
    <div className="homeBanner-card flex j-between" key={key}>
      <div className="homeBanner-card_text flex column j-between">
        <h2 className="white">{content.title}</h2>
        <Link className="green200" to={content.link}>Подробнее</Link>
      </div>
      <div className="homeBanner-card_img">
        <img src={Img} alt="" />
      </div>
    </div>
  );
}
