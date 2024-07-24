import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../../../../../content/PagesText.json'
import Tabs from '../../../../../../components/tabs/Tabs'
import "../../profileInner.css"
const { profileInner } = PagesText;
const { body } = profileInner;

const ProfileOrders = () => {
  const { lang } = useSelector((state) => state.baristica);
  return (
    <div className='profileOrders'>
      <Tabs>
        <div label={`${lang ? body[lang].orders.tabs.current : ''} (${lang ? body[lang].orders.current.length : ''})`} activeColor={'red'}>
          <div className='profileInnerBody-tab container'>
            <div className='profileOrders-table'>
              <div className='profileOrders-table_titles flex a-center'>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.number : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.products : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.date : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.price : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.status : ''}
                </div>
              </div>
              {lang && body[lang].orders.current.map((order) => (
                <div className='profileOrders-table_titles flex a-center'>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.number}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.products}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.date}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.price}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div label={`${lang ? body[lang].orders.tabs.ready : ''} (${lang ? body[lang].orders.ready.length : ''})`} activeColor={'red'}>
          <div className='profileInnerBody-tab container'>
            <div className='profileOrders-table'>
              <div className='profileOrders-table_titles flex a-center'>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.number : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.products : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.date : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.price : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.status : ''}
                </div>
              </div>
              {lang && body[lang].orders.ready.map((order) => (
                <div className='profileOrders-table_titles flex a-center'>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.number}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.products}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.date}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.price}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div label={`${lang ? body[lang].orders.tabs.canceled : ''} (${lang ? body[lang].orders.canceled.length : ''})`} activeColor={'red'}>
          <div className='profileInnerBody-tab container'>
            <div className='profileOrders-table'>
              <div className='profileOrders-table_titles flex a-center'>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.number : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.products : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.date : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.price : ''}
                </div>
                <div className='profileOrders-table_title green800 f16'>
                  {lang ? body[lang].orders.table.status : ''}
                </div>
              </div>
              {lang && body[lang].orders.canceled.map((order) => (
                <div className='profileOrders-table_titles flex a-center'>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.number}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.products}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.date}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.price}
                  </div>
                  <div className='profileOrders-table_title green800 f16'>
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default ProfileOrders