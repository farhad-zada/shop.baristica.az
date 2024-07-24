import React from "react";
import { useSelector } from "react-redux";
import Tabs from "../../../../components/tabs/Tabs";
import "./homeProducts.css";
import PagesText from "../../../../content/PagesText.json";
import HomeProductsElements from "./HomeProductsElements/HomeProductsElements";

const { home } = PagesText;
const { body } = home;

export default function HomeProducts() {
  const { lang } = useSelector((state) => state.baristica);

  return (
    <div className="homeProducts">
      <div className="container">
        <div className="homeProducts-tabs">
          <Tabs>
            <div label={lang ? body[lang]?.products.new : ''}>
              <HomeProductsElements />
            </div>
            <div label={lang ? body[lang]?.products.popular : ''}></div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
