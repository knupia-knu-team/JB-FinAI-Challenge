import completeBubble from "../assets/mydata/complete-bubble.png";
import completeHeart from "../assets/mydata/complete-heart.png";
import completeHero from "../assets/mydata/complete-hero.png";
import securityShield from "../assets/common/security-shield.png";
import summaryIncome from "../assets/mydata/summary-income.png";
import summaryResidence from "../assets/mydata/summary-residence.png";
import summaryStay from "../assets/mydata/summary-stay.png";
import summaryVisa from "../assets/mydata/summary-visa.png";
import nextChevron from "../assets/common/next-chevron.png";
import BravoHeader from "./common/BravoHeader";
import { ProgressDots } from "./MyDataConnectScreen";
import {
  formatShortWon,
  getResidenceLabel,
  type UserProfile,
} from "../userProfile";

type MyDataCompleteScreenProps = {
  isActive: boolean;
  userProfile: UserProfile;
  onClose: () => void;
  onNext: () => void;
};

function MyDataCompleteScreen({
  isActive,
  userProfile,
  onClose,
  onNext,
}: MyDataCompleteScreenProps) {
  const summaryItems = [
    { title: "비자 정보", value: `${userProfile.visa} 비자`, icon: summaryVisa },
    { title: "체류기간", value: `${userProfile.remainingStayMonths}개월`, icon: summaryStay },
    { title: "한국 거주", value: getResidenceLabel(userProfile.residencePeriod), icon: summaryResidence },
    { title: "월 평균 소득", value: formatShortWon(userProfile.monthlyIncome), icon: summaryIncome },
  ];

  return (
    <div
      className={`screen-layer bg-[#f7f8fc] font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="3-3 연동"
      data-node-id="22:156"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />
      <ProgressDots />

      <div className="absolute left-[227px] top-[166px] h-[116px] w-[134px]" data-node-id="70:263" data-name="image 7">
        <img
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover pointer-events-none"
          src={completeHero}
        />
      </div>
      <img
        alt=""
        className="absolute bottom-[718px] right-[50px] h-[35px] w-[32px] object-contain"
        data-node-id="124:667"
        data-name="Image"
        src={completeBubble}
      />
      <img
        alt=""
        className="absolute bottom-[675px] right-[135px] h-[27px] w-[22px] object-contain"
        data-node-id="124:668"
        data-name="Image"
        src={completeHeart}
      />

      <section className="absolute left-[30px] top-[164px] h-[118px] w-[333px]">
        <h2 className="text-base font-semibold leading-6 text-[#4b506c]">
          고객님의 정보를
          <br />
          <span className="text-[#464a68]">잘 조회했어요!</span>
        </h2>
        <p className="mt-[18px] text-xs leading-5 text-[#7d819a]">
          입력하신 정보와 마이데이터를
          <br />
          기반으로 안전하게 확인 완료했어요.
        </p>
      </section>

      <section className="absolute left-5 top-[282px] grid w-[362px] grid-cols-2 gap-2.5">
        {summaryItems.map((item) => (
          <div key={item.title} className="relative h-[107px] rounded-[10px] border border-[#e1e8f5] bg-[#fcfcfd]">
            <img alt="" className="absolute left-[30px] top-8 size-[43px] object-contain" src={item.icon} />
            <p className="absolute left-[97px] top-[33px] text-sm font-medium text-[#4e5361]">{item.title}</p>
            <p className="absolute left-[97px] top-[61px] text-xs text-[#595d72]">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="absolute left-5 top-[689px] h-[85px] w-[362px] rounded-[10px] bg-[#ecf3fd]">
        <img alt="" className="absolute left-[25px] top-[25px] h-[35px] w-[30px] object-contain" src={securityShield} />
        <p className="absolute left-[77px] top-[25px] text-xs leading-5 text-[#656d91]">
          고객님의 정보는 암호화되어 <span className="text-[#5f7af1]">안전하게 보호</span>되며,
          <br />
          동의 없이 제3자에게 제공되지 않습니다.
        </p>
      </section>

      <button
        className="absolute bottom-[30px] left-5 h-[50px] w-[362px] rounded-[15px] bg-[#425ae9] text-sm font-medium text-[#e5e8fa]"
        type="button"
        onClick={onNext}
      >
        맞춤 상품 추천받기
        <img alt="" className="absolute right-5 top-[18px] h-[15px] w-[9px]" src={nextChevron} />
      </button>
    </div>
  );
}

export default MyDataCompleteScreen;
