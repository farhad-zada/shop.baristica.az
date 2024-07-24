import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../src/assets/css/main.css";
import AppRoutes from "./AppRoutes";
import HeadBanner from "./components/layout/headBanner/HeadBanner";
import Header from "./components/layout/header/Header";
import SubHeader from "./components/layout/subHeader/SubHeader";
import Footer from "./components/layout/footer/Footer";

import { addCart } from "./utils/cartActions/cartActions";


import { setCart, setCompare, setLang } from "./redux/slice";
import { addCompare } from "./utils/compare/compare.util";

function App() {
  const { lang } = useSelector((state) => state.baristica);



  const dispatch = useDispatch()


  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (!lang) {
      localStorage.setItem("lang", "az");
      dispatch(setLang(lang));
      return;
    }
    dispatch(setLang(lang));
    // set cart array to storage
    const cart = addCart()
    dispatch(setCart(JSON.parse(cart)))

    // set compare array to storage
    const compare = JSON.parse(localStorage.getItem('compare'))
    if (compare?.length > 0) {
      dispatch(setCompare(compare))
    }
    addCompare()
  }, []);

  return (
    <div className="App">
      <HeadBanner />
      <SubHeader />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
