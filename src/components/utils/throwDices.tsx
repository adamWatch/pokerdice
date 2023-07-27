export const throwDices = (amountOfDices:number) => {
  const listOfDices = [];
  for (let i = 0; i < amountOfDices; i++) {
    const dice = Math.floor(Math.random() * 5) + 1;
    listOfDices.push(dice);
  }

  return listOfDices;
};
