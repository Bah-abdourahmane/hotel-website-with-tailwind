import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

import Img1 from "../assets/bannerImg/1.jpg";
import Img2 from "../assets/bannerImg/2.jpg";
import Img3 from "../assets/bannerImg/3.jpg";

const BannerSlider = () => {
  const Slides = [
    {
      title: "Your Luxury Hotel For Vacation",
      bg: Img1,
      btnText: "SEE OUR ROOMS",
    },
    {
      title: "Your Luxury Hotel For Vacation",
      bg: Img2,
      btnText: "SEE OUR ROOMS",
    },
    {
      title: "Your Luxury Hotel For Vacation",
      bg: Img3,
      btnText: "SEE OUR ROOMS",
    },
  ];
  return (
    <Swiper
     modules={[EffectFade,Autoplay]}
     effect="fade"
     loop={true}
     autoplay={{
      delay:3000,
      disableOnInteraction: false
     }}
     className="h-[600px] lg:h-[590px] bg-black ">
      {Slides.map((item, index) => (
        <SwiperSlide key={index} className="w-full h-full flex items-center justify-center">
          <div className="text-center text-white z-30">
            <h3 className="uppercase font-third tracking-[6px] mb-5 ">Just Enjoy and relax</h3>
            <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-5">{item.title}</h1>
            <button className="btn btn-lg btn-primary mx-auto">{item.btnText}</button>
          </div>
          <div className="absolute top-0 w-full h-full -z-10">
            <img src={item.bg} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="overlay top-0 absolute w-full h-full bg-black/70 -z-10"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
