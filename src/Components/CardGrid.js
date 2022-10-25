import { useState, useEffect } from "react";
import Card from "./Card";

// TODO: consider whether to change selected cards to a hash table

const CardGrid = ({ cards, pairedTypes, addPairedTypes, pairingSize }) => {
  const [selectedCards, setSelectedCards] = useState([]); // stores index of selected cards
  const [isClearing, setIsClearing] = useState(false);
  const clearTime = 500; // waiting time to clear after a wrong selection

  // check if newly selected card is of the same type
  if (cards[selectedCards[0]] === cards[selectedCards.slice(-1)[0]]) {
    if (selectedCards.length === pairingSize) {
      addPairedTypes(cards[selectedCards[0]]);
      setSelectedCards([]); // TODO: may be a problem
    }
  } else {
    setIsClearing(true);
  }

  useEffect(() => { // wait some time before clearing selected cards
    if (isClearing) {
      setTimeout(() => {
        setSelectedCards([]);
        setIsClearing(true);
      }, clearTime);
    }
  }, [isClearing]);

  const selectCard = (key) => {
    setSelectedCards([...selectedCards, key]);
  };

  return (
    <div className="card-grid">
      {cards.map((type, index) => (
        <Card
          key={index}
          type={type}
          visible={pairedTypes.includes(type) || selectedCards.includes(index)}
          handleSelect={selectCard}
          isClearing={isClearing}
        />
      ))}
    </div>
  );
};

export default CardGrid;
