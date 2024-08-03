import React, { useState } from 'react'
import { Comment, Star, Favourites, CartIcon } from '../../../../assets/images/icons/icons'
import ProgressBar from '../../../../components/progressBar/ProgressBar'
import CustomSelect from '../../../../components/form/customSelect/CustomSelect'
import CustomCounter from '../../../../components/form/customCounter/CustomCounter'

export default function ProductMainInfo(props) {
    const { info } = props

    const [productTypes, setProductTypes] = useState([
        { text: 'В зернах', value: '1' },
        { text: 'Для пуровера (средний)', value: '2' },
        { text: 'Для аеропресса', value: '3' },

    ])

    const [productWeight, setProductWeight] = useState([
        { text: 200, value: '1' },
        { text: 1000, value: '2' },
    ])

    const [counterValue,setCounterValue] = useState(1)

    const onOptionSelect = (option) => {

    }

    const handleCounterChange = (value) => {
        setCounterValue(value);
    };

    return (
        <div className='productMain-info'>
            <h3 className='f18 blueAccent'>Для эспрессо</h3>
            <h2 className='f36 green800'>БРАЗИЛИЯ СЕРРАДО</h2>

            <div className="productMain-info_feedback flex a-center">
                {/* rating  */}
                <div className="flex a-center flex g8">
                    {Star}
                    4.5
                </div>
                <div className="flex a-center flex g8">
                    {Comment}
                    45
                </div>
                <span className='productMain-info_feedback-favorites'>
                    {Favourites}
                </span>
            </div>

            <div className="productMain-info_detailed border20 flex j-between wrap">
                <div className="productMain-info_detailed-price">
                    <h3 className='flex g8 a-center'>
                        <span className="green800 f30">19.99 AZN</span>
                        <span className="f24 gray400">
                            19.99 AZN
                        </span>
                    </h3>
                    <p className='f18 gray600'>Плотный кофе с нотами жареных орехов, шоколада и карамели.</p>
                </div>

                <div className="productMain-info_detailed-compound flex column  border16">
                    <ul>
                        <li className='white'>{info?.compound?.acidity}</li>
                        <li><ProgressBar percentage={50} /></li>
                    </ul>

                    <ul>
                        <li className='white'>{info?.compound?.dencity}</li>
                        <li><ProgressBar percentage={20} /></li>
                    </ul>

                    <ul>
                        <li className='white'>{info?.compound?.sweetness}</li>
                        <li><ProgressBar percentage={70} /></li>
                    </ul>
                </div>

                <div className="productMain-info_selects flex j-between a-center w-100">
                    <div className="productMain-info_types">
                        <CustomSelect options={productTypes} onOptionSelect={onOptionSelect} />
                    </div>
                    <div className="productMain-info_weight">
                        <CustomSelect options={productWeight} onOptionSelect={onOptionSelect} />
                    </div>
                </div>
            </div>

            <div className="productMain-info_addToCard flex j-between a-center">
                <div className="productMain-info_addToCard-btn border20 flex a-center j-center g8 f20 white">
                    {CartIcon}
                    {info?.addToCartBtn} - 19.99 AZN
                </div>

                <div className="productMain-info_counter">
                <CustomCounter initialValue={counterValue} onChange={handleCounterChange} />

                </div>
            </div>

        </div>
    )
}
