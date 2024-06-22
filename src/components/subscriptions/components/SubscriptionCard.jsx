import React from "react";
import "../subscriptions.css";

export default function SubscriptionCard(props) {
  const { key, content } = props;
  return (
    <div
      className="homeSubscription-card border20 flex column j-between h-100"
      key={key}
    >
      <div className="homeSubscription-card_img">
        <img src={content.img} alt="" />
      </div>
      <h1 className="homeSubscription-card_title green800 f24">
        {content.title}
      </h1>
      <h3 className="homeSubscription-card_subtitle gray600 f16">
        {content.subtitle}
      </h3>
      <p className="homeSubscription-card_advantage green800 f18">
        {content.advantage}
      </p>
    </div>
  );
}
