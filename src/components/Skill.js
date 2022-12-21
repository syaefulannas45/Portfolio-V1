import React from "react";

const Skill = () => {
  return (
    <>
      <section id="skill" className="w-full bg-backgroundColor">
        <div className="mx-auto w-full bg-backgroundColor pt-[16px] pb-[16px] pl-4 pr-4 lg:w-[85%] lg:pr-[73px] lg:pl-[91px]">
          <div className="scroll-custom flex h-[302px] w-full flex-col flex-wrap overflow-hidden overflow-x-scroll rounded-[16px] bg-card lg:w-[1118px]">
            <div className="my-[39px] ml-[23px] mr-[23px] w-[200px] rounded-xl bg-card2">
              <div className="pl-[21px] pt-[25px]">
                <img src="/images/card.svg" alt="logo" className="h-[45px] w-[45px]" />
              </div>
              <div className="mt-[46px] pl-[21px] pb-[29px]">
                <h1 className="text-[16px] font-semibold leading-6 text-white">UI Designer</h1>
                <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Sept 2019 - Present</p>
              </div>
            </div>
            <div className="my-[16px] mr-[33px] w-[220px] rounded-xl bg-gradient-to-t from-gradient-500 to-gradient-600">
              <div className="pl-[37px] pt-[31px]">
                <img src="/images/card.svg" alt="logo" className="h-[45px] w-[45px]" />
              </div>
              <div className="mt-[46px] pl-[28px] pb-[29px]">
                <h1 className="text-[16px] font-semibold leading-6 text-white">Senior Front-End Developer</h1>
                <p className="mt-[8px] text-[12px] font-medium leading-[18px] text-white">Tech Company</p>
                <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Jan - Aug 2021</p>
              </div>
            </div>
            <div className="my-[39px] ml-[28px] w-[200px] rounded-xl bg-card2">
              <div className="pl-[25px] pt-[39px]">
                <img src="/images/card1.svg" alt="logo" className="h-[45px] w-[45px]" />
              </div>
              <div className="mt-[46px] mr-[28px] pl-[21px] pb-[29px]">
                <h1 className="text-[16px] font-semibold leading-6 text-white">Front-End Dev</h1>
                <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Nov 2019 - Jan 2021</p>
              </div>
            </div>
            <div className="my-[39px] ml-[28px] w-[200px] rounded-xl bg-card2">
              <div className="pl-[25px] pt-[39px]">
                <img src="/images/card1.svg" alt="logo" className="h-[45px] w-[45px]" />
              </div>
              <div className="mt-[46px] mr-[28px] pl-[21px] pb-[29px]">
                <h1 className="text-[16px] font-semibold leading-6 text-white">Front-End Dev</h1>
                <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Nov 2019 - Jan 2021</p>
              </div>
            </div>
            <div className="my-[39px] ml-[28px] mr-[23px] w-[200px] rounded-xl bg-card2">
              <div className="pl-[21px] pt-[25px]">
                <img src="/images/card.svg" alt="logo" className="h-[45px] w-[45px]" />
              </div>
              <div className="mt-[46px] pl-[21px] pb-[29px]">
                <h1 className="text-[16px] font-semibold leading-6 text-white">UI Designer</h1>
                <p className="lead-[18px] mt-[8px] text-[12px] font-medium text-white">Tech Company</p>
                <p className="mt-[8px] text-[12px] font-light leading-[18px] text-white">Sept 2019 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
