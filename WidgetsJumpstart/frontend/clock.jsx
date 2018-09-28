import React from 'react';


export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: new Date() }
    }; 
    
        render(){
            return <h1>Hello from the clock </h1>
        }
    }


