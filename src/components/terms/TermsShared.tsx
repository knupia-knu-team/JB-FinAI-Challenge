import chevronNext from "../../assets/common/next-chevron.png";
import aiMascot from "../../assets/terms/terms-ai-mascot.png";
import bulbIcon from "../../assets/terms/terms-bulb.png";
import noticeLock from "../../assets/terms/terms-notice-lock.png";
import BravoHeader from "../common/BravoHeader";
import { type UserProfile } from "../../userProfile";
import { termStepLabels } from "./termsData";

export type BaseTermsScreenProps = {
  isActive: boolean;
  onBack: () => void;
  onClose: () => void;
  onNext: () => void;
};

export type TermsDetailScreenProps = BaseTermsScreenProps & {
  userProfile: UserProfile;
};

export const TermsHeader = BravoHeader;

export function ProductFact({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="relative flex items-center gap-3 pl-5">
      <img alt="" className="size-[26px] object-contain" src={icon} />
      <div>
        <p className="text-xs font-semibold text-[#444f66]">{title}</p>
        <p className="mt-1 text-[10px] text-[#7d819a]">{value}</p>
      </div>
    </div>
  );
}

export function TermsLargeProgress({ activeStep }: { activeStep: number }) {
  return (
    <div className="absolute left-5 top-[51px] h-10 w-[322px]">
      <div className="absolute left-0 top-[11px] h-px w-full bg-[#d6d7e5]" />
      <div className="absolute left-0 top-0 flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((step) => {
          const active = activeStep >= step;
          return (
            <div
              key={step}
              className={`flex size-[21px] items-center justify-center rounded-full border text-[9px] font-bold ${
                active ? "border-[#425ae9] bg-[#425ae9] text-white" : "border-[#d6d7e5] bg-white text-[#4e537f]"
              }`}
            >
              {step}
            </div>
          );
        })}
      </div>
      <div className="absolute left-0 top-[32px] flex w-full justify-between text-[9px] text-[#7d819a]">
        {termStepLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export function TermsCompactProgress() {
  return (
    <div className="absolute left-1/2 top-[90px] h-9 w-[260px] -translate-x-1/2">
      <div className="absolute left-[18px] top-[13px] h-px w-[224px] bg-[#d6d7e5]" />
      <div className="absolute left-[7px] top-0 flex w-[246px] justify-between">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`flex size-[21px] items-center justify-center rounded-full border text-[9px] font-bold ${
              step === 1 ? "border-[#425ae9] bg-[#425ae9] text-white" : "border-[#d6d7e5] bg-white text-[#4e537f]"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-[26px] flex w-full justify-between text-[8px]">
        {termStepLabels.map((label, index) => (
          <span key={label} className={index === 0 ? "font-semibold text-[#425ae9]" : "text-[#7d819a]"}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AiGuideCard({ className }: { className?: string }) {
  return (
    <section className={`${className ?? ""} h-[106px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]`}>
      <img alt="" className="absolute left-[18px] top-6 size-14 object-contain" src={aiMascot} />
      <p className="absolute left-[85px] top-[28px] text-xs font-bold text-[#425ae9]">BRAVO AI</p>
      <p className="absolute left-[85px] top-[52px] text-[10px] font-medium leading-[15px] text-[#4e5361]">
        AI가 약관을 이해하기 쉽게 설명하고,
        <br />
        고객님의 정보와 비교해드려요.
      </p>
      <img alt="" className="absolute right-[31px] top-[31px] size-11 object-contain" src={bulbIcon} />
    </section>
  );
}

export function InfoSummary({
  className,
  title,
  value,
  icon,
}: {
  className: string;
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className={`${className} w-[70px] text-center`}>
      <img alt="" className="mx-auto size-9 object-contain" src={icon} />
      <p className="mt-3 text-sm font-medium text-[#4e5361]">{title}</p>
      <p className="mt-2 whitespace-nowrap text-[11px] text-[#595d72]">{value}</p>
    </div>
  );
}

export function PagerDots({ active }: { active: "first" | "second" }) {
  return (
    <div className="absolute left-1/2 top-[694px] flex -translate-x-1/2 gap-1.5">
      <span className={`size-2 rounded-full ${active === "first" ? "bg-[#425ae9]" : "bg-[#d6d7e5]"}`} />
      <span className={`size-2 rounded-full ${active === "second" ? "bg-[#425ae9]" : "bg-[#d6d7e5]"}`} />
    </div>
  );
}

export function TermsNotice({ className }: { className?: string }) {
  return (
    <section className={`${className ?? ""} h-[62px] w-[362px] rounded-lg bg-[#ecf3fd]`}>
      <img alt="" className="absolute left-[25px] top-[18px] h-7 w-[22px] object-contain" src={noticeLock} />
      <p className="absolute left-[66px] top-[17px] text-[11px] font-semibold text-[#425ae9]">
        5가지 항목을 모두 확인해야 대출 신청이 가능해요!
      </p>
      <p className="absolute left-[66px] top-[34px] text-[10px] text-[#7d819a]">
        AI가 고객님의 정보를 바탕으로 맞춤 분석해드려요.
      </p>
    </section>
  );
}

export function DualButtons({
  leftLabel,
  rightLabel,
  onBack,
  onNext,
  rightActive,
}: {
  leftLabel: string;
  rightLabel: string;
  onBack: () => void;
  onNext: () => void;
  rightActive: boolean;
}) {
  return (
    <div className="absolute bottom-[30px] left-5 flex h-[50px] w-[362px] gap-2">
      <button
        className="h-full w-[130px] rounded-[15px] bg-[#f2f2f6] text-sm font-medium text-[#4b5070]"
        type="button"
        onClick={onBack}
      >
        {leftLabel}
      </button>
      <button
        className={`relative h-full flex-1 rounded-[15px] text-sm font-medium ${
          rightActive ? "bg-[#425ae9] text-[#e5e8fa]" : "bg-[#f2f2f6] text-[#4b5070]"
        }`}
        type="button"
        onClick={onNext}
      >
        {rightLabel}
        {rightActive && <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={chevronNext} />}
      </button>
    </div>
  );
}
