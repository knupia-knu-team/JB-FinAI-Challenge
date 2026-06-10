import categoryLimitIcon from "../../assets/terms/terms-category-limit.png";
import smallSparkle from "../../assets/common/sparkle.png";
import { formatShortWon } from "../../userProfile";
import {
  AiGuideCard,
  DualButtons,
  TermsCompactProgress,
  TermsHeader,
  TermsNotice,
  type TermsDetailScreenProps,
} from "./TermsShared";

function TermsComparisonScreen({
  isActive,
  userProfile,
  onBack,
  onClose,
  onNext,
}: TermsDetailScreenProps) {
  const recommendationName = userProfile.name.trim().split(/\s+/).at(-1) ?? userProfile.name;

  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="6-4 약관"
      data-node-id="123:472"
      aria-hidden={!isActive}
    >
      <TermsHeader onClose={onClose} />
      <TermsCompactProgress activeStep={3} />
      <AiGuideCard className="absolute left-5 top-[151px]" />

      <section className="absolute left-5 top-[273px] h-[403px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
        <h2 className="absolute left-6 top-[19px] text-xs font-bold text-[#444f66]">상환방법</h2>
        <p className="absolute left-6 top-[40px] text-[9px] font-medium text-[#4e5361]">
          {userProfile.visa} 비자 외 다른 비자 조건도 확인할 수 있어요.
        </p>

        <RepaymentOptionCard
          className="absolute left-[18px] top-[72px]"
          title="원리금균등분할상환"
          description={["원금 + 이자를", "매달 같은 금액으로 상환"]}
          aiDescription={["매달 같은 금액을 내기 때문에", "지출 계획을 세우기 쉬워요."]}
        />
        <RepaymentOptionCard
          className="absolute right-[18px] top-[72px]"
          title="원금균등분할상환"
          description={["원금을 매달 같은 금액으로 상환", "초기 상환금이 조금 더 높음"]}
          aiDescription={["처음에는 부담이 조금 크지만", "전체 이자 부담은 줄어들어요."]}
        />

        <div className="absolute left-[18px] top-[299px] h-[117px] w-[326px] rounded-[10px] border border-[#e1e8f5] bg-[#f0f9f2] px-[21px] py-[18px]">
          <div className="flex items-center gap-3">
            <RecommendationBadge />
            <p className="text-xs font-bold text-[#069339]">원리금균등분할상환</p>
            <p className="text-[10px] font-medium text-[#4e5361]">{recommendationName}님에게 추천하는 방식</p>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <ReasonPill label="이유1" />
            <p className="text-[10px] font-medium text-[#4e5361]">월 소득 {formatShortWon(userProfile.monthlyIncome)} 기준</p>
          </div>

          <div className="mt-[11px] flex items-center gap-2">
            <ReasonPill label="이유2" />
            <p className="text-[10px] font-medium text-[#4e5361]">매달 같은 금액을 납부하여 자금 계획이 편리합니다.</p>
          </div>
        </div>
      </section>

      <TermsNotice className="absolute left-5 top-[717px]" />
      <DualButtons
        leftLabel="이전"
        rightLabel="다음: 대출기간"
        onBack={onBack}
        onNext={onNext}
        rightActive
      />
    </div>
  );
}

function RepaymentOptionCard({
  className,
  title,
  description,
  aiDescription,
}: {
  className: string;
  title: string;
  description: [string, string];
  aiDescription: [string, string];
}) {
  return (
    <div className={`${className} h-[180px] w-[156px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]`}>
      <img alt="" className="absolute left-[15px] top-[13px] h-5 w-[17px] object-contain" src={categoryLimitIcon} />
      <p className="absolute left-[38px] top-[15px] text-[11px] font-bold text-[#444f66]">{title}</p>
      <p className="absolute left-[15px] top-[48px] whitespace-pre-line text-[9.5px] font-medium leading-[14px] text-[#4e5361]">
        {description.join("\n")}
      </p>

      <div className="absolute left-0 top-[94px] h-px w-full bg-[#e1e8f5]" />
      <div className="absolute bottom-0 left-0 h-[86px] w-full rounded-b-[10px] bg-[#f7f8fc]">
        <p className="absolute left-[15px] top-[18px] text-xs font-bold text-[#425ae9]">AI 설명</p>
        <img alt="" className="absolute left-[63px] top-[20px] size-[9px] object-contain" src={smallSparkle} />
        <p className="absolute left-[15px] top-[43px] whitespace-pre-line text-[10px] font-medium leading-[15px] text-[#4e5361]">
          {aiDescription.join("\n")}
        </p>
      </div>
    </div>
  );
}

function RecommendationBadge() {
  return (
    <span className="flex size-[18px] items-center justify-center rounded-full bg-[#e7f7eb]">
      <svg aria-hidden="true" className="size-[11px]" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" fill="#2BA94C" />
        <path d="M3.5 12.5C3.5 10.8431 4.84315 9.5 6.5 9.5H9.5C11.1569 9.5 12.5 10.8431 12.5 12.5V13H3.5V12.5Z" fill="#2BA94C" />
      </svg>
    </span>
  );
}

function ReasonPill({ label }: { label: string }) {
  return (
    <span className="flex h-4 w-9 items-center justify-center rounded-[20px] bg-[#f0f6ee] text-[8px] font-semibold text-[#65974a]">
      {label}
    </span>
  );
}

export default TermsComparisonScreen;
