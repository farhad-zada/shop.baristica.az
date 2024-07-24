
import { useSelector } from 'react-redux';
import PageText from '../../content/PagesText.json'
import Galery from '../../components/galery/Galery';
import './productDetail.css'
import ProductMainInfo from './components/productMainInfo/ProductMainInfo';
import ProductDetailBody from './components/productDetailBody/ProductDetailBody';
import Subscriptions from '../../components/subscriptions/Subscriptions';
import Interested from './components/interested/Interested';

const { productDetail, interested } = PageText
export default function ProductDetail() {
    const { lang } = useSelector((state) => state.baristica);
    return (
        <div className='container'>
            <div className="productDetail">
                <div className="productDetail-head flex j-between">
                    <div className="productDetail-head_left w-48">
                        <h2 className='f16 gray600'>Baristica / {lang ? productDetail[lang]?.heading : ''}</h2>
                        <Galery />
                    </div>
                    <div className="productDetail-head_right w-48">
                        <ProductMainInfo info={lang ? productDetail[lang]?.productMainInfo : ''} />
                    </div>
                </div>
                <ProductDetailBody info={lang ? productDetail[lang]?.body : ''} />
                <Interested info={lang ? interested[lang] : {}} />
                <Subscriptions />
            </div>
        </div>
    );
}
