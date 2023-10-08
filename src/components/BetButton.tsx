type Props = {
  direction: string;
  betDirection: string;
  setBetDirection: any;
};

const ButtonUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
    />
  </svg>
);

const ButtonDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
    />
  </svg>
);

const BetButton = ({ direction, betDirection, setBetDirection }: Props) => {
  return (
    <div className="w-full border flex justify-center p-5">
      {direction === "up" ? (
        <button
          onClick={() => setBetDirection("up")}
          className={
            "transition-all duration-300 p-12 rounded-full hover:bg-green-500 " +
            (betDirection === "up" ? "bg-green-500" : "bg-gray-100")
          }
        >
          {ButtonUp}
        </button>
      ) : (
        <button
          onClick={() => setBetDirection("down")}
          className={
            "transition-all duration-300 p-12 rounded-full hover:bg-red-500 " +
            (betDirection === "down" ? "bg-red-500" : "bg-gray-100")
          }
        >
          {ButtonDown}
        </button>
      )}
    </div>
  );
};

export default BetButton;
