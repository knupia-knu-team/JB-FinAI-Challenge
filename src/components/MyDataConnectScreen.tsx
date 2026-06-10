import connectHero from "../assets/mydata/connect-hero.png";
import infoAccount from "../assets/mydata/info-account.png";
import infoIncome from "../assets/mydata/info-income.png";
import infoLoan from "../assets/mydata/info-loan.png";
import infoSpending from "../assets/mydata/info-spending.png";
import nextChevron from "../assets/common/next-chevron.png";
import BravoHeader from "./common/BravoHeader";

type MyDataConnectScreenProps = {
  isActive: boolean;
  onClose: () => void;
  onNext: () => void;
};

const myDataItems = [
  { title: "소득 정보", description: "최근 급여 입금 내역", icon: infoIncome },
  { title: "계좌 정보", description: "잔액 및 거래 내역", icon: infoAccount },
  { title: "대출 정보", description: "기존 대출 현황", icon: infoLoan },
  { title: "소비 정보", description: "카드 사용 내역(업종별, 월별)", icon: infoSpending },
];

function MyDataConnectScreen({ isActive, onClose, onNext }: MyDataConnectScreenProps) {
  return (
    <div
      className={`screen-layer bg-white font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="3-1 연동"
      data-node-id="22:116"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />
      <ProgressDots />

      <div className="absolute left-[30px] top-[164px] h-[145px] w-[343px]">
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic text-[#4b506c] text-[16px] whitespace-nowrap">
          <p className="leading-[normal]">마이데이터 연동으로</p>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic text-[#464a68] text-[16px] whitespace-nowrap" style={{ top: 24 }}>
          <p>
            <span className="leading-[normal] text-[#425ae9]">더 정확한 추천</span>
            <span className="leading-[normal]">을 받아보세요.</span>
          </p>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic text-[#7d819a] text-[12px] whitespace-nowrap" style={{ top: 64 }}>
          <p className="leading-[normal]">직접 입력하지 않아도</p>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic text-[#7d819a] text-[12px] whitespace-nowrap" style={{ top: 84 }}>
          <p className="leading-[normal]">소득, 거래내역, 대출정보를 자동으로 불러와</p>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic text-[#7d819a] text-[12px] whitespace-nowrap" style={{ top: 104 }}>
          <p className="leading-[normal]">더 정확한 상품 추천이 가능합니다.</p>
        </div>
      </div>

      <div className="absolute h-[188px] left-[219px] top-[110px] w-[171px] overflow-hidden" data-node-id="124:657" data-name="image 65">
        <img
          alt=""
          className="absolute h-[193.81%] left-[-19.07%] top-[-41.34%] w-[142.23%] max-w-none object-cover pointer-events-none"
          src={connectHero}
        />
      </div>

      <InfoList className="absolute left-5 top-[307px]" />

      <p className="absolute bottom-[96px] left-[58px] text-[10px] text-[#7d819a]">
        * 안전한 마이데이터 연동을 위해 금융보안원 표준 API를 사용합니다.
      </p>

      <button
        className="absolute bottom-[30px] left-5 h-[50px] w-[362px] rounded-[15px] bg-[#425ae9] text-sm font-medium text-[#e5e8fa]"
        type="button"
        onClick={onNext}
      >
        마이데이터 연동하기
        <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
      </button>
    </div>
  );
}

export function ProgressDots() {
  return (
    <div className="absolute left-1/2 top-[92px] h-[9px] w-36 -translate-x-1/2">
      <div className="absolute left-[4px] top-1/2 h-px w-[136px] -translate-y-1/2 bg-[#dfe1e8]" />
      <div className="absolute left-0 top-0 size-[9px] rounded-full bg-[#4f72f2]" />
      <div className="absolute left-[45px] top-0 size-[9px] rounded-full bg-[#4f72f2]" />
      <div className="absolute left-[90px] top-0 size-[9px] rounded-full bg-[#4f72f2]" />
      <div className="absolute right-0 top-[2px] size-[7px] rounded-full bg-[#dfe1e8]" />
    </div>
  );
}

export function InfoList({ className = "" }: { className?: string }) {
  return (
    <section className={`${className} h-[284px] w-[362px] overflow-hidden rounded-[20px] border border-[#ececec] bg-white`}>
      {myDataItems.map((item, index) => (
        <div key={item.title} className="relative h-[71px]">
          {index > 0 && <div className="absolute left-5 right-5 top-0 h-px bg-[#ececec]" />}
          <img alt="" className="absolute left-[27px] top-[15px] size-[43px] object-contain" src={item.icon} />
          <p className="absolute left-[85px] top-[16px] text-sm font-medium text-[#4e5361]">{item.title}</p>
          <p className="absolute left-[85px] top-10 text-xs text-[#595d72]">{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default MyDataConnectScreen;
