import React, { useState } from 'react'

import { ArrowUpward, ArrowDownward, Package } from '../../../../../assets/images/icons/icons'
import CustomInput from '../../../../../components/form/customInput/CustomInput'

export default function CartDelivery(props) {
    const { info, cartUserInfo, setCartUserInfo, lang, delivery, setDelivery } = props

    const [showContent, setShowContent] = useState(true)

    const deliveryText = {
        az: {
            deliveryType: 'Çatdırılma üsulu',
            delivery: 'Çatdırılma',
            pickup: 'Özün apar'
        },
        ru: {
            deliveryType: 'Тип доставки',
            delivery: 'Доставка',
            pickup: 'Самовывоз'
        },
        en: {
            deliveryType: 'Delivery type',
            delivery: 'Delivery',
            pickup: 'Picup'
        }
    }

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

                        <h2 className="f18 green800">
                            {lang ? deliveryText[lang].deliveryType : ''}
                        </h2>
                        {/* delivery type  */}
                        <div className="flex g8 mt12">

                            <div className='flex g8'>
                                <input
                                    id='delivery'
                                    name='delivery'
                                    type="radio"
                                    style={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    onChange={(e) => setDelivery(e.target.id)}
                                />
                                <label htmlFor="delivery" className='pointer'>{lang ? deliveryText[lang].delivery : ''}</label>
                            </div>
                            <div className='flex g8'>
                                <input
                                    id='pickup'
                                    name='delivery'
                                    type="radio"
                                    style={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    onChange={(e) => setDelivery(e.target.id)}
                                />
                                <label htmlFor="pickup" className='pointer'>{lang ? deliveryText[lang].pickup : ''}</label>
                            </div>
                        </div>

                        {
                            delivery === 'delivery'
                                ?
                                <>
                                    {/* delivery date  */}
                                    <div className="flex j-between wrap w-100 mt12">
                                        {/* fix  */}
                                        <div className="w-48 flex column g8">
                                            <label className='green800 f20'>{info?.deliveryDate?.from}</label>
                                            <CustomInput
                                                name='from'
                                                type='time'
                                                placeholder={info?.deliveryDate?.timeInput}
                                                onChange={onInputChange}
                                            />
                                        </div>
                                        <div className="w-48 flex column g8">
                                            <label className='green800 f20'>{info?.deliveryDate?.to}</label>

                                            <CustomInput
                                                name='to'
                                                type='time'
                                                placeholder={info?.deliveryDate?.timeInput}
                                                onChange={onInputChange}
                                            />
                                        </div>
                                        {/* fix  */}
                                        <div className="w-100 mt12 flex column g8">
                                            <label className='green800 f20'>{info?.deliveryDate?.dateInput}</label>

                                            <CustomInput
                                                name='deliveryDate'
                                                placeholder={info?.deliveryDate?.dateInput}
                                                onChange={onInputChange}
                                                type='date'
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
                                                name='deliveryAddress'
                                                placeholder={info?.deliveryLocation?.addressInput}
                                                onChange={onInputChange}
                                                value={cartUserInfo?.deliveryAddress ? cartUserInfo.deliveryAddress : ''}
                                            />
                                        </div>

                                        <div className="w-48 mt12">
                                            <CustomInput
                                                name='deliveryEnterance'
                                                placeholder={info?.deliveryLocation?.entranceInput}
                                                onChange={onInputChange}
                                                value={cartUserInfo?.deliveryEnterance ? cartUserInfo.deliveryEnterance : ''}
                                            />
                                        </div>

                                        <div className="w-48 mt12">
                                            <CustomInput
                                                name='deliveryApartment'
                                                placeholder={info?.deliveryLocation?.apartamentInput}
                                                onChange={onInputChange}
                                                value={cartUserInfo?.deliveryApartment ? cartUserInfo.deliveryApartment : ''}
                                            />
                                        </div>
                                    </div>
                                </>
                                :
                                <></>
                        }
                    </>
                    :
                    <></>
            }
        </div>
    )
}
