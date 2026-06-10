import { useEffect } from "react";
import connectHero from "../assets/mydata/connect-hero.png";
import completeBubble from "../assets/mydata/complete-bubble.png";
import securityShield from "../assets/common/security-shield.png";
import spinnerBlue from "../assets/recommend-loading/spinner-blue.png";
import BravoHeader from "./common/BravoHeader";
import { ProgressDots } from "./MyDataConnectScreen";

type MyDataLoadingScreenProps = {
  isActive: boolean;
  onClose: () => void;
  onComplete: () => void;
};

const MYDATA_LOADING_MS = 5000;

const loadingSteps = [
  {
    title: "동의 항목 확인",
    description: "고객님의 동의 여부를 확인하고 있어요.",
  },
  {
    title: "마이데이터 연결",
    description: "안전한 표준 API로 연결을 준비하고 있어요.",
  },
  {
    title: "정보 조회 준비",
    description: "추천에 필요한 정보만 빠르게 불러오고 있어요.",
  },
];

function MyDataLoadingScreen({
  isActive,
  onClose,
  onComplete,
}: MyDataLoadingScreenProps) {
  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      onComplete();
    }, MYDATA_LOADING_MS);

    return () => window.clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <div
      className={`screen-layer bg-[#f7f8fc] font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="3-2-1 연동 로딩"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />
      <ProgressDots />

      <section className="absolute left-[30px] top-[156px]">
        <h2 className="text-base font-semibold leading-6 text-[#4b506c]">
          마이데이터 정보를
          <br />
          안전하게 불러오고 있어요.
        </h2>
        <p className="mt-4 text-xs leading-5 text-[#7d819a]">
          동의하신 정보를 바탕으로
          <br />
          더 정확한 추천을 준비하고 있어요.
        </p>
      </section>

      <div className="absolute left-[198px] top-[129px] h-[181px] w-[169px]">
        <img alt="" className="absolute right-[6px] top-0 h-[30px] w-[28px] object-contain" src={completeBubble} />
        <img alt="" className="absolute inset-0 h-full w-full object-contain" src={connectHero} />
      </div>

      <section className="absolute left-5 top-[327px] h-[216px] w-[362px] rounded-[20px] border border-[#e1e8f5] bg-white px-5 py-[18px]">
        {loadingSteps.map((step, index) => (
          <div
            key={step.title}
            className={`relative flex h-[60px] items-center gap-4 ${index !== loadingSteps.length - 1 ? "border-b border-[#ececec]" : ""}`}
          >
            <div className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ecf3fd]">
              <img alt="" className="size-[18px] recommend-spinner object-contain" src={spinnerBlue} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#4e5361]">{step.title}</p>
              <p className="mt-[3px] text-[11px] leading-4 text-[#7d819a]">{step.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="absolute left-5 top-[566px] h-[90px] w-[362px] rounded-[18px] bg-[#ecf3fd]">
        <img alt="" className="absolute left-[21px] top-[22px] h-[44px] w-[38px] object-contain" src={securityShield} />
        <p className="absolute left-[76px] top-[22px] text-xs leading-5 text-[#656d91]">
          조회 중인 정보는 암호화되어 처리되며,
          <br />
          동의한 목적 외에는 사용되지 않습니다.
        </p>
      </section>

      <div className="absolute left-1/2 top-[695px] flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_8px_20px_rgba(66,90,233,0.08)]">
        <img alt="" className="size-4 recommend-spinner object-contain" src={spinnerBlue} />
        <span className="text-[11px] font-medium text-[#425ae9]">정보 확인 중</span>
      </div>
    </div>
  );
}

export default MyDataLoadingScreen;
