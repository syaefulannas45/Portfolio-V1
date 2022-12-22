import React from "react";

const Connects = () => {
  return (
    <>
      <section id="connect" className="bg-background1">
        <div className="w-full pt-[53px]">
          <h1 className="text-center text-[32px] font-bold leading-[48px] text-[#ffff]">Let’s Connect and Say Hi</h1>
        </div>
        <div className="mx-auto flex w-[86%] flex-row flex-wrap pt-[37px] pb-12 lg:flex lg:space-x-[16px] lg:px-[96px] justify-evenly">
          <div className="w-[260px] rounded-lg bg-card pl-[16px] pr-[44px] mb-10">
            <img src="/images/linked.png" alt="logo" className="h-[100px] w-[84px] pt-[21px] " />
            <h1 className="pt-[26px] text-[24px] font-bold leading-9 text-white">LinkedIn</h1>
            <button className="w-full rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 py-[10px] text-[16px] font-semibold leading-6 text-white mb-[20px] mt-[26px]">Follow Me</button>
          </div>
          <div className="w-[260px] rounded-lg bg-card pl-[16px] pr-[44px] mb-10">
            <img src="/images/ig.png" alt="logo" className="h-[100px] w-[84px] pt-[21px] " />
            <h1 className="pt-[26px] text-[24px] font-bold leading-9 text-white">Instagram</h1>
            <button className="w-full rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 py-[10px] text-[16px] font-semibold leading-6 text-white mb-[20px] mt-[26px]">Follow Me</button>
          </div>
          <div className="w-[260px] rounded-lg bg-card pl-[16px] pr-[44px] mb-10">
            <img src="/images/drible.png" alt="logo" className="h-[100px] w-[84px] pt-[21px] " />
            <h1 className="pt-[26px] text-[24px] font-bold leading-9 text-white">Dribble</h1>
            <button className="w-full rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 py-[10px] text-[16px] font-semibold leading-6 text-white mb-[20px] mt-[26px]">Follow Me</button>
          </div>
          <div className="w-[260px] rounded-lg bg-card pl-[16px] pr-[44px] mb-10">
            <img src="/images/tiktok.png" alt="logo" className="h-[100px] w-[84px] pt-[21px] " />
            <h1 className="pt-[26px] text-[24px] font-bold leading-9 text-white">Tiktok</h1>
            <button className="w-full rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 py-[10px] text-[16px] font-semibold leading-6 text-white mb-[20px] mt-[26px]">Follow Me</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connects;
