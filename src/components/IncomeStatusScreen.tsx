import { useMemo, useState } from "react";
import businessIcon from "../assets/income/business.png";
import heroMascot from "../assets/income/hero-mascot.png";
import incomeIcon from "../assets/income/income-icon.png";
import noIncomeIcon from "../assets/income/no-income.png";
import salaryIcon from "../assets/income/salary.png";
import sparkle from "../assets/common/sparkle.png";
import statusIcon from "../assets/common/status-badge.png";
import summaryMascot from "../assets/income/summary-mascot.png";
import nextChevron from "../assets/common/next-chevron.png";
import { getIncomeStatusLabel, type IncomeStatusId } from "../userProfile";
import BravoHeader from "./common/BravoHeader";

type IncomeStatusScreenProps = {
  isActive: boolean;
  initialIncomeStatus: IncomeStatusId;
  initialMonthlyIncome: number;
  onBack: () => void;
  onClose: () => void;
  onNext: (incomeData: { incomeStatus: IncomeStatusId; monthlyIncome: number }) => void;
};

const incomeStatusOptions = [
  {
    id: "salary",
    label: "급여소득자",
    description: ["회사에서 월급을", "받고 있어요."],
    icon: salaryIcon,
    iconClassName: "h-[30px] w-[34px]",
  },
  {
    id: "business",
    label: "사업소득자",
    description: ["사업을 운영하며", "소득이 있어요."],
    icon: businessIcon,
    iconClassName: "h-[30px] w-9",
  },
  {
    id: "none",
    label: "소득 없음",
    description: ["현재 소득이", "없어요."],
    icon: noIncomeIcon,
    iconClassName: "h-[30px] w-[31px]",
  },
];

const formatWon = (value: number) => value.toLocaleString("ko-KR");

