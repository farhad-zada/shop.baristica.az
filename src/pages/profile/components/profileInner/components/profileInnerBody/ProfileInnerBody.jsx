import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PagesText from '../../../../../../content/PagesText.json'
import Tabs from '../../../../../../components/tabs/Tabs';
import "./profileInnerBody.css"
import ProfilePersonal from '../profilePersonal/ProfilePersonal';
import ProfileOrders from '../profileOrders/ProfileOrders';
import ProfileAddresses from '../profileAddresses/ProfileAddresses';
import FirstOrder from '../profileOrders/FirstOrder';
import FirstAddress from '../profileAddresses/FirstAddress';
import NewAddress from '../profileAddresses/NewAddress';
import { Link } from 'react-router-dom';

const { profileInner } = PagesText;
const { head } = profileInner;
const { body } = profileInner;

const ProfileInnerBody = (props) => {
  const [route, setRoute] = useState("/profileInner")
  const { lang } = useSelector((state) => state.baristica);
  const { user } = props

  const location = useLocation();
  useEffect(() => {
    setRoute(location.pathname)
  },[location])
  

  const [newAddress, setNewAddress] = useState(false)
  return (
    <div className='profileInnerBody'>
      <div className='profileInnerBody-tabs container'>
        <Link to={"/profileInner"} className={`f20 ${route === "/profileInner" ? 'green800' : 'gray400'}`}>{lang ? head[lang].tabs.personal : ''}</Link>
        <Link to={"/personal_orders"} className={`f20 ${route === "/personal_orders" ? 'green800' : 'gray400'}`}>{lang ? head[lang].tabs.orders : ''}</Link>
        <Link to={"/personal_address"} className={`f20 ${route === "/personal_address" ? 'green800' : 'gray400'}`}>{lang ? head[lang].tabs.address : ''}</Link>
      </div>
      {route === "/personal_orders" ?
        <div className={`${body[lang]?.orders.current.length > 0 || body[lang]?.orders.ready.length > 0 || body[lang]?.orders.canceled.length > 0 ? "profileInnerBody-tab container" : "profileInnerBody-firstOrder"}`}>
          {body[lang]?.orders.current.length > 0 || body[lang]?.orders.ready.length > 0 || body[lang]?.orders.canceled.length > 0 ?
            <ProfileOrders />
            :
            <FirstOrder />
          }
        </div>
        : route === "/profileInner" ?
          <div className='profileInnerBody-tab container'>
            <ProfilePersonal user={user} />
          </div>
          : route === "/personal_address" ?
              <div className='profileInnerBody-tab container'>
                {newAddress ? <NewAddress setNewAddress={setNewAddress} /> : user?.addresses?.length > 0 ? <ProfileAddresses setNewAddress={setNewAddress} user={user} /> : <FirstAddress setNewAddress={setNewAddress} />}
              </div>
           : null}
    </div>
  )
}

export default ProfileInnerBody