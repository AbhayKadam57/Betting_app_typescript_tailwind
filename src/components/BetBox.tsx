import BetButton from "./BetButton";

type Props = {
  betDirection: string;
  setBetDirection: any;
  hasWon: Boolean;
  randomNumber: number;
  isLoading: Boolean;
};

const BetBox = ({
  betDirection,
  setBetDirection,
  hasWon,
  randomNumber,
  isLoading,
}: Props) => {
  return (
    <div className="mt-4">
      <div className="bg-indigo-900 flex text-white justify-end p-2">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p>Random Number Retured : {randomNumber}</p>
        )}
      </div>
      <div className="flex justify-between">
        <BetButton
          betDirection={betDirection}
          setBetDirection={setBetDirection}
          direction="up"
        />
        <BetButton
          betDirection={betDirection}
          setBetDirection={setBetDirection}
          direction="down"
        />
      </div>
      <div className="bg-gray-100 flex justify-center p-10">
        {hasWon ? (
          <h1 className="text-5xl font-bold text-green-500">WINNER</h1>
        ) : (
          <h1 className="text-5xl font-bold text-red-500">LOSER</h1>
        )}
      </div>
    </div>
  );
};

export default BetBox;
