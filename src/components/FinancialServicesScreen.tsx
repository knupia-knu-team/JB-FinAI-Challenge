import { useState } from "react";
import nextChevron from "../assets/common/next-chevron.png";
import carLoan from "../assets/services/car-loan.png";
import creditLoan from "../assets/services/credit-loan.png";
import insurance from "../assets/services/insurance.png";
import investment from "../assets/services/investment.png";
import mascot from "../assets/services/mascot.png";
import remittance from "../assets/services/remittance.png";
import rent from "../assets/services/rent.png";
import sparkle from "../assets/common/sparkle.png";
import tipMascot from "../assets/services/tip-mascot.png";
import type { FinancialServiceId } from "../userProfile";
import BravoHeader from "./common/BravoHeader";

type FinancialServicesScreenProps = {
  isActive: boolean;
  initialServices: FinancialServiceId[];
  onBack: () => void;
  onClose: () => void;
  onNext: (services: FinancialServiceId[]) => void;
};

const serviceOptions: Array<{
  id: FinancialServiceId;
  label: string;
  icon: string;
  iconClassName: string;
}> = [
  { id: "remittance", label: "해외송금", icon: remittance, iconClassName: "h-8 w-12 top-[29px]" },
  { id: "rent", label: "전월세", icon: rent, iconClassName: "size-[35px] top-[26px]" },
  { id: "credit-loan", label: "신용대출", icon: creditLoan, iconClassName: "h-[38px] w-[35px] top-[26px]" },
  { id: "car-loan", label: "자동차대출", icon: carLoan, iconClassName: "h-[30px] w-[37px] top-7" },
  { id: "insurance", label: "보험", icon: insurance, iconClassName: "h-[35px] w-[31px] top-[26px]" },
  { id: "investment", label: "투자", icon: investment, iconClassName: "h-[35px] w-9 top-[26px]" },
];

function FinancialServicesScreen({
  isActive,
  initialServices,
  onBack,
  onClose,
  onNext,
}: FinancialServicesScreenProps) {
  const [selectedServices, setSelectedServices] = useState<FinancialServiceId[]>(initialServices);
  const hasSelection = selectedServices.length > 0;

  const toggleService = (id: FinancialServiceId) => {
    setSelectedServices((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="2-4 정보입력"
      data-node-id="15:701"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />
      <ProgressDots />

      <section className="absolute left-[25px] top-[130px] h-[144px] w-[339px]">
        <div className="absolute left-0 top-[33px] flex h-6 w-[25px] items-center justify-center rounded-[26px] border border-[#3e57f2] bg-[#445beb] pb-px text-base font-bold text-[#dbe0f9]">
          4
        </div>
        <h2 className="absolute left-[34px] top-[31px] text-base font-semibold leading-6 text-[#4b506c]">
          어떤 <span className="text-[#425ae9]">금융 서비스</span>가
          <br />
          <span className="text-[#464a68]">필요하신가요?</span>
        </h2>
        <p className="absolute left-[34px] top-[89px] text-xs leading-5 text-[#7d819a]">
          주 이용 목적에 맞는 상품을
          <br />
          추천해드려요.
        </p>
        <img alt="" className="absolute right-0 top-0 h-36 w-[146px] object-contain" src={mascot} />
      </section>

      <section className="absolute left-5 top-[272px] grid w-[362px] grid-cols-3 gap-x-2.5 gap-y-2.5">
        {serviceOptions.map((option) => {
          const isSelected = selectedServices.includes(option.id);

          return (
            <button
              key={option.id}
              className="relative h-[120px] w-[114px] rounded-[20px] bg-white transition-colors"
              style={{
                borderColor: isSelected ? "#425ae9" : "#ececec",
                borderWidth: isSelected ? 2 : 1,
                borderStyle: "solid",
              }}
              type="button"
              onClick={() => toggleService(option.id)}
              aria-pressed={isSelected}
            >
              <img
                alt=""
                className={`absolute left-1/2 -translate-x-1/2 object-contain ${option.iconClassName}`}
                src={option.icon}
              />
              <span className="absolute left-0 top-20 w-full text-center text-xs font-bold text-[#444f66]">
                {option.label}
              </span>
            </button>
          );
        })}
      </section>

      <button
        className="absolute left-5 top-[532px] h-[52px] w-[362px] rounded-[15px] bg-white px-[30px] text-left text-xs font-bold text-[#444f66] transition-colors"
        style={{
          borderColor: selectedServices.includes("other") ? "#425ae9" : "#ececec",
          borderWidth: selectedServices.includes("other") ? 2 : 1,
          borderStyle: "solid",
        }}
        type="button"
        onClick={() => toggleService("other")}
        aria-pressed={selectedServices.includes("other")}
      >
        기타
        <img alt="" className="absolute right-[43px] top-[13px] size-2 object-contain" src={sparkle} />
        <img alt="" className="absolute right-[47px] top-7 h-[13px] w-3 object-contain" src={sparkle} />
      </button>

      <section className="absolute left-5 top-[594px] h-[86px] w-[362px] rounded-[20px] bg-[#ecf3fd]">
        <img alt="" className="absolute left-[29px] top-[11px] h-[75px] w-[76px] object-contain" src={tipMascot} />
        <p className="absolute left-[132px] top-[21px] text-sm font-medium leading-[23px] text-[#585b7b]">
          정확한 추천을 위해
          <br />
          여러 개를 선택할 수 있어요!
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
          className={`relative h-full flex-1 rounded-[15px] text-sm font-medium transition-colors ${
            hasSelection ? "bg-[#425ae9] text-[#e5e8fa]" : "bg-[#d8dce8] text-white"
          }`}
          type="button"
          disabled={!hasSelection}
          onClick={() => onNext(selectedServices)}
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

export default FinancialServicesScreen;
