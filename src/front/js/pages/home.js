import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import Banner from "../component/Banner";
import Reviews from "../component/Reviews";
import BakeryCarousel from "../component/BakeryCarousel";
import FeaturedProductsCarousel from "../component/FeaturedProductsCarousel";
import SupermarketCarousel from "../component/SupermarketCarousel";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Reviews />
      <Banner />
      <SupermarketCarousel />
      <FeaturedProductsCarousel />
      <BakeryCarousel />
      <Footer />
    </div>
  );
};
