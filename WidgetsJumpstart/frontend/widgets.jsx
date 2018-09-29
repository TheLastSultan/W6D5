import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import { Button } from 'react-bootstrap';

function Root(){
  return(
    <div> 
      <div className="ClockMaster">
        <Clock /> 
      </div>
      <div>
        <Tabs bananas={[{title: "Fun", content: "this is such bullcrap"},
                        {title: "Correct?", content: "is this how it's done?"},
                        {title: "Bruce", content: "am i bruce wayne"}]} />
      </div>
      <Button bsStyle="primary">Primary</Button>
    </div> 
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
