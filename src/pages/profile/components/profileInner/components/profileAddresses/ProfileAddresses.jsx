import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json';
import { Link } from 'react-router-dom';
import UsersService from '../../../../../../services/users.service';
import Loading from '../../../../../../components/loading/Loading';
import SuccessModal from '../../../../../../components/successModal/SuccessModal';
import { setUser } from '../../../../../../redux/slice';


import { CancelColor, CancelSimple, CirclePlus } from '../../../../../../assets/images/icons/icons';

const { profileInner } = PagesText;
const { body } = profileInner;

const ProfileAddresses = ({ setNewAddress, user }) => {
  const { lang, token } = useSelector((state) => state.baristica);

  const [loading, setLoading] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [successData, setSuccessData] = useState({})

  const usersService = new UsersService()
  const dispatch = useDispatch()

  const getUser = async () => {
    setLoading(state => state = true)
    try {
      const response = await usersService.getUserInfo(token)
      dispatch(setUser(response.data))
      setLoading(state => state = false)
      setSuccessModal(true)
      setSuccessData({
        message: {
          az: 'Ünvan silindi',
          ru: 'Адрес был удалён',
          en: 'The address have been deleted'
        }
      })
    } catch (error) {
      setLoading(state => state = false)
    }
  }

  const deleteAddress = async (id) => {
    setLoading(true)
    try {
      const response = await usersService.deleteAddress(token, id)
      setLoading(false)
      await getUser()
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <div className='profileAddresses'>
      <Loading status={loading} />
      <SuccessModal status={successModal} setStatus={setSuccessModal}  data={successData} />
      <h1 className='f36 green800'>{lang ? body[lang].address.title : ''}</h1>
      <div className='profileAddresses-all'>
        {
          user && user.addresses.length > 0
            ?
            user.addresses.map((elem, key) => (
              <div className={elem.isPrimary ? 'profileAddress selectedAddress border20' : "profileAddress border20"} key={key}>
                <div className='flex j-between a-center'>
                  <h4 className={elem.isPrimary ? 'f24 white' : 'f24 green800'}>{elem.name}</h4>
                  <button className='default_btn pointer' type='button' onClick={() => deleteAddress(elem._id)}>
                    {elem.isPrimary ? CancelSimple : CancelColor}
                    </button>
                </div>
                <p className={elem.isPrimary ? 'profileAddress-text white f16' : 'profileAddress-text green800 f16'}>
                  {lang ? body[lang].address.description : ''}
                  {elem?.address ? elem.address : ''}
                  </p>
                <Link className={elem.isPrimary ? 'white f16' : 'green800 f16'}>{lang ? body[lang].address.edit : ''}</Link>
              </div>
            ))
            :
            <></>
        }
        <Link className="profileAddress border20 flex column j-between" onClick={(e) => { e.preventDefault(); setNewAddress(true) }}>
          <h4 className='f24 green800 pb48'>{lang ? body[lang].address.firstAddress : ''}</h4>
          {CirclePlus}
        </Link>
      </div>
    </div>
  )
}

export default ProfileAddresses