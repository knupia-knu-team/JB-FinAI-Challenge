import { useEffect, useState } from "react";
import awardMark from "../assets/award-mark.png";
import logoDotBlue from "../assets/logo-dot-blue.png";
import logoDotOrange from "../assets/logo-dot-orange.png";
import starBlue from "../assets/star-blue.png";
import starOrange from "../assets/star-orange.png";

type LoadingScreenProps = {
  isActive: boolean;
};

const LOADING_LINES = ["어려운 금융", "AI가 쉽게 알려드려요!"];

function LoadingScreen({ isActive }: LoadingScreenProps) {
  const [typedLength, setTypedLength] = useState(0);
  const fullTextLength = LOADING_LINES.join("").length;

  useEffect(() => {
    if (!isActive) {
      setTypedLength(0);
      return undefined;
    }

    let isCancelled = false;
    let typingTimeout: number | undefined;

    const runTypingLoop = (length: number) => {
      if (isCancelled) {
        return;
      }

      setTypedLength(length);

      if (length >= fullTextLength) {
        typingTimeout = window.setTimeout(() => {
          runTypingLoop(0);
        }, 1000);
        return;
      }

      typingTimeout = window.setTimeout(() => {
        runTypingLoop(length + 1);
      }, 120);
    };

    runTypingLoop(0);

    return () => {
      isCancelled = true;
      if (typingTimeout) {
        window.clearTimeout(typingTimeout);
      }
    };
  }, [fullTextLength, isActive]);

  const firstLineLength = LOADING_LINES[0].length;
  const firstLine = LOADING_LINES[0].slice(0, Math.min(typedLength, firstLineLength));
  const secondLine = LOADING_LINES[1].slice(0, Math.max(0, typedLength - firstLineLength));
  const showCursorOnFirstLine = typedLength < firstLineLength;

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

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
        <div className="relative h-[79px] w-[215px]" data-node-id="22:103">
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

        <div className="relative mt-10 min-h-[68px] w-[290px]" data-node-id="22:307">
          <img alt="" className="absolute left-0 top-0 h-[19px] w-[17px] object-contain" src={starBlue} />
          <img alt="" className="absolute right-0 top-3 h-4 w-[15px] object-contain" src={starOrange} />
          <div className="mx-auto w-[235px] pt-[2px] text-center font-inter text-[18px] font-semibold leading-[25px] text-[#cbcbd5]">
            <p>
              {firstLine}
              {showCursorOnFirstLine ? <span className="ml-0.5 inline-block animate-pulse">|</span> : null}
            </p>
            <p>
              <span className="text-[#5c91ea]">{secondLine.slice(0, Math.min(2, secondLine.length))}</span>
              <span>{secondLine.slice(2)}</span>
              {!showCursorOnFirstLine ? <span className="ml-0.5 inline-block animate-pulse">|</span> : null}
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-[10px]">
          <div className="relative h-[31px] w-[34px]">
            <img alt="" className="absolute inset-0 h-full w-full object-contain" src={awardMark} />
            <p className="absolute left-[3px] top-[5px] w-6 font-inter text-base font-bold italic leading-[19px] text-[#2b2c4f]">
              AA
            </p>
          </div>
          <div>
            <p className="font-inter text-sm font-bold leading-[17px] text-[#bfbfca]">APP AWARD</p>
            <p className="font-inter text-[10px] font-light leading-[15px] text-[#8a8b9f]">25 WINNER</p>
          </div>
        </div>

        <p className="mt-8 text-center font-inter text-base font-normal leading-normal text-[#d1d0d8]">
          Provided by <span className="font-semibold">Jeonbuk Bank</span>
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
