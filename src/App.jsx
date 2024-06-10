import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../src/assets/css/main.css";
import AppRoutes from "./AppRoutes";
import HeadBanner from "./components/layout/headBanner/HeadBanner";
import Header from "./components/layout/header/Header";
import SubHeader from "./components/layout/subHeader/SubHeader";
import Footer from "./components/layout/footer/Footer";

import { setLang } from "./redux/slice";

function App() {
  const { lang } = useSelector((state) => state.baristica);

  const dispatch = useDispatch();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (!lang) {
      localStorage.setItem("lang", "az");
      dispatch(setLang(lang));
      return;
    }
    dispatch(setLang(lang));
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
