import periodCalendarIcon from "../../assets/terms/terms-period-calendar.png";
import periodRepayIcon from "../../assets/terms/terms-period-repay.png";
import periodRecommendIcon from "../../assets/terms/terms-period-recommend.png";
import periodInfoIcon from "../../assets/terms/terms-period-info.png";
import {
  AiGuideCard,
  DualButtons,
  TermsCompactProgress,
  TermsHeader,
  TermsNotice,
  type TermsDetailScreenProps,
} from "./TermsShared";

function TermsLoanPeriodScreen({
  isActive,
  userProfile,
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
      data-node-id="74:221"
      aria-hidden={!isActive}
    >
      <TermsHeader onClose={onClose} />
      <TermsCompactProgress activeStep={4} />
      <AiGuideCard className="absolute left-5 top-[151px]" />

      <section className="absolute left-5 top-[269px] h-[347px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-5 py-[18px]">
        <PeriodRow
          icon={periodCalendarIcon}
          title="대출기간 조건"
          description={["비자 종류에 따라", "신청 가능한 기간이 달라요."]}
          rightContent={
            <div className="h-[70px] w-[157px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-[17px] py-[13px]">
              <div className="flex items-center justify-between text-[11px] font-semibold">
                <span className="text-[#425ae9]">E-9 비자</span>
                <span className="text-[#425ae9]">3~48개월</span>
              </div>
              <div className="mt-[12px] h-px bg-[#dfe6f2]" />
              <div className="mt-[10px] flex items-center justify-between text-[11px] font-semibold text-[#444f66]">
                <span>E-9 외 비자</span>
                <span>3~36개월</span>
              </div>
            </div>
          }
        />

        <PeriodRow
          icon={periodRepayIcon}
          title="상환방법 조건"
          description={["상환방식에 따라 월 납부금과", "총 이자가 달라져요."]}
          rightContent={
            <div className="h-[70px] w-[157px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-[17px] py-[13px]">
              <p className="text-center text-[11px] font-semibold text-[#425ae9]">원리금균등분할상환</p>
              <div className="mt-[12px] h-px bg-[#dfe6f2]" />
              <p className="mt-[10px] text-center text-[11px] font-semibold text-[#444f66]">매월 같은 금액 납부</p>
            </div>
          }
        />

        <PeriodRow
          icon={periodRecommendIcon}
          title="BRAVO 추천 기준"
          description={["고객님의 정보를 기반으로", "가장 적합한 방식을 추천해요."]}
          rightContent={
            <div className="h-[70px] w-[157px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-[14px] py-[12px]">
              <p className="text-center text-[9px] font-semibold text-[#444f66]">
                월소득 {Math.round(userProfile.monthlyIncome / 10000)}만원 + 재직기간 {userProfile.remainingStayMonths}개월
              </p>
              <div className="mt-[12px] h-px bg-[#dfe6f2]" />
              <p className="mt-[10px] text-center text-[11px] font-semibold text-[#425ae9]">원리금균등분할상환 추천</p>
            </div>
          }
        />

        <PeriodRow
          icon={periodInfoIcon}
          title="유의사항"
          description={["아래 내용을 꼭 확인해 주세요."]}
          rightContent={
            <div className="h-[53px] w-[157px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-[14px] py-[11px]">
              <p className="text-[9px] font-semibold leading-[13px] text-[#444f66]">
                비자 종류, 재직기간, 소득 등에 따라
                <br />
                상품 조건과 한도가 달라질 수 있어요.
              </p>
            </div>
          }
          compact
        />
      </section>

      <TermsNotice className="absolute left-5 top-[717px]" />
      <DualButtons
        leftLabel="이전"
        rightLabel="다음: 기타약관"
        onBack={onBack}
        onNext={onNext}
        rightActive
      />
    </div>
  );
}

function PeriodRow({
  icon,
  title,
  description,
  rightContent,
  compact = false,
}: {
  icon: string;
  title: string;
  description: string[];
  rightContent: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={`${compact ? "min-h-[74px]" : "min-h-[90px]"} flex items-start justify-between ${compact ? "pt-[10px]" : "pt-0"}`}>
      <div className="flex items-start gap-3">
        <img alt="" className="mt-1 size-[25px] object-contain" src={icon} />
        <div>
          <h3 className="text-xs font-bold text-[#444f66]">{title}</h3>
          <p className="mt-[8px] text-[9px] font-medium leading-[13px] text-[#4e5361]">
            {description.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
      {rightContent}
    </div>
  );
}

export default TermsLoanPeriodScreen;
