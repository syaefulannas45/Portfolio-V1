import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Skill = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section id="skill" className="w-full bg-backgroundColor">
        <div className="mx-auto w-full bg-backgroundColor pt-[16px] pb-[26px] pl-6 pr-4 lg:w-[85%] lg:pr-[73px] lg:pl-[91px]">
          <div className="rounded-2xl bg-card w-full ">
            <Slider {...settings} className="w-[80%] mx-auto">
              <div className="rounded-2xl bg-card2">
                <div className="pl-[21px] pt-[25px]">
                  <img src="/images/card.svg" alt="logo" className="h-[45px] w-[45px]" />
                </div>
                <div className="mt-[46px] pl-[21px] pb-[29px]">
                  <h1 className="text-[16px] font-semibold leading-6 text-white">UI Designer</h1>
                  <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                  <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Sept 2019 - Present</p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-t from-gradient-500 to-gradient-600">
                <div className="pl-[37px] pt-[31px]">
                  <img src="/images/card.svg" alt="logo" className="h-[45px] w-[45px]" />
                </div>
                <div className="mt-[46px] pl-[28px] pb-[29px]">
                  <h1 className="text-[16px] font-semibold leading-6 text-white">Senior Front-End Developer</h1>
                  <p className="mt-[8px] text-[12px] font-medium leading-[18px] text-white">Tech Company</p>
                  <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Jan - Aug 2021</p>
                </div>
              </div>
              <div className="rounded-2xl bg-card2" id="2">
                <div className="pl-[25px] pt-[39px]">
                  <img src="/images/card1.svg" alt="logo" className="h-[45px] w-[45px]" />
                </div>
                <div className="mt-[46px] mr-[28px] pl-[21px] pb-[29px]">
                  <h1 className="text-[16px] font-semibold leading-6 text-white">Front-End Dev</h1>
                  <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                  <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Nov 2019 - Jan 2021</p>
                </div>
              </div>
              <div className="rounded-2xl bg-card2">
                <div className="pl-[25px] pt-[39px]">
                  <img src="/images/card1.svg" alt="logo" className="h-[45px] w-[45px]" />
                </div>
                <div className="mt-[46px] mr-[28px] pl-[21px] pb-[29px]">
                  <h1 className="text-[16px] font-semibold leading-6 text-white">Front-End Dev</h1>
                  <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                  <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Nov 2019 - Jan 2021</p>
                </div>
              </div>
              <div className="rounded-2xl bg-card2">
                <div className="pl-[21px] pt-[25px]">
                  <img src="/images/card.svg" alt="logo" className="h-[45px] w-[45px]" />
                </div>
                <div className="mt-[46px] pl-[21px] pb-[29px]">
                  <h1 className="text-[16px] font-semibold leading-6 text-white">UI Designer</h1>
                  <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                  <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Sept 2019 - Present</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
