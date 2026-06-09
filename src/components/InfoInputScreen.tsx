import { useState } from "react";
import aiBubble from "../assets/common/ai-bubble.png";
import helpIcon from "../assets/info/help.png";
import mascot from "../assets/info/mascot.png";
import nextChevron from "../assets/common/next-chevron.png";
import visaE7 from "../assets/info/visa-e7.png";
import visaE9 from "../assets/info/visa-e9.png";
import visaF2 from "../assets/info/visa-f2.png";
import visaF5 from "../assets/info/visa-f5.png";
import visaF6 from "../assets/info/visa-f6.png";
import visaOther from "../assets/info/visa-other.png";
import BravoHeader from "./common/BravoHeader";

type InfoInputScreenProps = {
  isActive: boolean;
  onClose: () => void;
  onNext: (visa: string) => void;
};

const visaOptions = [
  { code: "E-9", label: "비전문취업", icon: visaE9 },
  { code: "E-7", label: "특정활동", icon: visaE7 },
  { code: "F-2", label: "거주", icon: visaF2 },
  { code: "F-5", label: "영주", icon: visaF5 },
  { code: "F-6", label: "결혼이민", icon: visaF6 },
  { code: "기타", label: "비자", icon: visaOther },
];

function InfoInputScreen({ isActive, onClose, onNext }: InfoInputScreenProps) {
  const [selectedVisa, setSelectedVisa] = useState("");

  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="2-1 정보입력"
      data-node-id="4:432"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} showLogo={false} />

      <div className="absolute left-1/2 top-[92px] h-[9px] w-36 -translate-x-1/2">
        <div className="absolute left-[4px] top-1/2 h-px w-[136px] -translate-y-1/2 bg-[#dfe1e8]" />
        <div className="absolute left-0 top-0 size-[9px] rounded-full bg-[#4f72f2]" />
        <div className="absolute left-[45px] top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
        <div className="absolute left-[90px] top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
        <div className="absolute right-0 top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
      </div>

      <section className="absolute left-5 top-[141px] h-[219px] w-[374px]">
        <div className="absolute left-0 top-0 h-[182px] w-48 rounded-[20px] bg-[#f7f8fc]" />
        <p className="absolute left-5 top-[29px] text-base font-semibold leading-6 text-[#445069]">
          안녕하세요!
          <br />
          먼저 <span className="text-[#617dee]">체류 자격 정보</span>를
          <br />
          알려주세요.
        </p>
        <p className="absolute left-5 top-[114px] text-xs leading-[18px] text-[#999fae]">
          정확한정보로 맞춤 상품을
          <br />
          추천해드릴게요.
        </p>
        <img alt="" className="absolute left-[199px] top-8 h-[187px] w-[175px] object-contain" src={mascot} />
        <img alt="" className="absolute right-[9px] top-[36px] h-[37px] w-[46px]" src={aiBubble} />
      </section>

      <section className="absolute left-5 top-[401px] h-[363px] w-[362px]">
        <div className="flex items-center">
          <span className="flex size-6 items-center justify-center rounded-full border border-[#3e57f2] bg-[#445beb] pb-px text-base font-bold text-[#dbe0f9]">
            1
          </span>
          <h2 className="ml-2.5 text-sm font-medium text-[#535d73]">
            비자(체류 자격)를 선택해주세요
          </h2>
          <img alt="" className="ml-auto size-[22px]" src={helpIcon} />
        </div>

        <div className="mt-[17px] grid grid-cols-3 gap-x-2.5 gap-y-2.5">
          {visaOptions.map((option) => (
            <button
              key={option.code}
              className="relative h-[156px] w-[114px] rounded-[20px] bg-white"
              style={{
                borderColor: selectedVisa === option.code ? "#425ae9" : "#ececec",
                borderWidth: selectedVisa === option.code ? 2 : 1,
                borderStyle: "solid",
              }}
              type="button"
              onClick={() => setSelectedVisa(option.code)}
              aria-pressed={selectedVisa === option.code}
            >
              <img alt="" className="absolute left-1/2 top-8 h-10 w-10 -translate-x-1/2 object-contain" src={option.icon} />
              <p className="absolute left-0 top-[85px] w-full text-center text-sm font-bold text-[#444f66]">
                {option.code}
              </p>
              <p className="absolute left-0 top-[111px] w-full text-center text-xs text-[#808797]">
                {option.label}
              </p>
            </button>
          ))}
        </div>
      </section>

      <button
        className={`absolute bottom-[30px] left-5 h-[50px] w-[362px] rounded-[15px] text-sm font-medium transition-colors ${
          selectedVisa ? "bg-[#425ae9] text-[#e5e8fa]" : "bg-[#d8dce8] text-white"
        }`}
        type="button"
        disabled={!selectedVisa}
        onClick={() => selectedVisa && onNext(selectedVisa)}
      >
        다음
        <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
      </button>
    </div>
  );
}

export default InfoInputScreen;
