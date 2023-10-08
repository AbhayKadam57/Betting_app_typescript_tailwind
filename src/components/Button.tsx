type Props = {
  retFunction: any;
};

const Button = ({ retFunction }: Props) => {
  return (
    <button
      onClick={retFunction}
      className="transtion-all duration-500 border border-black py-12 w-full px-4 rounded-sm bg-indigo-500 text-white hover:bg-indigo-600"
    >
      Place Bet
    </button>
  );
};

export default Button;
