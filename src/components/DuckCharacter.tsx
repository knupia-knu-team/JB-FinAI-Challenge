import duckCharacter from "../assets/loading-duck-kakao.png";

type DuckCharacterProps = {
  className?: string;
};

function DuckCharacter({ className = "" }: DuckCharacterProps) {
  return (
    <img
      alt="bravo AI character"
      className={`duck-character object-contain ${className}`}
      src={duckCharacter}
    />
  );
}

export default DuckCharacter;
