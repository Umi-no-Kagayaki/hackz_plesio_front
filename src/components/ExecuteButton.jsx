import React from 'react';

const ExecuteButton = (props) => {
  return(
      <button onClick={() => props.func()}>{props.title}</button>
  )
}
export　default ExecuteButton;
