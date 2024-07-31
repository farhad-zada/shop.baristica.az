import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json';

import UsersService from '../../../../../../services/users.service';
import Loading from '../../../../../../components/loading/Loading';
import { setUser } from '../../../../../../redux/slice';

const { profileInner } = PagesText;
const { body } = profileInner;

const NewAddress = ({ setNewAddress }) => {
    const { lang } = useSelector((state) => state.baristica);
    const [isPrimary, setIsPrimary] = useState(false)
    const [address, setAddress] = useState({
        name: '',
        city: '',
        address: '',
        entrance: '',
        apartment: '',
        notes: ''
    })
    const [loading,setLoading] = useState(false)

    const dispatch = useDispatch()
    const usersService = new UsersService()

    const getUser = async (token) => {
        setLoading(state => state = true)
        try {
          const response = await usersService.getUserInfo(token)
          dispatch(setUser(response.data))
          setLoading(state => state = false)
          setNewAddress(false)
        } catch (error) {
          setLoading(state => state = false)
        }
      }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setAddress((state) => {
            return { ...state, [name]: value }
        })
    }

    const onSubmit = async () => {
        const data = {
            ...address,
            isPrimary: isPrimary
        }
        setLoading(true)
        try {
            const token = localStorage.getItem('baristicaToken')
            const response = await usersService.addAddress(token, data)
            setLoading(false)
            await getUser(token)
        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <div className='newAddress'>
            <Loading status={loading} />
            <div className='newAddress-section'>
                <h1 class="f36 green800">{lang ? body[lang].address.newAddress.title : ''}</h1>
                <form action="" className='newAddress-form flex column'>
                    <input
                        name='name'
                        type="text"
                        onChange={(e) => { handleInputChange(e) }}
                        placeholder={lang ? body[lang].address.newAddress.form.addressName : ''}
                        className='border20 gray600 f18'
                    />
                    <input
                        name='city'
                        type="text"
                        onChange={(e) => { handleInputChange(e) }}
                        placeholder={lang ? body[lang].address.newAddress.form.city : ''}
                        className='border20 gray600 f18'
                    />
                    <input
                        name='address'
                        type="text"
                        onChange={(e) => { handleInputChange(e) }}
                        placeholder={lang ? body[lang].address.newAddress.form.address : ''}
                        className='border20 gray600 f18'
                    />
                    <div className='flex a-center g16'>
                        <input
                            name='entrance'
                            type="text"
                            onChange={(e) => { handleInputChange(e) }}
                            placeholder={lang ? body[lang].address.newAddress.form.section : ''}
                            className='w-100 border20 gray600 f18'
                        />
                        <input
                            name='apartment'
                            type="text"
                            onChange={(e) => { handleInputChange(e) }}
                            placeholder={lang ? body[lang].address.newAddress.form.flat : ''}
                            className='w-100 border20 gray600 f18' />
                    </div>
                    <input
                        name='notes'
                        type="text"
                        onChange={(e) => { handleInputChange(e) }}
                        className='border20 gray600 f18'
                        placeholder={lang ? body[lang].address.newAddress.form.more : ''}
                    />
                    <div className='newAddress-makePrimary flex a-center'>
                        <h6 className='gray600 f16'>{lang ? body[lang].address.newAddress.form.makePriority.title : ''}</h6>
                        <div className='flex a-center'>
                            <input type="radio" name='isPrimary' onChange={() => setIsPrimary(true)} />
                            <label htmlFor="">{lang ? body[lang].address.newAddress.form.makePriority.yes : ''}</label>
                        </div>
                        <div className='flex a-center'>
                            <input type="radio" name='isPrimary' onChange={() => setIsPrimary(false)} />
                            <label htmlFor="">{lang ? body[lang].address.newAddress.form.makePriority.no : ''}</label>
                        </div>
                    </div>
                    <div className='newAddress-buttons'>
                        <button className='defaultBtn border16 f18 white pointer' type='button' onClick={onSubmit}>{lang ? body[lang].address.newAddress.form.addBtn : ''}</button>
                        <button type='button' className='defaultBtn border16 f18 gray600 pointer' onClick={() => setNewAddress(false)}>{lang ? body[lang].address.newAddress.form.cancelBtn : ''}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewAddress