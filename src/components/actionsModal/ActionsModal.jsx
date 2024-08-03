import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ActionsModal(props) {
    const {
        type,
        status,
        setActionsModal,
        formData,
        setLoading,
        setErrorModal,
        setErrorData,
        setSuccessData,
        setSuccessModal,
        submitFunction,
    } = props

    const navigate = useNavigate()


    const [activeType, setActiveType] = useState(null)

    const handleSuccess = () => {
        setActionsModal({ type: '', status: false });
    };


    const [types, setTypes] = useState([
        {
            type: 'addFavorite',
            header: {
                az: '',
                ru: '',
                en: ''
            },
            body: {
                az: '',
                ru: '',
                en: ''
            },
            formData: {},
            submit: async (formData) => {
                setLoading(true)
                try {

                    setSuccessData({})
                    setSuccessModal(true)
                    setLoading(false)
                    handleSuccess()
                } catch (error) {
                    handleSuccess()
                    setErrorModal(true)
                    setErrorData({})
                    setLoading(false)
                }
            }
        },
    ])


    useEffect(() => {
        const newType = types.find((typeItem) => typeItem.type === type)
        setActiveType({ ...newType, formData: formData, submitFunction: submitFunction });

    }, [type, types]);


    return (
        <div className={status ? "actions-modal active" : "actions-modal"}>
            <div className="actions-modal_content relative">
                <div className="close-actions_modal" onClick={() => setActionsModal({ type: '', status: false })}>
                    <img src={CloseIcon} alt="" />
                </div>
                <div className="actions-modal_content-head">
                    <h2 className='text-black'>{activeType?.header}</h2>
                </div>
                <p className='text-gray'>{activeType?.body}</p>
                <div className="actions-modal_content-buttons flex justify-between">
                    <button className="white-btn w-48 flex align-center justify-center" onClick={() => setActionsModal({ type: '', status: false })}>Xeyr</button>
                    <div className="blue-btn w-48">
                        <button className='inline-block w-100' type='button' onClick={() => {
                            activeType?.submit(activeType?.formData)
                        }}>Bəli</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
