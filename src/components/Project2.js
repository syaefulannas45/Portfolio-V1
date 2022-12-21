import React from "react";

const Project2 = () => {
  return (
    <>
      <section id="project2" className="w-full bg-background pb-[145px]">
        <div className="flex w-full  justify-center space-x-[24px] pt-10 pl-6 pr-6 text-white lg:pt-[48px] lg:pl-[339px] lg:pr-[323px]">
          <h1 className="text-[32px] font-bold leading-[48px]">Code</h1>
          <p className="w-full text-[16px] font-normal leading-6">These are my projects created using HTML, CSS, JavaScript, React.js and CMS hub such as HubSpot and WordPress</p>
        </div>
        <div>
          <div className="mx-auto flex flex-col items-center pt-[88px] pl-4 pr-4 md:flex-row md:flex-wrap md:justify-evenly lg:w-[85%] lg:flex-row lg:justify-around lg:space-x-[16px] lg:pr-[56px] lg:pl-[56px]">
            <div className="relative mb-16 flex h-[320px] w-[279px] flex-col justify-end bg-card">
              <div className="absolute flex h-[126px] w-full items-center justify-center bg-card3 text-[16px] font-semibold leading-6 text-white">Husk Charcoal</div>
              <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
              <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
              <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
              <div className="flex justify-center">
                <button className="absolute bottom-[-20px] mx-auto rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 px-[59px] py-[10px] text-[16px] font-semibold leading-6 text-white">See Detail</button>
              </div>
            </div>
            <div className="relative mb-16 flex h-[320px] w-[279px] flex-col justify-end bg-card">
              <div className="absolute flex h-[126px] w-full items-center justify-center bg-card3 text-[16px] font-semibold leading-6 text-white">Personal Website</div>
              <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
              <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
              <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
              <div className="flex justify-center">
                <button className="absolute bottom-[-20px] mx-auto rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 px-[59px] py-[10px] text-[16px] font-semibold leading-6 text-white">See Detail</button>
              </div>
            </div>
            <div className="relative mb-16 flex h-[320px] w-[279px] flex-col justify-end bg-card">
              <div className="absolute flex h-[126px] w-full items-center justify-center bg-card3 text-[16px] font-semibold leading-6 text-white">Personal Website</div>
              <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
              <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
              <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
              <div className="flex justify-center">
                <button className="absolute bottom-[-20px] mx-auto rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 px-[59px] py-[10px] text-[16px] font-semibold leading-6 text-white">See Detail</button>
              </div>
            </div>
            <div className="relative mb-16 flex h-[320px] w-[279px] flex-col justify-end bg-card">
              <div className="absolute flex h-[126px] w-full items-center justify-center bg-card3 text-[16px] font-semibold leading-6 text-white">3D Instagram UI</div>
              <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
              <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
              <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
              <div className="flex justify-center">
                <button className="absolute bottom-[-20px] mx-auto rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 px-[59px] py-[10px] text-[16px] font-semibold leading-6 text-white">See Detail</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project2;
