import bankTransitionBrand from "../assets/application/bank-transition-brand.png";
import bankTransitionHero from "../assets/application/bank-transition-hero.png";
import BravoHeader from "./common/BravoHeader";

type BankMoveScreenProps = {
  isActive: boolean;
  onClose: () => void;
};

function BankMoveScreen({ isActive, onClose }: BankMoveScreenProps) {
  return (
    <div
      className={`screen-layer bg-[#fcfcfc] font-inter text-[#151c53] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      data-name="7-2 서류"
      data-node-id="74:227"
      aria-hidden={!isActive}
    >
      <BravoHeader onClose={onClose} />

      <img
        alt=""
        className="absolute left-1/2 top-[140px] h-[36px] w-[263px] -translate-x-1/2 object-contain"
        src={bankTransitionBrand}
      />

      <h2 className="absolute left-1/2 top-[204px] w-full -translate-x-1/2 text-center text-[26px] font-semibold leading-[35px] text-[#4b506c]">
        광주은행으로
        <br />
        이동 중이에요
      </h2>

      <div className="absolute left-1/2 top-[301px] flex h-[26px] w-[136px] -translate-x-1/2 items-center justify-center rounded-[20px] bg-[#ecf3fd] text-[14px] font-semibold text-[#425ae9]">
        BRAVO AI
        <span className="ml-0.5 text-[#4b506c]">와 함께,</span>
      </div>

      <p className="absolute left-1/2 top-[337px] -translate-x-1/2 text-center text-[14px] font-semibold text-[#4b506c]">
        BRAVO한 금융 LIFE
      </p>

      <div className="absolute left-0 top-[357px] h-[517px] w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 h-[179px] w-full bg-[#e7ecfc]" />
        <img alt="" className="absolute left-1/2 top-0 h-[338px] w-[402px] -translate-x-1/2 object-cover" src={bankTransitionHero} />
      </div>

      <section className="absolute left-5 top-[686px] h-[146px] w-[362px] rounded-[20px] bg-[#f7f8fc] px-[28px] py-[20px]">
        <ul className="space-y-[10px] pl-[18px] text-xs leading-[18px] text-[#8c8ea4]">
          <li className="list-disc">
            TOGETHER 외국인신용대출은 Bravo Korea의 제휴사인 광주은행에서 제공합니다.
          </li>
          <li className="list-disc">
            Bravo Korea는 광주은행 TOGETHER 외국인신용대출 페이지에 연결하는 역할을 하며, 서비스의 제공과 책임은
            제휴사인 광주은행에 있습니다.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BankMoveScreen;
