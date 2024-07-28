import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "../../../../components/tabs/Tabs";
import "./homeProducts.css";
import PagesText from "../../../../content/PagesText.json";
import HomeProductsElements from "./HomeProductsElements/HomeProductsElements";
import ProductsService from "../../../../services/products.service";
import Loading from "../../../../components/loading/Loading";

const { home } = PagesText;
const { body } = home;

export default function HomeProducts() {
  const { lang } = useSelector((state) => state.baristica);

  const [loading, setLoading] = useState(false)

  const [newProducts,setNewProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const productsService = new ProductsService()

  const getProducts = async () => {
    setLoading(true);
    const token = localStorage.getItem('baristicaToken');

    try {
      const [newProducts, popularProducts] = await Promise.all([
        productsService.getFilteredProducts(token, 'key=new'),
        productsService.getFilteredProducts(token, 'key=popular')
      ]);

      setNewProducts(newProducts.data)
      setPopularProducts(popularProducts.data)

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="homeProducts">
      <Loading status={loading} />
      <div className="container">
        <div className="homeProducts-tabs">
          <Tabs>
            <div label={lang ? body[lang]?.products.new : ''}>
              <HomeProductsElements products={newProducts ? newProducts : []} setProducts={setNewProducts} />
            </div>
            <div label={lang ? body[lang]?.products.popular : ''}>
              <HomeProductsElements products={popularProducts ? popularProducts : []} setProducts={setPopularProducts} />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
