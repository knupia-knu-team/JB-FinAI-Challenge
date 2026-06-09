import { useState } from "react";
import consentHero from "../assets/mydata/consent-hero.png";
import shield from "../assets/common/security-shield.png";
import sparkle from "../assets/common/sparkle.png";
import nextChevron from "../assets/common/next-chevron.png";
import BravoHeader from "./common/BravoHeader";
import { InfoList, ProgressDots } from "./MyDataConnectScreen";

type MyDataConsentScreenProps = {
  isActive: boolean;
  onClose: () => void;
  onNext: () => void;
};

const agreements = [
  "개인정보 수집 및 이용 동의",
  "마이데이터 조회 서비스 동의",
  "맞춤형 상품 추천 서비스 동의",
];

function MyDataConsentScreen({ isActive, onClose, onNext }: MyDataConsentScreenProps) {
  const [checkedAgreements, setCheckedAgreements] = useState<string[]>([]);
  const isAllChecked = checkedAgreements.length === agreements.length;

  const toggleAgreement = (agreement: string) => {
    setCheckedAgreements((current) =>
      current.includes(agreement)
        ? current.filter((item) => item !== agreement)
        : [...current, agreement],
    );
  };

  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="3-2 연동"
      data-node-id="22:136"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />
      <ProgressDots />

      <section className="absolute left-[30px] top-[164px] h-[94px] w-[333px]">
        <h2 className="text-base font-semibold leading-6 text-[#4b506c]">
          <span className="text-[#425ae9]">어떤 정보</span>를 가져오는지
          <br />
          <span className="text-[#464a68]">확인해주세요.</span>
        </h2>
        <img alt="" className="absolute right-0 top-[-39px] h-[133px] w-[153px] object-contain" src={consentHero} />
        <img alt="" className="absolute right-[-8px] top-[58px] h-[13px] w-3 object-contain" src={sparkle} />
        <img alt="" className="absolute right-[-12px] top-[43px] h-[9px] w-2 object-contain" src={sparkle} />
      </section>

      <InfoList className="absolute left-5 top-[257px]" />

      <section className="absolute left-5 top-[553px] h-[174px] w-[362px] overflow-hidden rounded-[20px] border border-[#ececec] bg-white">
        <div className="relative h-[70px] border-b border-[#ececec] bg-[#f7f8fc]">
          <img alt="" className="absolute left-[29px] top-5 h-[30px] w-[26px] object-contain" src={shield} />
          <p className="absolute left-[77px] top-[18px] text-xs font-medium leading-[18px] text-[#4e5361]">
            BRAVO AI는 상품 추천에 필요한 정보만 조회합니다.
            <br />
            언제든지 동의를 철회할 수 있습니다.
          </p>
        </div>
        <div className="px-[29px] py-[15px]">
          {agreements.map((agreement) => (
            <button
              key={agreement}
              className="flex h-[27px] items-center gap-3"
              type="button"
              onClick={() => toggleAgreement(agreement)}
              aria-pressed={checkedAgreements.includes(agreement)}
            >
              <span
                className={`flex size-4 items-center justify-center rounded-[5px] border text-[11px] font-bold ${
                  checkedAgreements.includes(agreement)
                    ? "border-[#425ae9] bg-[#425ae9] text-white"
                    : "border-[#cfd4e3] bg-white text-transparent"
                }`}
              >
                ✓
              </span>
              <span className="text-xs font-medium text-[#4e5361]">
                {agreement} <span className="text-[#425ae9]">(필수)</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <button
        className={`absolute bottom-[30px] left-5 h-[50px] w-[362px] rounded-[15px] text-sm font-medium transition-colors ${
          isAllChecked ? "bg-[#425ae9] text-[#e5e8fa]" : "bg-[#d8dce8] text-white"
        }`}
        type="button"
        disabled={!isAllChecked}
        onClick={onNext}
      >
        동의하고 조회하기
        <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
      </button>
    </div>
  );
}

export default MyDataConsentScreen;
