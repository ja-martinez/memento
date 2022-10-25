import ResetButton from "./ResetButton";

const Info = ({ reset }) => {
  return (
    <div className="game-info">
      <ResetButton reset={reset} />
    </div>
  );
};

export default Info;
