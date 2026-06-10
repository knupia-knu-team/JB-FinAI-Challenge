import { useEffect, useMemo, useState } from "react";
import consentHero from "../assets/mydata/consent-hero.png";
import shield from "../assets/common/security-shield.png";
import nextChevron from "../assets/common/next-chevron.png";
import closeIcon from "../assets/common/close.png";
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
  const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);
  const isAllChecked = checkedAgreements.length === agreements.length;

  const agreementDetails = useMemo<Record<string, string[]>>(
    () => ({
      "개인정보 수집 및 이용 동의": [
        "1. 개인정보 수집 및 이용 동의",
        "",
        "수집 목적",
        "* 금융거래 계약 체결 및 유지·관리",
        "* 본인 확인 및 고객 상담",
        "* 금융사고 예방 및 민원 처리",
        "* 법령상 의무 이행",
        "",
        "수집 항목",
        "* 성명, 생년월일, 연락처, 주소",
        "* 이메일, 계좌정보",
        "* 거래내역 및 서비스 이용기록",
        "",
        "보유 및 이용기간",
        "* 거래 종료 후 관련 법령이 정한 기간까지 보관",
        "* 목적 달성 시 파기",
        "",
        "동의 거부 권리",
        "* 동의를 거부할 수 있으나 서비스 가입 및 이용이 제한될 수 있음",
      ],
      "마이데이터 조회 서비스 동의": [
        "본인은 마이데이터 서비스 제공을 위하여 본인의 금융정보를 조회·수집·이용하는 것에 동의합니다.",
        "",
        "1. 서비스 목적",
        "* 고객의 금융자산 통합조회",
        "* 소비 및 자산 현황 분석",
        "* 금융생활 관리 서비스 제공",
        "* 맞춤형 금융정보 제공",
        "",
        "2. 조회 대상 정보",
        "* 예금·적금 정보",
        "* 대출 정보",
        "* 신용카드 이용내역",
        "* 보험 가입내역",
        "* 투자상품 보유현황",
        "* 기타 금융거래 정보",
        "",
        "3. 정보 제공기관",
        "은행, 카드사, 증권사, 보험사 및 기타 금융기관",
        "",
        "4. 이용기간",
        "본 동의일로부터 고객이 동의를 철회할 때까지 이용하며, 철회 즉시 정보 조회를 중단합니다.",
        "",
        "5. 고객의 권리",
        "* 언제든지 동의를 철회할 수 있습니다.",
        "* 본인의 정보 제공 내역을 조회할 수 있습니다.",
        "* 정보 정정 및 삭제를 요청할 수 있습니다.",
        "",
        "6. 동의 거부 권리",
        "고객은 본 동의를 거부할 수 있으며, 이 경우 마이데이터 기반 자산조회 서비스 이용이 제한됩니다.",
        "",
        "□ 동의함      □ 동의하지 않음",
        "",
        "본인은 위 내용을 충분히 설명받고 이해하였으며 마이데이터 조회서비스 이용에 동의합니다.",
        "",
        "20____년 ____월 ____일",
        "",
        "성명 : ____________________",
        "",
        "서명 : ____________________",
      ],
      "맞춤형 상품 추천 서비스 동의": [
        "맞춤형 상품 추천 서비스 이용 동의서",
        "",
        "본인은 귀사가 본인의 금융정보를 분석하여 맞춤형 금융상품 및 혜택을 제공하는 것에 동의합니다.",
        "",
        "1. 이용 목적",
        "* 고객 맞춤형 금융상품 추천",
        "* 우대금리 및 이벤트 안내",
        "* 금융상품 가입 제안",
        "* 고객 편의 서비스 제공",
        "",
        "2. 활용 정보",
        "* 연령, 직업, 소득 수준",
        "* 금융거래 내역",
        "* 보유 금융상품 현황",
        "* 서비스 이용기록",
        "* 마케팅 반응 정보",
        "",
        "3. 제공 서비스",
        "* 예금·적금 상품 추천",
        "* 대출 상품 추천",
        "* 카드 상품 추천",
        "* 보험 및 투자상품 추천",
        "* 이벤트 및 프로모션 안내",
        "",
        "4. 보유 및 이용기간",
        "동의일로부터 동의 철회 시까지 이용하며, 철회 시 즉시 관련 활용을 중단합니다.",
        "",
        "5. 동의 거부 권리 및 불이익",
        "고객은 본 동의를 거부할 수 있으며, 거부하더라도 기본 금융서비스 이용에는 제한이 없습니다. 다만 맞춤형 상품 추천 및 혜택 안내 서비스를 받을 수 없습니다.",
        "",
        "□ 동의함      □ 동의하지 않음",
        "",
        "본인은 위 내용을 충분히 설명받고 이해하였으며 맞춤형 상품 추천 서비스 이용에 동의합니다.",
        "",
        "20____년 ____월 ____일",
        "",
        "성명 : ____________________",
        "",
        "서명 : ____________________",
      ],
    }),
    [],
  );

  useEffect(() => {
    if (!isActive) {
      setCheckedAgreements([]);
      setSelectedAgreement(null);
    }
  }, [isActive]);

  const openAgreementModal = (agreement: string) => {
    setSelectedAgreement(agreement);
  };

  const closeAgreementModal = () => {
    setSelectedAgreement(null);
  };

  const acceptAgreement = () => {
    if (!selectedAgreement) {
      return;
    }

    setCheckedAgreements((current) =>
      current.includes(selectedAgreement) ? current : [...current, selectedAgreement],
    );
    closeAgreementModal();
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

      <div className="absolute left-[30px] top-[164px] h-[94px] w-[333px]">
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic text-[#464a68] text-[16px] whitespace-nowrap">
          <p>
            <span className="leading-[normal] text-[#425ae9]">어떤 정보</span>
            <span className="leading-[normal]">를 가져오는지</span>
          </p>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic text-[#464a68] text-[16px] whitespace-nowrap" style={{ top: 24 }}>
          <p className="leading-[normal]">확인해주세요.</p>
        </div>
      </div>

      <div className="absolute h-[151px] left-[204px] top-[121px] w-[153px]" data-node-id="124:665" data-name="2.3 정보입력 캐릭터 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-9.32%] top-0 w-[117.93%] max-w-none object-cover" src={consentHero} />
        </div>
      </div>

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
              onClick={() => openAgreementModal(agreement)}
              aria-pressed={checkedAgreements.includes(agreement)}
            >
              <span
                className={`relative flex size-4 items-center justify-center rounded-[5px] border ${
                  checkedAgreements.includes(agreement)
                    ? "border-[#425ae9] bg-[#425ae9]"
                    : "border-[#cfd4e3] bg-white"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className={`absolute inset-[27.78%_22.22%_27.78%_27.78%] ${
                    checkedAgreements.includes(agreement) ? "opacity-100" : "opacity-0"
                  }`}
                  fill="none"
                  viewBox="0 0 10 9.11115"
                >
                  <path
                    d="M9.00001 1.00004L3.32259 8.11115L1.00001 5.52529"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
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

      {selectedAgreement ? (
        <AgreementModal
          title={selectedAgreement}
          details={agreementDetails[selectedAgreement] ?? []}
          onClose={closeAgreementModal}
          onAgree={acceptAgreement}
        />
      ) : null}
    </div>
  );
}

type AgreementModalProps = {
  title: string;
  details: string[];
  onClose: () => void;
  onAgree: () => void;
};

function AgreementModal({ title, details, onClose, onAgree }: AgreementModalProps) {
  return (
    <div className="absolute inset-0 z-20 bg-[#0f183a]/45 backdrop-blur-[2px]">
      <div className="absolute inset-x-5 bottom-6 rounded-[24px] bg-white px-6 pb-6 pt-5 shadow-[0_16px_40px_rgba(21,28,83,0.18)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[15px] font-semibold leading-6 text-[#4b506c]">{title}</p>
          </div>
          <button
            className="flex size-8 items-center justify-center rounded-full bg-[#f7f8fc]"
            type="button"
            onClick={onClose}
            aria-label="약관 닫기"
          >
            <img alt="" className="size-3.5" src={closeIcon} />
          </button>
        </div>

        <div className="mt-5 h-[264px] overflow-y-auto rounded-[18px] border border-[#e6ebf4] bg-[#fbfcff] px-4 py-4">
          {details.map((paragraph) => (
            <p
              key={`${title}-${paragraph}`}
              className={`text-[12px] leading-6 text-[#595d72] ${paragraph === "" ? "h-4" : ""}`}
            >
              {paragraph || "\u00A0"}
            </p>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <button
            className="h-[48px] w-[110px] rounded-[15px] bg-[#f2f2f6] text-sm font-medium text-[#4b5070]"
            type="button"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            className="flex-1 rounded-[15px] bg-[#425ae9] text-sm font-medium text-[#e5e8fa]"
            type="button"
            onClick={onAgree}
          >
            동의합니다
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyDataConsentScreen;
