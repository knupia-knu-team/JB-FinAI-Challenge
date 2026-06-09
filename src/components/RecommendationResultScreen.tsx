import checkGreen from "../assets/common/status-badge.png";
import heroMascot from "../assets/recommend-result/hero-mascot.png";
import loanPurpose from "../assets/recommend-result/loan-purpose.png";
import nextChevron from "../assets/common/next-chevron.png";
import productBankbook from "../assets/recommend-result/product-bankbook.png";
import productCarCollateral from "../assets/recommend-result/product-car-collateral.png";
import productCarLease from "../assets/recommend-result/product-car-lease.png";
import productCard from "../assets/recommend-result/product-card.png";
import productUsedCar from "../assets/recommend-result/product-used-car.png";
import reasonIncome from "../assets/common/condition-check.png";
import reasonPurpose from "../assets/recommend-result/reason-purpose.png";
import reasonStay from "../assets/recommend-result/reason-stay.png";
import reasonVisa from "../assets/common/visa-card.png";
import smallSparkle from "../assets/common/sparkle.png";
import BravoHeader from "./common/BravoHeader";
import {
  formatShortWon,
  getFinancialServiceLabel,
  getPrimaryFinancialService,
  type UserProfile,
} from "../userProfile";

type RecommendationResultScreenProps = {
  isActive: boolean;
  userProfile: UserProfile;
  onClose: () => void;
  onNext: () => void;
};

const products = [
  { name: ["JB Bravo", "KOREA 통장"], icon: productBankbook },
  { name: ["JB Bravo", "KOREA 체크카드"], icon: productCard },
  { name: ["중고차대출"], icon: productUsedCar },
  { name: ["자동차리스"], icon: productCarLease },
  { name: ["외국인 자동차", "담보대출"], icon: productCarCollateral },
];

const getLoanRecommendationTitle = (serviceLabel: string) => {
  if (serviceLabel.includes("대출")) {
    return "JB Bravo KOREA\n대출";
  }

  if (serviceLabel === "해외송금") {
    return "JB Bravo KOREA\n송금";
  }

  if (serviceLabel === "전월세") {
    return "JB Bravo KOREA\n전월세";
  }

  return "JB Bravo KOREA\n상품";
};

