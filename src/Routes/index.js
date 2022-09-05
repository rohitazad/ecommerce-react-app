import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePageContainer from "../Container/Home";
import FooterComponent from "../Component/Footer";
import HeaderComponent from "../Component/Header";
import CartPageContainer from "../Container/Card"; 

const RoutesAllPages = ()=>{
    return (
        <>
        <Router>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<HomePageContainer />} />
                <Route path="/cart" element={<CartPageContainer />} />
            </Routes>
            <FooterComponent />
        </Router>
        </>
    )
}

export default RoutesAllPages;