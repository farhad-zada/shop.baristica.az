import React, { useState } from 'react'
import PersonIcon from '../../../../../assets/images/icons/person.svg'
import CustomInput from '../../../../../components/form/customInput/CustomInput'
import CustomSelect from '../../../../../components/form/customSelect/CustomSelect'

import { ArrowUpward, ArrowDownward, Person } from '../../../../../assets/images/icons/icons'

export default function CartUserInfo(props) {
    const { info, cartUserInfo, setCartUserInfo } = props

    const [showContent, setShowContent] = useState(true)

    const onInputChange = (e) => {
        const { name, value } = e.target
        setCartUserInfo((state) => {
            return { ...state, [name]: value }
        })
    }

    const handleOptionSelect = (value) => {
        setCartUserInfo((state) => {
            return { ...state, orderTo: value }
        })
    };

    return (
        <div className='cartUser-info border24 cartActions'>
            <span className='toggleCartAction'>
                {
                    showContent
                        ?
                        <span onClick={() => setShowContent(false)}>{ArrowUpward}</span>
                        :
                        <span onClick={() => setShowContent(true)}>{ArrowDownward}</span>
                }
            </span>
            <h2 className='f24 green800 flex a-center actionHeading'>
                {Person}
                <span>{info?.heading}</span>
            </h2>

            {
                showContent
                    ?
                    // user info form
                    <div className="flex j-between wrap">
                        <div className="w-48 mt12">
                            <CustomInput
                                name='name'
                                placeholder={info?.nameInput}
                                onChange={onInputChange}
                                value={cartUserInfo?.name}
                            />
                        </div>

                        <div className="w-48 mt12">
                            <CustomInput
                                name='lastName'
                                placeholder={info?.lastNameInput}
                                onChange={onInputChange}
                                value={cartUserInfo?.lastName}
                            />
                        </div>

                        <div className="w-48 mt12">
                            <CustomInput
                                name='email'
                                placeholder={info?.emailInput}
                                onChange={onInputChange}
                                value={cartUserInfo?.email}
                            />
                        </div>

                        <div className="w-48 mt12">
                            <CustomInput
                                name='phoneNumber'
                                placeholder={info?.phoneNumberInput}
                                onChange={onInputChange}
                                value={cartUserInfo?.phoneNumber}
                            />
                        </div>

                        <div className="cartUser-info_form-select flex a-center">
                            <span className='f20 green800'>{info?.orderTo?.label}</span>
                            <CustomSelect options={info?.orderTo?.content} onOptionSelect={handleOptionSelect} />
                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}
