import React from 'react';
import './tickField.css';

interface Props{

  index:number;
  setChecked:any;
}

export function TickField(props:Props) {
  const { index, setChecked } = props;
  return (
    <input type="checkbox" className="tick-field" key={index} onChange={() => setChecked(index)} />
  );
}
