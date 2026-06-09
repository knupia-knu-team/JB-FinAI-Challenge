import { useState } from "react";
import aiBubble from "../assets/common/ai-bubble.png";
import mascotHero from "../assets/stay/mascot-hero.png";
import nextChevron from "../assets/common/next-chevron.png";
import periodIcon from "../assets/common/status-badge.png";
import smallMark from "../assets/stay/small-mark.png";
import sparkleLeft from "../assets/stay/sparkle-left.png";
import sparkleRight from "../assets/stay/sparkle-right.png";
import summaryMascot from "../assets/stay/summary-mascot.png";
import visaIcon from "../assets/stay/visa-icon.png";
import BravoHeader from "./common/BravoHeader";

type StayPeriodScreenProps = {
  isActive: boolean;
  selectedVisa: string;
  initialMonths: number;
  onBack: () => void;
  onClose: () => void;
  onNext: (months: number) => void;
};

function StayPeriodScreen({
  isActive,
  selectedVisa,
  initialMonths,
  onBack,
  onClose,
  onNext,
}: StayPeriodScreenProps) {
  const [months, setMonths] = useState(initialMonths);
  const percentage = ((months - 1) / 35) * 100;

  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="2-2 정보입력"
      data-node-id="15:18"
      aria-hidden={!isActive}
    >
      <BravoHeader onBack={onBack} onClose={onClose} showLogo={false} />

      <div className="absolute left-1/2 top-[92px] h-[9px] w-36 -translate-x-1/2">
        <div className="absolute left-[4px] top-1/2 h-px w-[136px] -translate-y-1/2 bg-[#dfe1e8]" />
        <div className="absolute left-0 top-0 size-[9px] rounded-full bg-[#4f72f2]" />
        <div className="absolute left-[45px] top-0 size-[9px] rounded-full bg-[#4f72f2]" />
        <div className="absolute left-[90px] top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
        <div className="absolute right-0 top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
      </div>

      <section className="absolute left-[25px] top-[126px] h-[187px] w-[358px]">
        <div className="absolute left-0 top-[37px] flex size-6 items-center justify-center rounded-full border border-[#3e57f2] bg-[#445beb] pb-px text-base font-bold text-[#dbe0f9]">
          2
        </div>
        <h2 className="absolute left-[34px] top-[36px] text-base font-semibold leading-6 text-[#4b506c]">
          체류기간은
          <br />
          얼마나 남았나요?
        </h2>
        <p className="absolute left-[34px] top-[93px] text-xs text-[#7d819a]">
          남은 체류기간을 선택해주세요.
        </p>
        <div className="absolute left-[103px] top-[136px] -rotate-5 text-center text-[10px] leading-[14px] text-[#7a8be9]">
          <img alt="" className="absolute -left-[7px] top-[2px] h-2.5 w-2" src={smallMark} />
          정확한 정보가
          <br />
          맞춤상품추천의
          <br />
          첫걸음이에요!
        </div>
        <img alt="" className="absolute right-0 top-0 h-[187px] w-[175px] object-contain" src={mascotHero} />
        <img alt="" className="absolute right-[9px] top-1 h-[37px] w-[46px]" src={aiBubble} />
      </section>

      <section className="absolute left-5 top-[331px] h-[182px] w-[362px] rounded-[20px] bg-[#f7f8fc] px-5 py-[18px]">
        <p className="text-sm font-medium text-[#585b7b]">남은 체류기간</p>
        <div className="mt-[14px] flex items-end justify-center text-[#5067eb]">
          <span className="text-[35px] font-bold leading-[42px]">{months}</span>
          <span className="mb-[6px] ml-1 text-sm font-semibold">개월</span>
        </div>
        <div className="relative mx-[35px] mt-3 h-8">
          <div className="absolute left-0 top-[13px] h-[5px] w-full rounded-full bg-[#dfe2ea]" />
          <div
            className="absolute left-0 top-[13px] h-[5px] rounded-full bg-[#5067eb]"
            style={{ width: `${percentage}%` }}
          />
          <input
            className="stay-range absolute inset-x-0 top-0 h-8 w-full"
            type="range"
            min={1}
            max={36}
            value={months}
            onChange={(event) => setMonths(Number(event.target.value))}
            aria-label="남은 체류기간"
          />
        </div>
        <div className="mt-[18px] flex justify-between text-xs text-[#8a8da3]">
          <span>1개월</span>
          <span>36개월 이상</span>
        </div>
      </section>

      <section className="absolute left-5 top-[533px] h-[231px] w-[362px] rounded-[20px] bg-[#f7f8fc]">
        <img alt="" className="absolute left-[17px] top-[35px] h-[163px] w-[170px] object-contain" src={summaryMascot} />
        <img alt="" className="absolute left-[21px] top-[122px] h-[22px] w-[19px]" src={sparkleLeft} />
        <img alt="" className="absolute left-[162px] top-11 h-[22px] w-[18px]" src={sparkleRight} />
        <div className="absolute left-[215px] top-[31px] flex h-6 w-[58px] items-center justify-center rounded-[15px] border border-[#3b53f2] bg-[#445ceb] text-[10px] font-medium text-[#aebaf4]">
          AI 요약
        </div>
        <p className="absolute left-[215px] top-[66px] text-sm font-medium text-[#585b7b]">
          현재 입력 기준
        </p>
        <div className="absolute left-[215px] top-[96px] flex items-center gap-2.5 text-[10px] text-[#626682]">
          <img alt="" className="h-[18px] w-[17px]" src={visaIcon} />
          <span>{selectedVisa}비자</span>
        </div>
        <div className="absolute left-[215px] top-[119px] flex items-center gap-2.5 text-[10px] text-[#535775]">
          <img alt="" className="h-[17px] w-4" src={periodIcon} />
          <span>체류기간{months}개월</span>
        </div>
        <p className="absolute left-[215px] top-[146px] text-xs leading-[18px] text-[#8c8ea4]">
          이 정보를 바탕으로
          <br />
          가입 가능한 상품을
          <br />
          찾아드릴게요!
        </p>
      </section>

      <div className="absolute bottom-[30px] left-5 flex h-[50px] w-[362px] gap-[9px]">
        <button
          className="h-full w-[130px] rounded-[15px] bg-[#f2f2f6] text-sm font-medium text-[#4b5070]"
          type="button"
          onClick={onBack}
        >
          이전
        </button>
        <button
          className="relative h-full flex-1 rounded-[15px] bg-[#425ae9] text-sm font-medium text-[#e5e8fa]"
          type="button"
          onClick={() => onNext(months)}
        >
          다음
          <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
        </button>
      </div>
    </div>
  );
}

export default StayPeriodScreen;
