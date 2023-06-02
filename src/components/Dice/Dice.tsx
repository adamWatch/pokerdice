import React from 'react';
import './dice.css';

interface Props{
  diceNo: number
}

export function Dice(props:Props) {
  const { diceNo } = props;
  const urlToImage = `url(/images/${diceNo}.png)`;

  return (
    <div className="dice__container">
      <div className="dice" style={{ backgroundImage: urlToImage }} />
    </div>
  );
}
