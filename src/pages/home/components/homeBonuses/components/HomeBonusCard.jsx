import React from 'react'
import "../homeBonuses.css"

export default function HomeBonusCard(props) {
    const { key, content } = props;
    return (
      <div className="homeBonus-card border20" key={key}>
        <h1 className='homeBonus-card_title green800 f30'>{content.title}</h1>
        <h3 className='homeBonus-card_subtitle green800 f24'>{content.subtitle}</h3>
        <p className='homeBonus-card_advantage gray500 f16'>{content.advantage}</p>
      </div>
    );
}