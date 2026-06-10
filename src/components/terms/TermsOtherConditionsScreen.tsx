import otherBenefitIcon from "../../assets/terms/terms-other-benefit.png";
import otherBranchIcon from "../../assets/terms/terms-other-branch.png";
import otherCollateralIcon from "../../assets/terms/terms-other-collateral.png";
import otherContractIcon from "../../assets/terms/terms-other-contract.png";
import otherCostIcon from "../../assets/terms/terms-other-cost.png";
import otherDelayIcon from "../../assets/terms/terms-other-delay.png";
import otherNoticeIcon from "../../assets/terms/terms-other-notice.png";
import {
  AiGuideCard,
  DualButtons,
  TermsCompactProgress,
  TermsHeader,
  TermsNotice,
  type TermsDetailScreenProps,
} from "./TermsShared";

const otherTermsRows = [
  {
    icon: otherBranchIcon,
    title: "대출취급 영업점",
    lines: [
      "• 수원외국인금융센터, 동대문외국인금융센터,",
      "  따뜻한금융클리닉전주센터, 익산지점, 완주산단지점,",
      "  군산지점, 정읍지점, BRAVO KOREA 고객센터",
    ],
  },
  {
    icon: otherBenefitIcon,
    title: "대출실행 시\n부가혜택",
    lines: ["• 해당사항 없음"],
  },
  {
    icon: otherContractIcon,
    title: "계약해지 또는\n갱신의 방법",
    lines: [
      "• 계약해지: 영업점 또는 인터넷뱅킹, 모바일 뱅킹을 통한",
      "  완제 후 계약해지",
      "• 계약갱신: 불가",
    ],
  },
  {
    icon: otherDelayIcon,
    title: "지연배상금\n부과방법",
    lines: [
      "• 금융기관 신용관리대상 고객 등 당행에서 정한",
      "  대출 부적격자에 대하여는 대출이 제한될 수 있습니다.",
      "• 이자 및 원리금 납입 또는 대출금 상환 지연 시",
      "  지연배상금률(약정이자율 +3%, 최고 연 15%)",
      "• 약정이자율이 지연배상금률보다 높을 경우",
      "  약정이자율을 적용합니다.",
    ],
  },
  {
    icon: otherNoticeIcon,
    title: "유의사항",
    lines: [
      "• 금융기관 신용관리대상 고객 등 당행에서 정한",
      "  대출 부적격자에 대하여는 대출이 제한될 수 있습니다.",
      "• 이자 및 원리금 납입 또는 대출금 상환 지연 시",
      "  지연배상금률(약정이자율 +3%, 최고 연 15%)",
      "• 약정이자율이 지연배상금률보다 높을 경우",
      "  약정이자율을 적용합니다.",
    ],
  },
  {
    icon: otherCollateralIcon,
    title: "채권보전",
    lines: ["• 신용(무보증)"],
  },
  {
    icon: otherCostIcon,
    title: "대출비용",
    lines: ["• 해당사항 없음"],
  },
];

function TermsOtherConditionsScreen({
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
      data-name="6-6 약관"
      data-node-id="91:456"
      aria-hidden={!isActive}
    >
      <TermsHeader onClose={onClose} />
      <TermsCompactProgress activeStep={5} />
      <AiGuideCard
        className="absolute left-5 top-[151px]"
        title="BRAVO AI가 알려드려요!"
        description={["대출에 꼭 필요한 약관과 유의사항을 쉽게 정리했어요.", "헷갈리는 내용은 AI가 쉽게 설명해 드려요!"]}
        showBulb={false}
      />

      <section className="absolute left-5 top-[272px] h-[430px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-5">
        <div className="divide-y divide-[#dfe6f2]">
          {otherTermsRows.map((row, index) => (
            <OtherTermsRow key={row.title} {...row} className={index === 0 ? "pt-4" : ""} />
          ))}
        </div>
      </section>

      <TermsNotice className="absolute left-5 top-[717px]" />
      <DualButtons
        leftLabel="이전"
        rightLabel="약관 확인 완료"
        onBack={onBack}
        onNext={onNext}
        rightActive
      />
    </div>
  );
}

function OtherTermsRow({
  icon,
  title,
  lines,
  className = "",
}: {
  icon: string;
  title: string;
  lines: string[];
  className?: string;
}) {
  return (
    <div className={`flex gap-3 py-[11px] ${className}`}>
      <img alt="" className="mt-1 size-[25px] shrink-0 object-contain" src={icon} />
      <div className="w-[92px] shrink-0">
        <h3 className="whitespace-pre-line text-[10px] font-bold leading-[13px] text-[#444f66]">{title}</h3>
      </div>
      <div className="flex-1 text-[8px] font-medium leading-[11px] text-[#4e5361]">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default TermsOtherConditionsScreen;
