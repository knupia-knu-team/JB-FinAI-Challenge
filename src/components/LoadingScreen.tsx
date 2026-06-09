import loadingBackground from "../assets/loading-background-new.png";
import aiUnderline from "../assets/ai-underline.png";
import awardMark from "../assets/award-mark.png";
import logoDotBlue from "../assets/logo-dot-blue.png";
import logoDotOrange from "../assets/logo-dot-orange.png";
import starBlue from "../assets/star-blue.png";
import starOrange from "../assets/star-orange.png";
import DuckCharacter from "./DuckCharacter";

type LoadingScreenProps = {
  isActive: boolean;
};

function LoadingScreen({ isActive }: LoadingScreenProps) {
  return (
    <div
      className={`screen-layer bg-[#12143a] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="0 랜딩2"
      data-node-id="36:312"
      aria-hidden={!isActive}
    >
      <div className="absolute inset-0 bg-[#12143a]" />

      <div
        className="absolute left-[94px] top-[188px] h-[79px] w-[215px]"
        data-node-id="22:103"
      >
        <img
          alt=""
          className="absolute left-0 top-[23px] h-5 w-[19px] object-contain"
          data-name="Image"
          data-node-id="22:99"
          src={logoDotOrange}
        />
        <p
          className="absolute left-[27px] top-[-13px] font-righteous text-[60px] leading-none tracking-normal text-[#f0f0f2]"
          data-node-id="22:101"
        >
          bravo
        </p>
        <img
          alt=""
          className="absolute right-0 top-[23px] h-5 w-[19px] object-contain"
          data-name="Image"
          data-node-id="22:98"
          src={logoDotBlue}
        />
        <p
          className="absolute left-[67px] top-[54px] font-inter text-[22px] font-bold leading-none text-[#e1e1e6]"
          data-node-id="22:100"
        >
          KOREA
        </p>
      </div>

      <div
        className="absolute left-[69px] top-[306px] h-[62px] w-[255px]"
        data-node-id="22:307"
      >
        <img
          alt=""
          className="absolute left-0 top-0 h-[19px] w-[17px] object-contain"
          data-name="Image"
          data-node-id="22:80"
          src={starBlue}
        />
        <img
          alt=""
          className="absolute right-0 top-3 h-4 w-[15px] object-contain"
          data-name="Image"
          data-node-id="22:79"
          src={starOrange}
        />
        <div
          className="absolute left-[73px] top-[-1px] font-inter text-[18px] font-semibold leading-[25px] text-[#cbcbd5]"
          data-node-id="22:94"
        >
          <p className="w-[147px] text-center">어려운 금융,</p>
          <p className="w-[170px] whitespace-nowrap text-left">가 쉽게 알려드려요!</p>
        </div>
        <p
          className="absolute left-[45px] top-[22px] -rotate-3 font-inter text-[22px] leading-none text-[#5c91ea]"
          data-node-id="22:95"
        >
          AI
        </p>
        <img
          alt=""
          className="absolute left-[44px] top-[47px] h-[5px] w-7 object-fill"
          data-name="Image"
          data-node-id="22:78"
          src={aiUnderline}
        />
      </div>

      <img
        alt=""
        className="absolute left-0 top-[398px] h-[262px] w-[402px] object-cover"
        data-name="Image"
        data-node-id="22:108"
        src={loadingBackground}
      />
      <DuckCharacter className="absolute left-[55px] top-[456px] h-[204px] w-[292px]" />

      <div
        className="absolute left-[137px] top-[738px] h-8 w-32"
        data-node-id="22:115"
      >
        <img
          alt=""
          className="absolute left-0 top-px h-[31px] w-[34px] object-contain"
          data-name="Image"
          data-node-id="22:110"
          src={awardMark}
        />
        <p
          className="absolute left-[3px] top-[5px] w-6 font-inter text-base font-bold italic leading-[19px] text-[#2b2c4f]"
          data-node-id="22:113"
        >
          AA
        </p>
        <p
          className="absolute left-[43px] top-[-1px] w-[85px] font-inter text-sm font-bold leading-[17px] text-[#bfbfca]"
          data-node-id="22:112"
        >
          APP AWARD
        </p>
        <p
          className="absolute left-[43px] top-[17px] w-[63px] font-inter text-[10px] font-light leading-[15px] text-[#8a8b9f]"
          data-node-id="22:111"
        >
          25 WINNER
        </p>
      </div>

      <p
        className="absolute left-1/2 top-[785px] -translate-x-1/2 whitespace-nowrap text-center font-inter text-base font-normal leading-normal text-[#d1d0d8]"
        data-node-id="15:390"
      >
        Provided by <span className="font-semibold">Jeonbuk Bank</span>
      </p>
    </div>
  );
}

export default LoadingScreen;
