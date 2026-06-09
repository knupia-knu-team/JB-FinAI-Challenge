import benefit from "../assets/main/benefit.png";
import bell from "../assets/main/bell.png";
import blueDot from "../assets/main/blue-dot.png";
import bottomCenter from "../assets/main/bottom-center.png";
import chevronSmall from "../assets/main/chevron-small.png";
import chevronTop from "../assets/main/chevron-top.png";
import community from "../assets/main/community.png";
import globe from "../assets/main/globe.png";
import heroAiIcon from "../assets/main/hero-ai-icon.png";
import heroArrow from "../assets/main/hero-arrow.png";
import heroCard from "../assets/main/hero-card.png";
import housing from "../assets/main/housing.png";
import job from "../assets/main/job.png";
import korean from "../assets/main/korean.png";
import loan from "../assets/main/loan.png";
import medical from "../assets/main/medical.png";
import navBank from "../assets/main/nav-bank.png";
import navHome from "../assets/main/nav-home.png";
import navLife from "../assets/main/nav-life.png";
import navMenu from "../assets/main/nav-menu.png";
import newPillBg from "../assets/main/new-pill-bg.png";
import phone from "../assets/main/phone.png";
import redDot from "../assets/main/red-dot.png";
import remit from "../assets/main/remit.png";
import support from "../assets/main/support.png";
import visa from "../assets/main/visa.png";
import walking from "../assets/main/walking.png";

type MainScreenProps = {
  isActive: boolean;
  onBravoAiClick: () => void;
};

const lifeServices = [
  { icon: community, label: "커뮤니티" },
  { icon: phone, label: "알뜰폰비교" },
  { icon: korean, label: "한국어 배우기" },
  { icon: job, label: "구직 서비스" },
  { icon: medical, label: "의료서비스" },
  { icon: visa, label: "비자 신청" },
  { icon: housing, label: "숙소찾기" },
  { icon: benefit, label: "혜택" },
];

