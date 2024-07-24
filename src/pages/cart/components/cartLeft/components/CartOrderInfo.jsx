import React, { useState } from 'react'

import { RocketIcon } from '../../../../../assets/images/icons/icons'
import { Link } from 'react-router-dom'
import CustomCheckbox from '../../../../../components/form/customCheckbox/CustomCheckBox'

export default function CartOrderInfo(props) {
  const [checked, setChecked] = useState(false);
  const { info } = props

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };


  return (
    <div className='cartOrder-info border24'>

      <div className="cartOrder-info_content flex j-between">
        <ul className="cartOrder-info_headings flex column w-48">
          {
            info?.headings?.map((heading, index) => (
              <li className='white f20' key={index}>
                {heading}
              </li>
            ))
          }
        </ul>
        <ul className="cartOrder-info_values flex column">
          <li className='white f20'>40 AZN</li>
          <li className='white f20'>Бесплатно</li>
          <li className='white f20'>0 AZN</li>
          <li className='white f20'>40 AZN</li>
        </ul>
      </div>

      <div className="cartOrder-info_orderBtn">
        <Link className='flex a-center j-center f20 green800 border20' to={''}>
          {RocketIcon}
          <span>{info.orderBtn} - 40 AZN</span>
        </Link>
      </div>

      <div className="cartOrder-info_termsConditions">
        <CustomCheckbox
          checked={checked}
          onChange={handleCheckboxChange}
          label={info?.termsConditions}
        />
      </div>
    </div>
  )
}