function IncomeStatusScreen({
  isActive,
  initialIncomeStatus,
  initialMonthlyIncome,
  onBack,
  onClose,
  onNext,
}: IncomeStatusScreenProps) {
  const [selectedStatus, setSelectedStatus] = useState<IncomeStatusId>(initialIncomeStatus);
  const [monthlyIncome, setMonthlyIncome] = useState(initialMonthlyIncome);

  const selectedStatusLabel = useMemo(() => getIncomeStatusLabel(selectedStatus), [selectedStatus]);
  const rangePercentage = (monthlyIncome / 5000000) * 100;

  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="2-5 정보입력"
      data-node-id="15:721"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />
      <ProgressDots />

      <section className="absolute left-[25px] top-[123px] h-[149px] w-[347px]">
        <div className="absolute left-0 top-10 flex h-6 w-[25px] items-center justify-center rounded-[26px] border border-[#3e57f2] bg-[#445beb] pb-px text-base font-bold text-[#dbe0f9]">
          5
        </div>
        <h2 className="absolute left-[34px] top-[38px] text-base font-semibold leading-6 text-[#4b506c]">
          현재 <span className="text-[#425ae9]">소득 상태</span>를
          <br />
          <span className="text-[#464a68]">선택해주세요.</span>
        </h2>
        <p className="absolute left-[34px] top-[96px] text-xs leading-5 text-[#7d819a]">
          정확한 상품 추천을 위해
          <br />
          필요한 정보예요.
        </p>
        <img alt="" className="absolute right-0 top-0 h-[149px] w-[171px] object-contain" src={heroMascot} />
        <img alt="" className="absolute right-[143px] top-[54px] h-[13px] w-3 object-contain" src={sparkle} />
        <img alt="" className="absolute right-[49px] top-[87px] h-[13px] w-3 object-contain" src={sparkle} />
        <img alt="" className="absolute right-[45px] top-[101px] h-[9px] w-2 object-contain" src={sparkle} />
      </section>

      <section className="absolute left-5 top-[270px] grid w-[362px] grid-cols-3 gap-x-2.5">
        {incomeStatusOptions.map((option) => {
          const isSelected = selectedStatus === option.id;

          return (
            <button
              key={option.id}
              className="relative h-[150px] w-[114px] rounded-[20px] bg-white transition-colors"
              style={{
                borderColor: isSelected ? "#425ae9" : "#ececec",
                borderWidth: isSelected ? 2 : 1,
                borderStyle: "solid",
              }}
              type="button"
              onClick={() => setSelectedStatus(option.id as IncomeStatusId)}
              aria-pressed={isSelected}
            >
              <img
                alt=""
                className={`absolute left-1/2 top-7 -translate-x-1/2 object-contain ${option.iconClassName}`}
                src={option.icon}
              />
              <span className="absolute left-0 top-[73px] w-full text-center text-xs font-bold text-[#444f66]">
                {option.label}
              </span>
              <span className="absolute left-0 top-24 w-full text-center text-[10px] leading-[14px] text-[#808797]">
                {option.description[0]}
                <br />
                {option.description[1]}
              </span>
            </button>
          );
        })}
      </section>

      <section className="absolute left-5 top-[437px] h-[157px] w-[362px] rounded-[20px] bg-[#f7f8fc] px-5 py-[18px]">
        <p className="text-sm font-medium text-[#585b7b]">월 소득</p>
        <div className="mt-[11px] flex items-end justify-center text-[#5067eb]">
          <span className="text-[25px] font-bold leading-[34px]">{formatWon(monthlyIncome)}</span>
          <span className="mb-1 ml-1 text-sm font-semibold text-[#697beb]">원</span>
        </div>
        <div className="relative mx-[35px] mt-[9px] h-8">
          <div className="absolute left-0 top-[13px] h-[5px] w-full rounded-full bg-[#dfe2ea]" />
          <div
            className="absolute left-0 top-[13px] h-[5px] rounded-full bg-[#5067eb]"
            style={{ width: `${rangePercentage}%` }}
          />
          <input
            className="income-range absolute inset-x-0 top-0 h-8 w-full"
            type="range"
            min={0}
            max={5000000}
            step={100000}
            value={monthlyIncome}
            onChange={(event) => setMonthlyIncome(Number(event.target.value))}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                event.preventDefault();
                setMonthlyIncome((current) => Math.min(current + 100000, 5000000));
              }

              if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                event.preventDefault();
                setMonthlyIncome((current) => Math.max(current - 100000, 0));
              }
            }}
            aria-label="월 소득"
          />
        </div>
        <p className="mt-[15px] text-xs text-[#8a8da3]">* 세전 월 소득을 기준으로 입력해주세요.</p>
      </section>

      <section className="absolute left-5 top-[607px] h-[167px] w-[362px] rounded-[20px] bg-[#ecf3fd]">
        <img alt="" className="absolute left-[27px] top-[49px] h-[118px] w-[132px] object-contain" src={summaryMascot} />
        <img alt="" className="absolute left-[144px] top-[77px] h-[13px] w-3 object-contain" src={sparkle} />
        <img alt="" className="absolute left-[151px] top-[94px] h-[9px] w-2 object-contain" src={sparkle} />
        <div className="absolute left-5 top-[15px] flex h-6 w-[58px] items-center justify-center rounded-[15px] border border-[#3b53f2] bg-[#445ceb] text-[10px] font-medium text-[#f0f3ff]">
          AI 요약
        </div>
        <p className="absolute left-[184px] top-[28px] text-sm font-semibold text-[#585b7b]">
          입력하신 정보
        </p>
        <div className="absolute left-[184px] top-[63px] flex items-center gap-2.5 text-[10px] text-[#626682]">
          <img alt="" className="h-[18px] w-[17px]" src={statusIcon} />
          <span>소득 상태: {selectedStatusLabel}</span>
        </div>
        <div className="absolute left-[184px] top-[85px] flex items-center gap-2.5 text-[10px] text-[#535775]">
          <img alt="" className="h-[17px] w-4" src={incomeIcon} />
          <span>월 소득: {formatWon(monthlyIncome)}원</span>
        </div>
        <p className="absolute left-[184px] top-[112px] text-xs leading-[18px] text-[#8c8ea4]">
          이 정보를 바탕으로
          <br />
          최적의 상품을 찾아드릴게요!
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
          onClick={() => onNext({ incomeStatus: selectedStatus, monthlyIncome })}
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

export default IncomeStatusScreen;
