/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import './board.css';
import { Dice } from '../Dice/Dice';
import { TickField } from '../TickField/TickField';
import { checkDices } from '../utils/checkDices';
import { aiChooser } from '../utils/aiChooser';
import { throwDices } from '../utils/throwDices';

export function Board() {
  const [isBetting, setIsBetting] = useState(true);
  const [listOfDicesPl, setListOfDicesPl] = useState<number[]>([]);
  const [resultPl, setResultPl] = useState({ text: 'nothing', value: 1 });
  const [listOfDicesAi, setListOfDicesAi] = useState<number[]>([]);
  const [resultAi, setResultAi] = useState({ text: 'nothing', value: 1 });
  const [winIs, setWinIs] = useState('');
  const [gameEnd, setGameEnd] = useState(false);
  const [tickFieldValues, setTickFieldValues] = useState<boolean[]>([false, false, false, false, false]);
  const handleTickFieldChange = (index: number) => {
    const newTickFieldValues = [...tickFieldValues];
    newTickFieldValues[index] = !newTickFieldValues[index];
    setTickFieldValues(newTickFieldValues);
  };
  const [money, setMoney] = useState(100);
  const [bet, setBet] = useState(1);

  const whoWin = (plValue: number, aiValue: number) => {
    if (plValue > aiValue) {
      setWinIs('You');
    } else if (plValue < aiValue) {
      setWinIs('Ai');
    } else if (plValue === aiValue) {
      setWinIs('Draw');
    }
  };

  useEffect(() => {
    const throwedLayoutPl = checkDices(listOfDicesPl);
    setResultPl(throwedLayoutPl);
    const throwedLayoutAi = checkDices(listOfDicesAi);
    setResultAi(throwedLayoutAi);
    whoWin(throwedLayoutPl.value, throwedLayoutAi.value);
  }, [listOfDicesPl, listOfDicesAi]);

  const endTurn = () => {
    if (winIs === 'You') {
      const prize = bet * 2;
      setMoney(money + prize);

      setBet(1);
    } else if (winIs === 'Ai' || winIs === 'Draw') {
      setBet(1);
    }
  };

  const handleBetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let stake = Number(event.target.value);
    if (stake > money) {
      stake = money;
    } else if (stake < 1) {
      stake = 1;
    }
    setBet(stake);
  };

  const handleListOfDicesPl = (listOfIndex: number[] = [], listOfThrowedDices: number[] = []) => {
    const newListOfPlayerDices = [...listOfDicesPl];

    listOfIndex.map((indexDice, index) => {
      newListOfPlayerDices[indexDice] = listOfThrowedDices[index];
      return;
    });
    return newListOfPlayerDices;
  };
  const handleResultAi = ({ text, value }: { text: string, value: number }) => {
    setResultAi({ text, value });
  };
  const closeBetting = () => {
    setIsBetting(false);
  };

  const throwAfterSetStake = () => {
    const listOfDicesPlIn = throwDices(5);
    const listOfDicesAiIn = throwDices(5);
    setListOfDicesPl(listOfDicesPlIn);
    // Set result
    setListOfDicesAi(listOfDicesAiIn);

    setMoney(money - bet);
    closeBetting();
  };
  const secondThrow = () => {
    const listOfIndexDicesPl = tickFieldValues.map((tickFieldValue, index) => {
      if (tickFieldValue) {
        return index;
      }
      return -1;
    }).filter((index) => index !== -1);

    if (listOfIndexDicesPl.length === 0) return;
    // throw selected dices
    const listOfDicesPlIn = throwDices(listOfIndexDicesPl.length);
    const newListOfPlayerDices = handleListOfDicesPl(listOfIndexDicesPl, listOfDicesPlIn);
    setListOfDicesPl(newListOfPlayerDices);
    const newAiResultAndDices = aiChooser(resultAi, listOfDicesAi);
    setListOfDicesAi(newAiResultAndDices.listOfDicesAi);
    handleResultAi(newAiResultAndDices);
    setGameEnd(true);
  };
  const pass = () => {
    const newAiResultAndDices = aiChooser(resultAi, listOfDicesAi);
    setListOfDicesAi(newAiResultAndDices.listOfDicesAi);
    handleResultAi(newAiResultAndDices);
    setGameEnd(true);
  };

  const continueGame = () => {
    endTurn();
    setGameEnd(false);
    setIsBetting(true);
  };

  if (gameEnd) {
    return (
      <div className="board">
        <h2 className="player">Ai Dices</h2>
        <div className="dices__row ai">
          {listOfDicesAi.map((dice, index) => <Dice diceNo={dice} key={index + 6} />)}

        </div>
        <div className="result__container">
          Result:
          {' '}
          <span className="result">{resultAi.text}</span>
        </div>

        <div className="btn_result_container">
          <div className="handle__game win">
            <p>Winner is:</p>
            <span>{winIs}</span>
          </div>
          <div className="button__container">
            <button className="btn" type="button" onClick={continueGame}>Continue</button>
          </div>
        </div>

        <h2 className="player">Player Dices</h2>
        <div className="dices__row player">
          {listOfDicesPl.map((dice, index) => <Dice diceNo={dice} key={index} />)}

        </div>

        <div className="tick-field__row">
          {tickFieldValues.map((tickField, index) => <TickField index={index} setChecked={handleTickFieldChange} key={index + 12} />)}

        </div>
        <div className="result__container">
          Result:
          {' '}
          <span className="result">{resultPl.text}</span>
        </div>
      </div>
    );
  }

  if (isBetting) {
    return (
      <div className="board betting">
        <div className="betting__container">
          <p>
            Your Money:
            <span className="money">{money}</span>
          </p>
          <p>
            Stake:
            <input type="number" value={bet} onChange={handleBetChange} />
          </p>
        </div>
        <div className="btn__container">
          <button type="button" className="btn btn_in_betting" onClick={throwAfterSetStake}>Throw Dice</button>
        </div>
      </div>
    );
  }
  return (
    <div className="board">
      <h2 className="player">Ai Dices</h2>
      <div className="dices__row ai">
        {listOfDicesAi.map((dice, index) => <Dice diceNo={dice} key={index + 6} />)}

      </div>
      <div className="result__container">
        Result:
        {' '}
        <span className="result">{resultAi.text}</span>
      </div>

      <div className="btn_result_container">
        <div className="handle__game win">
          <p>Winner is:</p>
          <span>{winIs}</span>
        </div>
        <div className="button__container">
          <button className="btn" type="button" onClick={secondThrow}>Throw dice</button>
          <button className="btn" type="button" onClick={pass}>Pass</button>
        </div>
      </div>

      <h2 className="player">Player Dices</h2>
      <div className="dices__row player">
        {listOfDicesPl.map((dice, index) => <Dice diceNo={dice} key={index} />)}

      </div>

      <div className="tick-field__row">
        {tickFieldValues.map((tickField, index) => <TickField index={index} setChecked={handleTickFieldChange} key={index + 12} />)}

      </div>
      <div className="result__container">
        Result:
        {' '}
        <span className="result">{resultPl.text}</span>
      </div>
    </div>
  );
}