function RecommendationResultScreen({
  isActive,
  userProfile,
  onClose,
  onNext,
}: RecommendationResultScreenProps) {
  const primaryService = getPrimaryFinancialService(userProfile.financialServices);
  const primaryServiceLabel = getFinancialServiceLabel(primaryService);
  const [productLine1, productLine2] = getLoanRecommendationTitle(primaryServiceLabel).split("\n");
  const reasons = [
    { label: `${userProfile.visa} 비자 신청 가능`, icon: reasonVisa },
    { label: `체류기간 ${userProfile.remainingStayMonths}개월\n조건 충족`, icon: reasonStay },
    { label: `월 소득 ${formatShortWon(userProfile.monthlyIncome)}\n조건 충족`, icon: reasonIncome },
    { label: `${primaryServiceLabel} 목적에 적합`, icon: reasonPurpose },
  ];

  return (
    <div
      className={`screen-layer bg-[#f7f8fc] font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="5-1 추천"
      data-node-id="74:204"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />

      <section className="absolute left-[30px] top-[87px] h-[195px] w-[352px]">
        <div className="flex h-[22px] w-[66px] items-center justify-center rounded-[20px] bg-[#d3e5ff] text-[8px] font-semibold text-[#425ae9]">
          AI 추천 결과
        </div>
        <h2 className="mt-[18px] text-sm font-semibold leading-6 text-[#4b506c]">
          {primaryServiceLabel}이 필요하신
          <br />
          <span className="text-[#425ae9]">{userProfile.name}님께</span>
        </h2>
        <h3 className="mt-[13px] text-lg font-bold leading-[27px] text-[#4b506c]">
          {productLine1}
          <br />
          {productLine2}을 <span className="text-[#425ae9]">추천드려요!</span>
        </h3>
        <p className="mt-[20px] text-xs leading-5 text-[#7d819a]">
          고객님의 정보를 분석하여
          <br />
          가장 적합한 상품을 추천했어요.
        </p>
        <img alt="" className="absolute right-0 top-[14px] h-[181px] w-48 object-contain" src={heroMascot} />
        <img alt="" className="absolute right-[176px] top-[64px] h-[13px] w-3 object-contain" src={smallSparkle} />
        <img alt="" className="absolute right-[171px] top-[49px] h-[9px] w-2 object-contain" src={smallSparkle} />
      </section>

      <section className="absolute left-5 top-[300px] h-[199px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
        <h3 className="absolute left-5 top-[17px] text-sm font-bold text-[#444f66]">왜 추천했나요?</h3>
        <div className="absolute left-5 top-[53px] grid w-[318px] grid-cols-2 gap-x-[36px] gap-y-3">
          {reasons.map((reason) => (
            <div key={reason.label} className="flex h-[30px] items-center gap-2.5">
              <img alt="" className="size-[30px] object-contain" src={reason.icon} />
              <p className="whitespace-pre-line text-[11px] font-medium leading-[15px] text-[#4e5361]">
                {reason.label}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[20px] left-[15px] flex h-[33px] w-[332px] items-center gap-2 rounded-lg bg-[#ecf3fd] px-[15px]">
          <img alt="" className="h-[18px] w-[17px] object-contain" src={checkGreen} />
          <span className="text-[11px] font-semibold text-[#425ae9]">
            현재 고객님의 조건으로 신청 가능한 상품이에요.
          </span>
        </div>
      </section>

      <section className="absolute left-5 top-[510px] h-[65px] w-[362px] rounded-[10px] border border-[#e1e8f5]">
        <p className="absolute left-5 top-[13px] text-[10px] font-medium text-[#4e5361]">
          현재 찾고 있는 목적
        </p>
        <img alt="" className="absolute left-5 top-[34px] size-4 object-contain" src={loanPurpose} />
        <p className="absolute left-[49px] top-[37px] text-xs font-bold text-[#444f66]">
          {primaryServiceLabel}
        </p>
        <button
          className="absolute right-5 top-[18px] h-[30px] w-[98px] rounded-[5px] border border-[#e1e8f5] text-[10px] font-medium text-[#444f66]"
          type="button"
        >
          목적 변경하기
          <span className="ml-1 text-[#425ae9]">⌄</span>
        </button>
      </section>

      <h3 className="absolute left-[30px] top-[606px] text-sm font-bold text-[#444f66]">
        {userProfile.name} 님이 이용 가능한 상품
      </h3>

      <section className="absolute left-5 top-[634px] flex w-[610px] gap-2.5">
        {products.map((product) => (
          <div key={product.name.join("")} className="relative h-[140px] w-[114px] shrink-0 rounded-[20px] border border-[#ececec] bg-white">
            <img alt="" className="absolute left-1/2 top-[25px] h-[32px] w-[45px] -translate-x-1/2 object-contain" src={product.icon} />
            <p className="absolute left-0 top-[72px] w-full text-center text-xs font-bold leading-[15px] text-[#444f66]">
              {product.name.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="absolute left-[30px] top-[109px] flex h-4 w-[54px] items-center justify-center rounded-[20px] bg-[#f0f6ee] text-[8px] font-semibold text-[#65974a]">
              가입가능
            </div>
          </div>
        ))}
      </section>

      <button
        className="absolute bottom-[30px] left-5 h-[50px] w-[362px] rounded-[15px] bg-[#425ae9] text-sm font-medium text-[#e5e8fa]"
        type="button"
        onClick={onNext}
      >
        자세히보기
        <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
      </button>
    </div>
  );
}

export default RecommendationResultScreen;
