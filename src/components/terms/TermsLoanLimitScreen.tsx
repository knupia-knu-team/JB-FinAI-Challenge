import checkIcon from "../../assets/common/condition-check.png";
import categoryLimitIcon from "../../assets/terms/terms-category-limit.png";
import categoryRateIcon from "../../assets/terms/terms-category-rate.png";
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

const rateColumns = ["구분", "기준금리", "가산금리", "우대금리", "제시금리"];
const rateRows = [
  ["최저", "2.63%", "6.82%", "1.50%", "7.95%"],
  ["최고", "2.63%", "15.27%", "0.00%", "17.90%"],
];

function TermsLoanLimitScreen({
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
      data-name="6-3 약관"
      data-node-id="74:219"
      aria-hidden={!isActive}
    >
      <TermsHeader onClose={onClose} />
      <TermsCompactProgress activeStep={2} />
      <AiGuideCard className="absolute left-5 top-[151px]" />

      <section className="absolute left-5 top-[269px] h-[269px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
        <div className="absolute left-[18px] top-[18px] flex items-start gap-3">
          <img alt="" className="mt-0.5 h-7 w-[24px] object-contain" src={categoryLimitIcon} />
          <div>
            <h2 className="text-xs font-bold text-[#444f66]">대출한도</h2>
            <p className="mt-[5px] text-[10px] font-medium text-[#4e5361]">
              동일인당 최소 1백만원 이상 ~ 최대 50백만원 이내 (10만원 단위)
            </p>
          </div>
        </div>

        <div className="absolute left-[15px] top-[68px] h-[104px] w-[161px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-4 py-[15px]">
          <div className="flex items-center gap-2">
            <img alt="" className="size-[18px] object-contain" src={checkIcon} />
            <p className="text-xs font-bold text-[#444f66]">내 정보</p>
          </div>
          <div className="mt-4 border-t border-[#e1e8f5]" />
          <div className="mt-[13px] flex items-center justify-between text-[10px] font-medium text-[#4e5361]">
            <span>월 소득</span>
            <span className="font-bold text-[#444f66]">{formatShortWon(userProfile.monthlyIncome)}</span>
          </div>
          <div className="mt-[15px] flex items-center justify-between text-[10px] font-medium text-[#4e5361]">
            <span>체류기간</span>
            <span className="font-bold text-[#444f66]">{userProfile.remainingStayMonths}개월</span>
          </div>
        </div>

        <div className="absolute right-[15px] top-[68px] h-[104px] w-[161px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-4 py-[15px]">
          <div className="flex items-center gap-2">
            <p className="text-xs font-bold text-[#425ae9]">BRAVO AI 분석 결과</p>
            <img alt="" className="size-[11px] object-contain" src={smallSparkle} />
          </div>
          <p className="mt-[14px] text-[10px] font-medium text-[#444f66]">예상 대출한도 5,000만원</p>
          <p className="mt-[11px] text-[8.5px] font-medium leading-3 text-[#4e5361]">
            고객님의 소득과 체류기간을 기준으로
            <br />
            심사 후 최대 50백만원 이내로 결정
          </p>
        </div>

        <div className="absolute left-[15px] top-[183px] h-[72px] w-[332px] rounded-[8px] bg-[#f7f8fc] px-[21px] py-[14px]">
          <div className="flex items-center gap-3">
            <img alt="" className="size-5 object-contain" src={checkIcon} />
            <p className="text-xs font-bold text-[#425ae9]">AI 설명</p>
          </div>
          <p className="mt-[10px] text-[10px] font-medium leading-[13px] text-[#4e5361]">
            소득과 체류기간이 길수록 더 높은 한도를 받을 가능성이 높아요.
            <br />
            실제 한도는 심사 결과에 따라 달라질 수 있어요.
          </p>
        </div>
      </section>

      <section className="absolute left-5 top-[554px] h-[155px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd] px-[18px] py-[16px]">
        <div className="flex items-center gap-3">
          <img alt="" className="h-5 w-5 object-contain" src={categoryRateIcon} />
          <h3 className="text-xs font-bold text-[#444f66]">대출금리</h3>
          <span className="text-[9px] font-medium text-[#4e5361]">(2026.06.12. 기준)</span>
        </div>

        <table className="mt-[14px] w-full table-fixed border-collapse text-center text-[8px] text-[#4e5361]">
          <thead>
            <tr>
              {rateColumns.map((column) => (
                <th key={column} className="border border-[#dce4f3] px-1 py-[5px] font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rateRows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} className="border border-[#dce4f3] px-1 py-[5px] font-normal">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-[10px] text-[8px] font-medium leading-3 text-[#4e5361]">
          - 최저: 신용등급 JBCR1등급, 대출금액 10백만원, 대출기간 12개월, 고정금리
          <br />
          - 최고: 신용등급 JBCR10등급, 대출금액 10백만원, 대출기간 12개월, 고정금리
        </p>
      </section>

      <TermsNotice className="absolute left-5 top-[717px]" />
      <DualButtons
        leftLabel="이전"
        rightLabel="다음: 상환방법"
        onBack={onBack}
        onNext={onNext}
        rightActive
      />
    </div>
  );
}

export default TermsLoanLimitScreen;
