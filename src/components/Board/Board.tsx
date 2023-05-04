import React from 'react';
import './board.css';
import { Dice } from '../Dice/Dice';
import { TickField } from '../TickField/TickField';

export function Board() {
  return (
    <div className="board">
      <h2>Ai Dices</h2>
      <div className="dices__row ai">
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />

      </div>

      <h2>Player Dices</h2>
      <div className="dices__row player">
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />
        <Dice diceNo="four" />

      </div>
      <div className="tick-field__row">
        <TickField />
        <TickField />
        <TickField />
        <TickField />
        <TickField />
        <TickField />
      </div>
    </div>
  );
}