function MainScreen({ isActive, onBravoAiClick }: MainScreenProps) {
  return (
    <div
      className={`screen-layer bg-[#f7f8fc] font-inter text-[#32394e] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="1-1 메인"
      data-node-id="4:279"
      aria-hidden={!isActive}
    >
      <header className="absolute left-0 top-0 h-[132px] w-full">
        <div className="absolute left-[25px] top-[20px] flex h-[35px] items-center">
          <img alt="" className="h-2 w-2" src={redDot} />
          <span className="ml-[5px] text-[28px] font-bold leading-[35px]">b</span>
          <img alt="" className="ml-[5px] h-2 w-2" src={blueDot} />
          <span className="ml-[26px] text-[10px] font-medium text-[#505567]">혜택2건</span>
          <img alt="" className="ml-[14px] h-3 w-[7px]" src={chevronTop} />
        </div>
        <img alt="" className="absolute right-[58px] top-[29px] size-5" src={globe} />
        <img alt="" className="absolute right-[25px] top-[29px] h-5 w-[18px]" src={bell} />

        <div className="absolute left-[25px] top-[85px] flex items-center">
          <div className="flex h-8 w-[33px] items-center justify-center rounded-[22px] border border-[#1d4dfa] bg-[#194af8] text-xl font-bold text-[#cdd8fb]">
            P
          </div>
          <span className="ml-[15px] text-base font-semibold text-[#363d52]">0원</span>
        </div>
        <button className="absolute right-5 top-[89px] h-[30px] w-[94px] rounded-[19px] border border-[#2b58f4] bg-[#1949f2] text-xs text-[#a5bbf8]">
          계좌로 받기
        </button>
      </header>

      <section className="absolute left-5 top-[140px] flex gap-3">
        <div className="relative h-[81px] w-[175px] rounded-[10px] bg-white">
          <img alt="" className="absolute left-[22px] top-[21px] h-9 w-[39px]" src={remit} />
          <p className="absolute left-[75px] top-[22px] text-xs text-[#646877]">해외송금비교</p>
          <p className="absolute left-[75px] top-[42px] text-[10px] text-[#a2a8b6]">
            수수료 우대 80%
          </p>
        </div>
        <div className="relative h-[81px] w-[175px] rounded-[10px] bg-white">
          <img alt="" className="absolute left-[22px] top-[21px] h-9 w-[37px]" src={loan} />
          <p className="absolute left-[75px] top-[22px] text-xs text-[#646877]">대출</p>
          <p className="absolute left-[75px] top-[42px] text-[10px] text-[#a2a8b6]">
            맞춤 상품 추천
          </p>
        </div>
      </section>

      <section className="absolute left-5 top-[233px] h-[45px] w-[362px] rounded-[10px] bg-white">
        <img alt="" className="absolute left-5 top-[7px] h-[30px] w-[31px]" src={walking} />
        <span className="absolute left-[66px] top-[15px] text-xs text-[#707381]">브라보워킹</span>
        <span className="absolute right-[42px] top-[15px] text-xs font-medium text-[#6484f5]">
          0 걸음
        </span>
        <img alt="" className="absolute right-5 top-4 h-3 w-[7px]" src={chevronSmall} />
      </section>

      <button
        className="absolute left-5 top-[290px] h-[158px] w-[362px] overflow-hidden rounded-[10px] text-left"
        type="button"
        onClick={onBravoAiClick}
        aria-label="BRAVO AI 정보 입력 시작"
      >
        <img alt="" className="absolute inset-0 size-full object-cover" src={heroCard} />
        <h1 className="absolute left-[26px] top-[37px] text-2xl font-bold text-white">BRAVO AI</h1>
        <div className="absolute left-[148px] top-[45px] h-[21px] w-[38px]">
          <img alt="" className="absolute inset-0 size-full" src={newPillBg} />
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-[#cfd7f7]">
            NEW
          </span>
        </div>
        <p className="absolute left-[25px] top-[77px] text-[10px] text-[#b9c6f3]">
          외국인 맞춤 금융 AI 에이전트
        </p>
        <p className="absolute left-[26px] top-[99px] text-xs font-medium text-[#cfd8f7]">
          지금 바로 상담받기
        </p>
        <img alt="" className="absolute right-[10px] bottom-10 size-[30px]" src={heroArrow} />
        <img alt="" className="absolute left-[190px] top-[15px] size-[30px]" src={heroAiIcon} />
      </button>

      <h2 className="absolute left-[25px] top-[473px] text-sm font-medium text-[#4d5365]">
        생활 서비스
      </h2>
      <section className="absolute left-5 top-[502px] grid h-[220px] w-[362px] grid-cols-2 gap-x-[52px] gap-y-[18px] rounded-[10px] bg-white px-[25px] py-[17px]">
        {lifeServices.map((item) => (
          <div key={item.label} className="flex h-[33px] items-center gap-[13px]">
            <img alt="" className="size-[33px]" src={item.icon} />
            <span className="whitespace-nowrap text-xs text-[#767986]">{item.label}</span>
          </div>
        ))}
      </section>

      <h2 className="absolute left-[25px] top-[755px] text-sm font-medium text-[#4d5365]">
        금융 서비스
      </h2>
      <img alt="" className="absolute right-5 top-[729px] size-[45px]" src={support} />

      <nav className="absolute bottom-0 left-0 h-[85px] w-full bg-white">
        <div className="absolute left-[34px] top-5 flex w-[343px] items-start justify-between">
          <NavItem icon={navHome} label="홈" active />
          <NavItem icon={navLife} label="라이프" />
          <img alt="" className="mt-[-3px] h-[50px] w-[49px]" src={bottomCenter} />
          <NavItem icon={navBank} label="뱅킹" />
          <NavItem icon={navMenu} label="전체메뉴" />
        </div>
      </nav>
    </div>
  );
}

type NavItemProps = {
  icon: string;
  label: string;
  active?: boolean;
};

function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <div className="flex w-[45px] flex-col items-center gap-[7px]">
      <img alt="" className="h-[23px] w-6 object-contain" src={icon} />
      <span className={`text-xs ${active ? "font-semibold text-[#6786f8]" : "text-[#a7adb9]"}`}>
        {label}
      </span>
    </div>
  );
}

export default MainScreen;
