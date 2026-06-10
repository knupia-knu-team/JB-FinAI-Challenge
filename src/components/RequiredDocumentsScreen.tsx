import nextChevron from "../assets/common/next-chevron.png";
import documentCheckIcon from "../assets/application/document-check.png";
import documentItemIcon from "../assets/application/document-item.png";
import backIcon from "../assets/stay/back.png";
import BravoHeader from "./common/BravoHeader";

type RequiredDocumentsScreenProps = {
  isActive: boolean;
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
};

const requiredDocuments = [
  {
    title: "외국인등록증",
    note: "(또는 외국인등록 사실증명)",
  },
  {
    title: "표준근로계약서",
  },
  {
    title: "급여명세서",
    note: "(최근 3개월)",
  },
  {
    title: "재직증명서",
  },
  {
    title: "건강보험 자격득실 확인서",
    note: "(선택)",
  },
  {
    title: "소득금액증명원",
    note: "(또는 급여명세표, 원천징수영수증) (선택)",
  },
];

const noticeLines = [
  "서류는 발급일로부터 3개월 이내만 유효해요.",
  "체류자격/고용형태에 따라 추가 서류가 필요할 수 있어요.",
  "서류는 원본 또는 이미지 파일로 제출 가능합니다.",
];

function RequiredDocumentsScreen({
  isActive,
  onClose,
  onBack,
  onNext,
}: RequiredDocumentsScreenProps) {
  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="7-1 서류"
      data-node-id="74:225"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />

      <section className="absolute left-[30px] top-[102px]">
        <h2 className="text-[16px] font-semibold leading-[22px] text-[#4b506c]">필요 서류 확인</h2>
        <p className="mt-[12px] text-xs font-normal text-[#7d819a]">대출 신청 시 아래 서류를 준비해 주세요.</p>
      </section>

      <section className="absolute left-5 top-[159px] w-[362px] rounded-[20px] border border-[#ececec] bg-white px-5 py-[10px]">
        {requiredDocuments.map((document, index) => (
          <div
            key={document.title}
            className={`flex min-h-[71px] items-center gap-[18px] ${index !== requiredDocuments.length - 1 ? "border-b border-[#ececec]" : ""}`}
          >
            <img alt="" className="size-[35px] shrink-0 object-contain" src={documentItemIcon} />
            <div>
              <p className="text-[14px] font-medium leading-[19px] text-[#4e5361]">{document.title}</p>
              {document.note ? (
                <p className="mt-[4px] text-xs font-normal leading-[17px] text-[#595d72]">{document.note}</p>
              ) : null}
            </div>
          </div>
        ))}
      </section>

      <section className="absolute left-5 top-[598px] h-[129px] w-[362px] rounded-[20px] bg-[#f7f8fc] px-7 py-[17px]">
        <div className="flex items-center gap-[9px]">
          <img alt="" className="h-[18px] w-[17px] object-contain" src={documentCheckIcon} />
          <p className="text-[14px] font-medium text-[#585b7b]">알아두세요!</p>
        </div>

        <ul className="mt-[12px] space-y-[4px] pl-[18px] text-xs leading-[18px] text-[#8c8ea4]">
          {noticeLines.map((line) => (
            <li key={line} className="list-disc">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <div className="absolute bottom-[30px] left-5 flex h-[110px] w-[362px] flex-col gap-[10px]">
        <button
          className="relative h-[50px] w-full rounded-[15px] bg-[#425ae9] text-sm font-medium text-[#e5e8fa]"
          type="button"
          onClick={onNext}
        >
          신청하기
          <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
        </button>
        <button
          className="relative h-[50px] w-full rounded-[15px] bg-[#f2f2f6] text-sm font-medium text-[#4b5070]"
          type="button"
          onClick={onBack}
        >
          <img alt="" className="absolute left-[21px] top-[18px] h-3.5 w-[15px]" src={backIcon} />
          이전: 현재 조건 보기
        </button>
      </div>
    </div>
  );
}

export default RequiredDocumentsScreen;
