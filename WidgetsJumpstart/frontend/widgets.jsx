import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock'


function Root(){
  return(
    <div>
      <Clock /> 
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
