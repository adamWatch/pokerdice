export function checkDices(listOfDices:number[] = []) {
  function countOccurrences() {
    const listOfNum = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
    };
    listOfDices.map((dice) => {
      if (dice === 1) {
        listOfNum.one += 1;
      } else if (dice === 2) {
        listOfNum.two += 1;
      } else if (dice === 3) {
        listOfNum.three += 1;
      } else if (dice === 4) {
        listOfNum.four += 1;
      } else if (dice === 5) {
        listOfNum.five += 1;
      }
      return;
    });
    return listOfNum;
  }
  const listOfNum = countOccurrences();
  const throwedLayout = {
    text: '',
    value: 0,
  };

  if ((listOfNum.one === 2) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'One pair of 1';
    throwedLayout.value = 2;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 2) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'One pair of 2';
    throwedLayout.value = 3;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 2) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'One pair of 3';
    throwedLayout.value = 4;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 2) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'One pair of 4';
    throwedLayout.value = 5;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 2)) {
    throwedLayout.text = 'One pair of 5';
    throwedLayout.value = 6;
  } if ((listOfNum.one === 2) && (listOfNum.two === 2) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Two pair of 1 and 2';
    throwedLayout.value = 7;
  } if ((listOfNum.one === 2) && (listOfNum.two === 0 || 1) && (listOfNum.three === 2) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Two pair of 1 and 3';
    throwedLayout.value = 8;
  } if ((listOfNum.one === 2) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 2) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Two pair of 1 and 4';
    throwedLayout.value = 9;
  } if ((listOfNum.one === 2) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Two pair of 1 and 5';
    throwedLayout.value = 10;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 2) && (listOfNum.three === 2) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Two pair of 2 and 3';
    throwedLayout.value = 11;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 2) && (listOfNum.three === 0 || 1) && (listOfNum.four === 2) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Two pair of 2 and 4';
    throwedLayout.value = 12;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 2) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Two pair of 2 and 5';
    throwedLayout.value = 13;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 2) && (listOfNum.four === 2) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Two pair of 3 and 4';
    throwedLayout.value = 14;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 2) && (listOfNum.four === 0 || 1) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Two pair of 3 and 5';
    throwedLayout.value = 15;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 2) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Two pair of 4 and 5';
    throwedLayout.value = 16;
  } if ((listOfNum.one === 3) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Three of a kind of 1';
    throwedLayout.value = 17;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 3) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Three of a kind of 2';
    throwedLayout.value = 18;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 3) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Three of a kind of 3';
    throwedLayout.value = 19;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 3) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Three of a kind of 4';
    throwedLayout.value = 20;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 3)) {
    throwedLayout.text = 'Three of a kind of 5';
    throwedLayout.value = 21;
  } if ((listOfNum.one === 1) && (listOfNum.two === 1) && (listOfNum.three === 1) && (listOfNum.four === 1) && (listOfNum.five === 1)) {
    throwedLayout.text = 'Straight';
    throwedLayout.value = 22;
  } if ((listOfNum.one === 3) && (listOfNum.two === 2) && (listOfNum.three === 0) && (listOfNum.four === 0) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Full house of 1 and 2';
    throwedLayout.value = 23;
  } if ((listOfNum.one === 3) && (listOfNum.two === 0) && (listOfNum.three === 2) && (listOfNum.four === 0) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Full house of 1 and 3';
    throwedLayout.value = 24;
  } if ((listOfNum.one === 3) && (listOfNum.two === 0) && (listOfNum.three === 0) && (listOfNum.four === 2) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Full house of 1 and 4';
    throwedLayout.value = 25;
  } if ((listOfNum.one === 3) && (listOfNum.two === 0) && (listOfNum.three === 0) && (listOfNum.four === 0) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Full house of 1 and 5';
    throwedLayout.value = 27;
  } if ((listOfNum.one === 0) && (listOfNum.two === 3) && (listOfNum.three === 2) && (listOfNum.four === 0) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Full house of 2 and 3';
    throwedLayout.value = 28;
  } if ((listOfNum.one === 0) && (listOfNum.two === 3) && (listOfNum.three === 0) && (listOfNum.four === 2) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Full house of 2 and 4';
    throwedLayout.value = 29;
  } if ((listOfNum.one === 0) && (listOfNum.two === 3) && (listOfNum.three === 0) && (listOfNum.four === 0) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Full house of 2 and 5';
    throwedLayout.value = 30;
  } if ((listOfNum.one === 0) && (listOfNum.two === 0) && (listOfNum.three === 3) && (listOfNum.four === 2) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Full house of 3 and 4';
    throwedLayout.value = 31;
  } if ((listOfNum.one === 0) && (listOfNum.two === 0) && (listOfNum.three === 3) && (listOfNum.four === 0) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Full house of 3 and 5';
    throwedLayout.value = 32;
  } if ((listOfNum.one === 0) && (listOfNum.two === 0) && (listOfNum.three === 0) && (listOfNum.four === 3) && (listOfNum.five === 2)) {
    throwedLayout.text = 'Full house of 4 and 5';
    throwedLayout.value = 33;
  } if ((listOfNum.one === 4) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Four of a kind of 1';
    throwedLayout.value = 34;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 4) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Four of a kind of 2';
    throwedLayout.value = 35;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 4) && (listOfNum.four === 0 || 1) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Four of a kind of 3';
    throwedLayout.value = 36;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 4) && (listOfNum.five === 0 || 1)) {
    throwedLayout.text = 'Four of a kind of 4';
    throwedLayout.value = 37;
  } if ((listOfNum.one === 0 || 1) && (listOfNum.two === 0 || 1) && (listOfNum.three === 0 || 1) && (listOfNum.four === 0 || 1) && (listOfNum.five === 4)) {
    throwedLayout.text = 'Four of a kind of 5';
    throwedLayout.value = 38;
  } if ((listOfNum.one === 5) && (listOfNum.two === 0) && (listOfNum.three === 0) && (listOfNum.four === 0) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Poker of 1 ';
    throwedLayout.value = 39;
  } if ((listOfNum.one === 0) && (listOfNum.two === 5) && (listOfNum.three === 0) && (listOfNum.four === 0) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Poker of 2 ';
    throwedLayout.value = 40;
  } if ((listOfNum.one === 0) && (listOfNum.two === 0) && (listOfNum.three === 5) && (listOfNum.four === 0) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Poker of 3 ';
    throwedLayout.value = 41;
  } if ((listOfNum.one === 0) && (listOfNum.two === 0) && (listOfNum.three === 0) && (listOfNum.four === 5) && (listOfNum.five === 0)) {
    throwedLayout.text = 'Poker of 4 ';
    throwedLayout.value = 42;
  } if ((listOfNum.one === 0) && (listOfNum.two === 0) && (listOfNum.three === 0) && (listOfNum.four === 0) && (listOfNum.five === 5)) {
    throwedLayout.text = 'Poker of 2 ';
    throwedLayout.value = 43;
  }
  console.log(throwedLayout);
  return throwedLayout;
}
