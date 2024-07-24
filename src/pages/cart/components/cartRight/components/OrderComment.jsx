import React, { useState } from 'react'

import { ArrowDownward, ArrowUpward, CartComment } from '../../../../../assets/images/icons/icons'
import CustomTextArea from '../../../../../components/form/customTextArea/CustomTextArea'

export default function OrderComment(props) {
    const { info } = props
    const [showContent, setShowContent] = useState(true)

    const [comment, setComment] = useState('')

    const handleCommentChange = (e) => {
        const { value } = e.target
        setComment(value)
    }
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
                {CartComment}
                <span>{info?.heading}</span>
            </h2>

            {
                showContent
                    ?
                    <CustomTextArea
                        name={'comment'}
                        value={comment}
                        placeholder={info?.commentInput}
                        onChange={handleCommentChange}
                    />
                    :
                    <></>
            }
        </div>
    )
}
