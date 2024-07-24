import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json';

const { profileInner } = PagesText;
const { body } = profileInner;

const NewAddress = ({setNewAddress}) => {
    const { lang } = useSelector((state) => state.baristica);
    return (
        <div className='newAddress'>
            <div className='newAddress-section'>
                <h1 class="f36 green800">{lang ? body[lang].address.newAddress.title : ''}</h1>
                <form action="" className='newAddress-form flex column'>
                    <input type="text" placeholder={lang ? body[lang].address.newAddress.form.addressName : ''} className='border20 gray600 f18' />
                    <input type="text" placeholder={lang ? body[lang].address.newAddress.form.city : ''} className='border20 gray600 f18' />
                    <input type="text" placeholder={lang ? body[lang].address.newAddress.form.address : ''} className='border20 gray600 f18' />
                    <div className='flex a-center g16'>
                        <input type="text" placeholder={lang ? body[lang].address.newAddress.form.section : ''} className='w-100 border20 gray600 f18' />
                        <input type="text" placeholder={lang ? body[lang].address.newAddress.form.flat : ''} className='w-100 border20 gray600 f18' />
                    </div>
                    <input type="text" className='border20 gray600 f18' placeholder={lang ? body[lang].address.newAddress.form.more : ''}/>
                    <div className='newAddress-makePrimary flex a-center'>
                        <h6 className='gray600 f16'>{lang ? body[lang].address.newAddress.form.makePriority.title : ''}</h6>
                        <div className='flex a-center'>
                            <input type="radio"/>
                            <label htmlFor="">{lang ? body[lang].address.newAddress.form.makePriority.yes : ''}</label>
                        </div>
                        <div className='flex a-center'>
                            <input type="radio"/>
                            <label htmlFor="">{lang ? body[lang].address.newAddress.form.makePriority.no : ''}</label>
                        </div>
                    </div>
                    <div className='newAddress-buttons'>
                        <button className='defaultBtn border16 f18 white'>{lang ? body[lang].address.newAddress.form.addBtn : ''}</button>
                        <button className='defaultBtn border16 f18 gray600' onClick={() => setNewAddress(false)}>{lang ? body[lang].address.newAddress.form.cancelBtn : ''}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewAddress