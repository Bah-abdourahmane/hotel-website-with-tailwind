import React from "react";
import Rooms from "../components/Rooms";
import BannerSlider from "../components/BannerSlider";
import BookForm from "../components/BookForm";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto relative">
        <div className="bg-accent/20 mt-0 p-4 lg:absolute lg:shadow-xl lg:left-0 lg:right-0 lg:-top-11 lg:p-0 lg:z-30">
          <BookForm />
        </div>
      </div>
      <Rooms />
    </div>
  );
};

export default Home;
