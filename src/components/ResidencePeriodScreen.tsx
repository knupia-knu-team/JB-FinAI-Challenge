import { useState } from "react";
import nextChevron from "../assets/common/next-chevron.png";
import mascot from "../assets/residence/mascot.png";
import period1y3y from "../assets/residence/period-1y-3y.png";
import period3m1y from "../assets/residence/period-3m-1y.png";
import periodOver3y from "../assets/residence/period-over-3y.png";
import periodUnder3m from "../assets/residence/period-under-3m.png";
import type { ResidencePeriodId } from "../userProfile";
import BravoHeader from "./common/BravoHeader";

type ResidencePeriodScreenProps = {
  isActive: boolean;
  initialPeriod: ResidencePeriodId | "";
  onBack: () => void;
  onClose: () => void;
  onNext: (period: ResidencePeriodId) => void;
};

const residenceOptions: Array<{ id: ResidencePeriodId; label: string; icon: string }> = [
  { id: "under-3m", label: "3개월 미만", icon: periodUnder3m },
  { id: "3m-1y", label: "3개월 ~ 1년", icon: period3m1y },
  { id: "1y-3y", label: "1년 ~ 3년", icon: period1y3y },
  { id: "over-3y", label: "3년 이상", icon: periodOver3y },
];

function ResidencePeriodScreen({
  isActive,
  initialPeriod,
  onBack,
  onClose,
  onNext,
}: ResidencePeriodScreenProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<ResidencePeriodId | "">(initialPeriod);

  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="2-3 정보입력"
      data-node-id="15:209"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />
      <ProgressDots />

      <section className="absolute left-[25px] top-[125px] h-[151px] w-[353px]">
        <div className="absolute left-0 top-[38px] flex h-6 w-[25px] items-center justify-center rounded-[26px] border border-[#3e57f2] bg-[#445beb] pb-px text-base font-bold text-[#dbe0f9]">
          3
        </div>
        <h2 className="absolute left-[34px] top-[36px] text-base font-semibold leading-6 text-[#4b506c]">
          한국에 <span className="text-[#425ae9]">거주한 기간</span>은
          <br />
          <span className="text-[#464a68]">얼마나 되시나요?</span>
        </h2>
        <p className="absolute left-[34px] top-[94px] text-xs text-[#7d819a]">
          한국 거주기간을 선택해주세요.
        </p>
        <img alt="" className="absolute right-0 top-0 h-[151px] w-[153px] object-contain" src={mascot} />
      </section>

      <section className="absolute left-5 top-[272px] flex w-[362px] flex-col gap-5">
        {residenceOptions.map((option) => {
          const isSelected = selectedPeriod === option.id;

          return (
            <button
              key={option.id}
              className="relative h-[70px] w-full rounded-[15px] bg-white text-left transition-colors"
              style={{
                borderColor: isSelected ? "#425ae9" : "#ececec",
                borderWidth: isSelected ? 2 : 1,
                borderStyle: "solid",
              }}
              type="button"
              onClick={() => setSelectedPeriod(option.id)}
              aria-pressed={isSelected}
            >
              <img alt="" className="absolute left-[30px] top-5 h-[30px] w-[28px] object-contain" src={option.icon} />
              <span className="absolute left-[78px] top-[25px] text-sm font-bold text-[#444f66]">
                {option.label}
              </span>
            </button>
          );
        })}
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
          className={`relative h-full flex-1 rounded-[15px] text-sm font-medium transition-colors ${
            selectedPeriod ? "bg-[#425ae9] text-[#e5e8fa]" : "bg-[#d8dce8] text-white"
          }`}
          type="button"
          disabled={!selectedPeriod}
          onClick={() => selectedPeriod && onNext(selectedPeriod)}
        >
          다음
          <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
        </button>
      </div>
    </div>
  );
}

function ProgressDots() {
  return (
    <div className="absolute left-1/2 top-[92px] h-[9px] w-36 -translate-x-1/2">
      <div className="absolute left-[4px] top-1/2 h-px w-[136px] -translate-y-1/2 bg-[#dfe1e8]" />
      <div className="absolute left-0 top-0 size-[9px] rounded-full bg-[#4f72f2]" />
      <div className="absolute left-[45px] top-0 size-[9px] rounded-full bg-[#4f72f2]" />
      <div className="absolute left-[90px] top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
      <div className="absolute right-0 top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
    </div>
  );
}

export default ResidencePeriodScreen;
