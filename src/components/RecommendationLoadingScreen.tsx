import { useEffect, useState } from "react";
import aiBubble from "../assets/recommend-loading/ai-bubble.png";
import benefitIcon from "../assets/recommend-loading/benefit.png";
import conditionIcon from "../assets/recommend-loading/condition.png";
import duckScene from "../assets/recommend-loading/duck-scene.png";
import eligibilityIcon from "../assets/recommend-loading/eligibility.png";
import securityIcon from "../assets/recommend-loading/security-icon.png";
import spinnerBlue from "../assets/recommend-loading/spinner-blue.png";
import spinnerGreen from "../assets/recommend-loading/spinner-green.png";
import tipIcon from "../assets/recommend-loading/tip-icon.png";
import titleSparkle from "../assets/recommend-loading/title-sparkle.png";
import closeIcon from "../assets/common/close.png";
import { ProgressDots } from "./MyDataConnectScreen";

type RecommendationLoadingScreenProps = {
  isActive: boolean;
  onClose: () => void;
  onComplete: () => void;
};

const LOADING_SECONDS = 5;

const analysisCards = [
  {
    title: "상품 적격 여부 확인",
    description: ["고객님의 조건에 맞는", "상품인지 확인하고 있어요."],
    icon: eligibilityIcon,
    spinner: spinnerBlue,
  },
  {
    title: "상품 장점 분석",
    description: ["각 상품의 주요 장점과", "혜택을 분석하고 있어요."],
    icon: benefitIcon,
    spinner: spinnerBlue,
  },
  {
    title: "상환 조건 비교",
    description: ["금리, 한도, 상환 조건을", "비교하고 있어요."],
    icon: conditionIcon,
    spinner: spinnerGreen,
  },
];

function RecommendationLoadingScreen({ isActive, onClose, onComplete }: RecommendationLoadingScreenProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setIsDone(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, LOADING_SECONDS * 1000);

    return () => window.clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <div
      className={`screen-layer bg-[#141c4c] font-inter text-[#dcdce2] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="4-1 로딩"
      data-node-id="4:167"
      aria-hidden={!isActive}
    >
      <header className="absolute left-0 top-0 h-[82px] w-full">
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-lg font-bold">
          BRAVO AI
        </h1>
        <button
          className="absolute right-[25px] top-[26px] flex size-[30px] items-center justify-center rounded-[5px] border border-[#384074] bg-[#20285b]"
          type="button"
          onClick={onClose}
          aria-label="닫기"
        >
          <img alt="" className="size-3.5" src={closeIcon} />
        </button>
      </header>

      <ProgressDots />

      <h2 className="absolute left-1/2 top-[142px] w-[240px] -translate-x-1/2 text-center text-2xl font-semibold leading-[34px]">
        맞춤 상품 추천 중
      </h2>
      <img alt="" className="absolute right-[86px] top-[139px] h-5 w-[22px] object-contain" src={titleSparkle} />
      <p className="absolute left-1/2 top-[178px] -translate-x-1/2 whitespace-nowrap text-center text-xs text-[#a5a7b7]">
        AI가 고객님의 상황에 맞춘 상품을 추천하고 있어요.
      </p>

      <section className="recommend-duck-float absolute left-[49px] top-[221px] h-[221px] w-[323px]">
        <img alt="" className="absolute inset-0 size-full object-cover" src={duckScene} />
        <img alt="" className="absolute left-[7px] top-[95px] h-[31px] w-9 object-contain" src={aiBubble} />
        <img alt="" className="absolute right-[7px] top-0 h-[54px] w-[61px] object-contain" src={aiBubble} />
      </section>

      <p className="absolute left-1/2 top-[444px] w-[349px] -translate-x-1/2 text-center text-xs leading-[18px] text-[#abadc2]">
        상품 적격 여부, 상품 장점까지 한눈에 이해 가능하게
        <br />
        <span className="text-[#4677d6]">분석</span>하고 있어요.
      </p>

      <section className="absolute left-5 top-[505px] grid w-[362px] grid-cols-3 gap-[7px]">
        {analysisCards.map((card) => (
          <div key={card.title} className="relative h-[148px] rounded-[10px] border border-[#d6d7e5] bg-[#f2f5fb]">
            <img alt="" className="absolute left-1/2 top-[15px] size-8 -translate-x-1/2 object-contain" src={card.icon} />
            <p className="absolute left-0 top-[59px] w-full text-center text-[10px] font-medium text-[#47484f]">
              {card.title}
            </p>
            <p className="absolute left-0 top-[84px] w-full text-center text-[8px] leading-3 text-[#777779]">
              {card.description[0]}
              <br />
              {card.description[1]}
            </p>
            <div className="absolute bottom-[19px] left-1/2 flex -translate-x-1/2 items-center gap-[5px]">
              <span className="text-[8px] text-[#70709d]">{isDone ? "완료" : "분석중"}</span>
              <img
                alt=""
                className={`size-3.5 object-contain ${isDone ? "" : "recommend-spinner"}`}
                src={card.spinner}
              />
            </div>
          </div>
        ))}
      </section>

      <InfoBand
        className="top-[668px] bg-[#3e4c96]"
        icon={tipIcon}
        title="AI는 입력하신 정보와 마이데이터를 기반으로"
        description="가장 적합한 상품을 추천해드려요."
      />
      <InfoBand
        className="top-[750px] bg-[#3b55cf]"
        icon={securityIcon}
        title="고객님의 정보는 안전하게 보호되며,"
        description="추천 결과는 언제든지 다시 확인하실 수 있어요."
      />
    </div>
  );
}

type InfoBandProps = {
  className: string;
  icon: string;
  title: string;
  description: string;
};

function InfoBand({ className, icon, title, description }: InfoBandProps) {
  return (
    <section className={`absolute left-5 h-[70px] w-[362px] rounded-[10px] ${className}`}>
      <img alt="" className="absolute left-[15px] top-[15px] h-[39px] w-[38px] object-contain" src={icon} />
      <p className="absolute left-[68px] top-[18px] text-xs text-[#b5bbd8]">{title}</p>
      <p className="absolute left-[68px] top-[37px] whitespace-nowrap text-xs text-[#b0b7d5]">{description}</p>
    </section>
  );
}

export default RecommendationLoadingScreen;
