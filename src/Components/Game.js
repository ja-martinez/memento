import { useState } from "react";
import CardGrid from "./CardGrid";
import Info from "./Info";

const Game = () => {
  const randomizeCards = (size) => {
    // creates array of cards where the index is the id/order and the values are the pairing type
    let cards = new Array(size).fill(0);
    let typesAvailable = new Array(size).fill(0);
    const pairingSize = 2;
    const typesCount = size / pairingSize;

    // initialize types available
    typesAvailable = typesAvailable.map((val, index) => index % typesCount);

    cards = cards.map((v) => {
      const typeIndex = Math.floor(Math.random() * typesAvailable.length);
      const type = typesAvailable[typeIndex];
      typesAvailable.splice(typeIndex, 1);
      return type;
    });

    return cards;
  };
  const gameSize = 16;
  const pairingSize = 2;
  const typesSize = gameSize / pairingSize;
  // types are 0 to typeSize indeces are 0 to gameSize

  const [cards, setCards] = useState(() => randomizeCards(gameSize));
  const [pairedTypes, setPairedTypes] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const addPairedType = (type) => {
    setPairedTypes((prev) => [...prev, type]);

    if (pairedTypes.length + 1 === typesSize) {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCards(randomizeCards(gameSize));
    setPairedTypes([]);
    isFinished && setIsFinished(false);
  };

  return (
    <div className="game">
      <CardGrid
        cards={cards}
        pairedTypes={pairedTypes}
        addPairedType={addPairedType}
        pairingSize={pairingSize}
      />
      <Info reset={reset} isFinished={isFinished} />
    </div>
  );
};

export default Game;
