import { useState, useEffect } from "react";
import Button from "./Button";
import BetBox from "./BetBox";
import axios from "axios";

const Controller = () => {
  const [hasWon, SetHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");
  const [randomNumber, setRandomNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlaceBet = async () => {
    setIsLoading(true);
    let isWinner = false;

    const url =
      "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

    try {
      const res = await axios.get(url);

      if (res.status === 200) {
        const val = res.data;

        setRandomNumber(val);
        console.log(val);

        if (val >= 50 && betDirection === "up") {
          isWinner = true;
        } else if (val < 50 && betDirection === "down") {
          isWinner = true;
        }
      } else {
        console.error("Something went wrong");
      }
    } catch (err: any) {
      console.error(err.data, err.message);
    }

    SetHasWon(isWinner);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(hasWon);
  }, [hasWon]);

  return (
    <div className="w-full md:w-[850px] lg:w-[1200px] mx-auto p-10">
      <Button retFunction={handlePlaceBet} />
      <BetBox
        betDirection={betDirection}
        setBetDirection={setBetDirection}
        hasWon={hasWon}
        randomNumber={randomNumber}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Controller;

//https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new
