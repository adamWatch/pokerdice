import React from 'react';
import './dice.css';

interface Props{
  diceNo: string
}

export function Dice(props:Props) {
  const { diceNo } = props;
  const urlToImage = `url(/images/${diceNo}.png)`;
  console.log(urlToImage);

  return (
    <div className="dice__container">
      <div className="dice" style={{ backgroundImage: urlToImage }} />
    </div>
  );
}
