import { visaConditions } from "./termsData";
import {
  DualButtons,
  PagerDots,
  TermsCompactProgress,
  TermsHeader,
  TermsNotice,
  type TermsDetailScreenProps,
} from "./TermsShared";

function TermsVisaConditionsScreen({
  isActive,
  onBack,
  onClose,
  onNext,
}: TermsDetailScreenProps) {
  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="6-5 약관"
      data-node-id="91:546"
      aria-hidden={!isActive}
    >
      <TermsHeader onClose={onClose} />
      <TermsCompactProgress activeStep={1} />

      <section className="absolute left-5 top-[151px] h-[528px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
        <h2 className="absolute left-6 top-[21px] text-xs font-bold text-[#444f66]">다른 비자 조건 보기</h2>
        <p className="absolute left-6 top-[42px] text-[9px] font-medium text-[#4e5361]">
          E-9 비자 외 다른 비자 조건도 확인할 수 있어요.
        </p>
        <button
          className="absolute right-[21px] top-[28px] flex items-center gap-1 text-[10px] font-medium text-[#425ae9]"
          type="button"
          onClick={onBack}
        >
          펼쳐보기
          <ChevronDownIcon className="size-3 text-[#425ae9]" />
        </button>

        <div className="absolute left-5 top-[72px] flex flex-col gap-[14px]">
          {visaConditions.map((condition) => (
            <div key={condition.title} className="relative h-[72px] w-[322px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
              <img alt="" className="absolute left-5 top-[17px] size-[34px] object-contain" src={condition.icon} />
              <h3 className="absolute left-[66px] top-[17px] text-xs font-bold text-[#444f66]">{condition.title}</h3>
              <p className="absolute left-[66px] top-[39px] whitespace-pre-line text-[8px] font-medium leading-[11px] text-[#4e5361]">
                {condition.description}
              </p>
              <ChevronDownIcon className="absolute right-[22px] top-[25px] size-[18px] text-[#4e5361]" />
            </div>
          ))}
        </div>
        <p className="absolute left-5 bottom-[14px] text-[10px] text-[#8a8da3]">
          * 급여소득자: 현 직장 재직기간 기준 ㅣ 사업소득자: 사업 영위기간 기준
        </p>
      </section>

      <PagerDots active="second" />
      <TermsNotice className="absolute left-5 top-[717px]" />
      <DualButtons
        leftLabel="이전"
        rightLabel="다음: 대출한도"
        onBack={onBack}
        onNext={onNext}
        rightActive
      />
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
      <path d="M4 6.5L8 10.5L12 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default TermsVisaConditionsScreen;
