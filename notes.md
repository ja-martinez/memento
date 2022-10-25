# Notes

## Cards
There are 16 cards and 8 types. So 2 types and 16 id's
The cards will be arranged in a grid and will be ordered in numerical order by id.
A function will then assign each card a type randomly.
Cards will have types and id's starting at 0;


The cards could be set with types referring to id's:
```
cards = {
  1: [1,2],
  2: [3,4],
  3: [4,5],
  4: [6,7]
}
```

or the cards could be set with id's referring to type:
```
cards = {
  1: 1,
  2: 1,
  3: 2,
  4: 2,
  5: 3,
  6: 3,
  7: 4,
  8: 4
}
```

or more simply, it can just be an array with the array index being the card id:
```
cards = [
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4
]
```

Maybe we could make each member in the array be a card, each with states of isPaired and type;

## PairedTypes

we could have the array of cards with types and an object for pairedtypes containing an key for each type and a value of whether or not it's paired.
- every time we render the game, we would have to iterate over this object to count types paired and check if the game is finished

we can also just have an array of types that have  been paired.
- every time we render a card, we would have to check the array to see if it's paired

## Random
Make a function that assigns 16 cards a type.
There are 8 types and each type can only have 2 cards.
(Assigns each type 2 cards)

Essentially, we are starting with a 16 sided die, and removing one side as we progress.
We could also look at it like we have an 8 sided die and remove one side once we have two of a type
The function should return the cards array.

## Mobile
Just overflow the cards, but have 2 cards in row as a minimum

### Application Flow

- Click on card 1
- card 1 is revealed
- click on another card 2
- card 2 is revealed
  - if it's of the same type, keep them flipped and don't let user click them again
  - if if's of a different type, wait some time, don't let user click cards, and then then hide them
  - if all cards are revealed, show message saying, "You finished!"
  - 