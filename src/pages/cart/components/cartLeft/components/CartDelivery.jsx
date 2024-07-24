import React, { useState } from 'react'

import { ArrowUpward, ArrowDownward, Package } from '../../../../../assets/images/icons/icons'
import CustomInput from '../../../../../components/form/customInput/CustomInput'

export default function CartDelivery(props) {
    const { info, cartUserInfo, setCartUserInfo } = props

    const [showContent, setShowContent] = useState(true)

    const onInputChange = (e) => {
        const { name, value } = e.target
        setCartUserInfo((state) => {
            return { ...state, [name]: value }
        })
    }
    return (
        <div className='cartDelivery border24 cartActions'>
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
                {Package}
                <span>{info?.heading}</span>
            </h2>
            {
                showContent
                    ?
                    <>

                        <h3 className="cartActionSubheading green800 f20">
                            {info?.deliveryDate?.heading}
                        </h3>
                        {/* delivery date  */}
                        <div className="flex j-between w-100">
                            {/* fix  */}
                            <div className="w-48">
                                <CustomInput
                                    name='time'
                                    placeholder={info?.deliveryDate?.timeInput}
                                    onChange={onInputChange}
                                    value={''}
                                />
                            </div>
                            {/* fix  */}
                            <div className="w-48">
                                <CustomInput
                                    name='date'
                                    placeholder={info?.deliveryDate?.dateInput}
                                    onChange={onInputChange}
                                    value={''}
                                />
                            </div>
                        </div>

                        <h3 className="cartActionSubheading green800 f20">
                            {info?.deliveryLocation?.heading}
                        </h3>
                        {/* delivery location  */}
                        <div className="flex j-between wrap w-100">
                            <div className="w-100">
                                <CustomInput
                                    name='address'
                                    placeholder={info?.deliveryLocation?.addressInput}
                                    onChange={onInputChange}
                                    value={''}
                                />
                            </div>

                            <div className="w-48 mt12">
                                <CustomInput
                                    name='entrance'
                                    placeholder={info?.deliveryLocation?.entranceInput}
                                    onChange={onInputChange}
                                    value={''}
                                />
                            </div>

                            <div className="w-48 mt12">
                                <CustomInput
                                    name='apartament'
                                    placeholder={info?.deliveryLocation?.apartamentInput}
                                    onChange={onInputChange}
                                    value={''}
                                />
                            </div>
                        </div>
                    </>
                    :
                    <></>
            }
        </div>
    )
}
