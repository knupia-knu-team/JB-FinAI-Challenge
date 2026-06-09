import conditionCheckIcon from "../../assets/common/condition-check.png";
import visaCardIcon from "../../assets/common/visa-card.png";
import analysisMascot from "../../assets/terms/terms-analysis-mascot.png";
import { formatShortWon } from "../../userProfile";
import {
  AiGuideCard,
  DualButtons,
  InfoSummary,
  PagerDots,
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
  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="6-2 약관"
      data-node-id="74:217"
      aria-hidden={!isActive}
    >
      <TermsHeader onClose={onClose} />
      <TermsCompactProgress />
      <AiGuideCard className="absolute left-5 top-[151px]" />

      <section className="absolute left-5 top-[273px] h-[369px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
        <h2 className="absolute left-[25px] top-[20px] text-xs font-bold text-[#444f66]">조건 충족</h2>
        <p className="absolute left-[25px] top-[42px] text-[9px] font-medium text-[#4e5361]">
          고객님은 아래 조건을 충족하여 대출 신청이 가능합니다.
        </p>

        <div className="absolute left-[15px] top-[66px] h-[138px] w-[332px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
          <div className="absolute left-1/2 top-[25px] h-[87px] w-px bg-[#dfe6f2]" />
          <InfoSummary
            className="absolute left-[54px] top-[28px]"
            title="비자 정보"
            value={`${userProfile.visa} 비자`}
            icon={visaCardIcon}
          />
          <InfoSummary
            className="absolute left-[215px] top-[28px]"
            title="상품 조건"
            value="대출 조건 충족"
            icon={conditionCheckIcon}
          />
        </div>

        <div className="absolute left-[15px] top-[219px] h-[135px] w-[332px] rounded-lg bg-[#ecf3fd]">
          <img alt="" className="absolute left-[25px] top-[17px] h-[82px] w-[91px] object-contain" src={analysisMascot} />
          <p className="absolute left-[140px] top-[29px] text-xs font-bold text-[#425ae9]">BRAVO AI 분석 결과</p>
          <p className="absolute left-[140px] top-[53px] text-[10px] font-medium leading-[15px] text-[#4e5361]">
            {userProfile.name}님은 {userProfile.visa} 비자이고,
            <br />
            재직기간 {userProfile.remainingStayMonths}개월 이상,
            <br />월 소득 {formatShortWon(userProfile.monthlyIncome)}으로 모든 조건을
            <br />
            충족해 대출대상에 포함돼요.
          </p>
        </div>
      </section>

      <PagerDots active="first" />
      <TermsNotice className="absolute left-5 top-[717px]" />
      <DualButtons
        leftLabel="이전"
        rightLabel="다음: 대출한도"
        onBack={onBack}
        onNext={onNext}
        rightActive={false}
      />
    </div>
  );
}

export default TermsComparisonScreen;
