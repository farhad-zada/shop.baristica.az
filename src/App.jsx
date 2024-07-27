import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../src/assets/css/main.css";
import AppRoutes from "./AppRoutes";
import HeadBanner from "./components/layout/headBanner/HeadBanner";
import Header from "./components/layout/header/Header";
import SubHeader from "./components/layout/subHeader/SubHeader";
import Footer from "./components/layout/footer/Footer";

import { addCart } from "./utils/cartActions/cartActions";


import { setCart, setCompare, setLang, setToken, setUser } from "./redux/slice";
import { addCompare } from "./utils/compare/compare.util";
import UsersService from "./services/users.service";
import Loading from "./components/loading/Loading";

function App() {
  const {  token } = useSelector((state) => state.baristica);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const usersService = new UsersService()

  const getUser = async (token) => {
    setLoading(state => state = true)
    try {
      const response = await usersService.getUserInfo(token)
      dispatch(setUser(response.data))
      setLoading(state => state = false)

    } catch (error) {
      setLoading(state => state = false)
    }
  }


  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (!lang) {
      localStorage.setItem("lang", "az");
      dispatch(setLang(lang));
      return;
    }
    dispatch(setLang(lang));
    //add token
    const token = localStorage.getItem('baristicaToken')
    if (token) {
      dispatch(setToken(token))
    }
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

  useEffect(() => {
    if (token) {
      getUser(token)
    }
  }, [token])

  return (
    <div className="App">
      <Loading status={loading} />
      <HeadBanner />
      <SubHeader />
      <Header />
      <AppRoutes token={token} />
      <Footer />
    </div>
  );
}

export default App;
