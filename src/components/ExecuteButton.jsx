import React from 'react';

const ExecuteButton = (props) => {
  return(
      <button class = {props.class} onClick={() => props.func()}>{props.title}</button>
  )
}
export　default ExecuteButton;
