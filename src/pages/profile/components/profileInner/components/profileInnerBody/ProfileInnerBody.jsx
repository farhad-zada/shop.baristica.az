import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json'
import Tabs from '../../../../../../components/tabs/Tabs';
import "./profileInnerBody.css"
import ProfilePersonal from '../profilePersonal/ProfilePersonal';
import ProfileOrders from '../profileOrders/ProfileOrders';
import ProfileAddresses from '../profileAddresses/ProfileAddresses';
import FirstOrder from '../profileOrders/FirstOrder';
import FirstAddress from '../profileAddresses/FirstAddress';
import NewAddress from '../profileAddresses/NewAddress';

const { profileInner } = PagesText;
const { head } = profileInner;
const { body } = profileInner;

const ProfileInnerBody = () => {
  const { lang } = useSelector((state) => state.baristica);
  const [newAddress, setNewAddress] = useState(false) 
  return (
    <div className='profileInnerBody'>
      <div className='profileInnerBody-tabs'>
        <Tabs>
          <div label={lang ? head[lang].tabs.personal : ''} activeColor={'red'}>
            <div className='profileInnerBody-tab container'>
              <ProfilePersonal /> 
            </div>
          </div>
          <div label={lang ? head[lang].tabs.orders : ''} activeColor={'red'}>
            <div className={`${body[lang]?.orders.current.length > 0 || body[lang]?.orders.ready.length > 0  || body[lang]?.orders.canceled.length > 0  ? "profileInnerBody-tab container" : "profileInnerBody-firstOrder"}`}>
              {body[lang]?.orders.current.length > 0  || body[lang]?.orders.ready.length > 0  || body[lang]?.orders.canceled.length > 0  ?
                <ProfileOrders />
                : 
                <FirstOrder/>
              }
            </div>
          </div>
          <div label={lang ? head[lang].tabs.address  : ''} activeColor={'red'}>
            <div className='profileInnerBody-tab container'>
              {newAddress ? <NewAddress/> : body[lang]?.address.addresses.length > 0 ? <ProfileAddresses setNewAddress={setNewAddress}/> : <FirstAddress setNewAddress={setNewAddress}/>}
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default ProfileInnerBody