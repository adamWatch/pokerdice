/* eslint-disable no-restricted-syntax */
import { DiceLayout } from '../../types/boardTypes/diceLayout';
import { checkDices } from './checkDices';
import { throwDices } from './throwDices';

function findIndexesWithoutOccurrences(arr: number[], occurence:number): number[] {
  const occurrencesMap = new Map();
  const result = [];

  for (const num of arr) {
    if (occurrencesMap.has(num)) {
      occurrencesMap.set(num, occurrencesMap.get(num) + 1);
    } else {
      occurrencesMap.set(num, 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!(occurrencesMap.get(arr[i]) === occurence)) {
      result.push(i);
    }
  }

  return result;
}

export function aiChooser(aiResult:DiceLayout, listOfDicesAi:number[]) {
  const aiChooserResult = {
    text: 'nothing',
    value: 1,
    listOfDicesAi: [1, 2, 4, 3, 5],
  };
  let idToThrow:number[] = [];
  if (aiResult.value >= 2 && aiResult.value <= 6) {
    idToThrow = findIndexesWithoutOccurrences(listOfDicesAi, 2);
  }
  if (aiResult.value >= 7 && aiResult.value <= 16) {
    idToThrow = findIndexesWithoutOccurrences(listOfDicesAi, 2);
  }
  if (aiResult.value >= 17 && aiResult.value <= 21) {
    idToThrow = findIndexesWithoutOccurrences(listOfDicesAi, 3);
  }
  if (aiResult.value >= 34 && aiResult.value <= 38) {
    idToThrow = findIndexesWithoutOccurrences(listOfDicesAi, 4);
  }

  const newThrowedDices = throwDices(idToThrow.length);
  const newListOfAiDices = [...listOfDicesAi];
  for (let i = 0; i < newThrowedDices.length; i++) {
    newListOfAiDices[idToThrow[i]] = newThrowedDices[i];
  }
  const newLayout = checkDices(newListOfAiDices);
  aiChooserResult.text = newLayout.text;
  aiChooserResult.value = newLayout.value;
  aiChooserResult.listOfDicesAi = newListOfAiDices;
  console.log(aiChooserResult);
  return aiChooserResult;
}
