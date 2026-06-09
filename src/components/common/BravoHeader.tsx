import closeIcon from "../../assets/common/close.png";
import blueDot from "../../assets/main/blue-dot.png";
import redDot from "../../assets/main/red-dot.png";
import backIcon from "../../assets/stay/back.png";

type BravoHeaderProps = {
  onClose: () => void;
  onBack?: () => void;
  showLogo?: boolean;
};

function BravoHeader({ onClose, onBack, showLogo = true }: BravoHeaderProps) {
  return (
    <header className="absolute left-0 top-0 h-[82px] w-full">
      {onBack && (
        <button
          className="absolute left-[18px] top-[22px] flex size-[38px] items-center justify-center"
          type="button"
          onClick={onBack}
          aria-label="이전"
        >
          <img alt="" className="h-3.5 w-[15px]" src={backIcon} />
        </button>
      )}

      {showLogo && (
        <div className="absolute left-[28px] top-[36px] flex h-[11px] items-center">
          <img alt="" className="size-2" src={redDot} />
          <span className="mx-[3px] text-[28px] font-bold leading-none text-[#32394e]">b</span>
          <img alt="" className="size-2" src={blueDot} />
        </div>
      )}

      <h1 className="absolute left-1/2 top-1/2 w-[86px] -translate-x-1/2 -translate-y-1/2 text-center text-lg font-bold">
        BRAVO AI
      </h1>
      <button
        className="absolute right-[18px] top-[22px] flex size-[38px] items-center justify-center"
        type="button"
        onClick={onClose}
        aria-label="닫기"
      >
        <img alt="" className="size-3.5" src={closeIcon} />
      </button>
    </header>
  );
}

export default BravoHeader;
