import categoryLimit from "../../assets/terms/terms-category-limit.png";
import categoryRepay from "../../assets/terms/terms-category-repay.png";
import heroMascot from "../../assets/terms/terms-hero-mascot.png";
import { termCategories } from "./termsData";
import {
  AiGuideCard,
  DualButtons,
  ProductFact,
  TermsHeader,
  TermsLargeProgress,
  TermsNotice,
  type BaseTermsScreenProps,
} from "./TermsShared";

function TermsOverviewScreen({
  isActive,
  onBack,
  onClose,
  onNext,
}: BaseTermsScreenProps) {
  return (
    <div
      className={`screen-layer bg-[#f7f8fc] font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="6-1 약관"
      data-node-id="74:215"
      aria-hidden={!isActive}
    >
      <TermsHeader onClose={onClose} />

      <section className="absolute left-[30px] top-[112px] h-[123px] w-[352px]">
        <h2 className="text-[20px] font-bold leading-[28px] text-[#4b506c]">JB Bravo KOREA 대출</h2>
        <p className="mt-1 text-xs leading-5 text-[#7d819a]">외국인 전용 신용대출</p>
        <img
          alt=""
          className="pointer-events-none absolute right-[-10px] top-[-47px] h-[195px] w-[176px] object-contain"
          src={heroMascot}
        />
      </section>

      <section className="absolute left-5 top-[175px] grid h-[59px] w-[362px] grid-cols-2 rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
        <ProductFact title="최대 한도" value="5,000만원" icon={categoryLimit} />
        <ProductFact title="최대 기간" value="36개월" icon={categoryRepay} />
      </section>

      <AiGuideCard className="absolute left-5 top-[244px]" />

      <section className="absolute left-[30px] top-[380px]">
        <h3 className="text-sm font-bold text-[#444f66]">내 조건과 꼼꼼히 비교하기</h3>
        <p className="mt-[17px] text-xs leading-5 text-[#7d819a]">
          상품 약관의 5가지 항목을 모두 확인하면
          <br />
          내 조건과 비교해드려요.
        </p>
      </section>

      <section className="absolute left-5 top-[456px] flex w-[470px] gap-1.5">
        {termCategories.map((category) => (
          <div key={category.label} className="relative h-[108px] w-20 shrink-0 rounded-[10px] border border-[#ececec] bg-white">
            <img alt="" className="absolute left-1/2 top-[23px] size-[31px] -translate-x-1/2 object-contain" src={category.icon} />
            <p className="absolute bottom-6 w-full text-center text-[11px] font-bold text-[#444f66]">
              {category.label}
            </p>
          </div>
        ))}
      </section>

      <section className="absolute left-5 top-[579px] h-[113px] w-[362px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
        <div className="absolute left-5 top-[18px] flex w-[322px] items-center justify-between">
          <h3 className="text-xs font-bold text-[#444f66]">꼼꼼히 비교 진행 상황</h3>
          <p className="text-[10px] font-medium text-[#7d819a]">
            <span className="text-[#425ae9]">0 / 5</span> 완료
          </p>
        </div>
        <TermsLargeProgress activeStep={0} />
      </section>

      <TermsNotice className="absolute left-5 top-[707px]" />

      <DualButtons
        leftLabel="이전 약관 확인하기"
        rightLabel="나와 꼼꼼히 비교하기"
        onBack={onBack}
        onNext={onNext}
        rightActive
        leftWidthClass="w-[146px]"
      />
    </div>
  );
}

export default TermsOverviewScreen;
