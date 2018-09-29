import React from 'react';


export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: new Date() }
        this.tick = this.tick.bind(this)
    }; 

        tick(){
            this.setState({ time: new Date() })
        }

        componentDidMount(){
            setInterval(this.tick, 1000)
        }

    
        render(){
            let hours = this.state.time.getHours();
            let minutes = this.state.time.getMinutes();
            let seconds = this.state.time.getSeconds();
            let date = this.state.time.Da

            hours = (hours < 10) ? `0${hours}` : hours;
            minutes = (minutes < 10) ? `0${minutes}` : minutes;
            seconds = (seconds < 10) ? `0${seconds}` : seconds;
        
            if(hours > 12){ hours =  `0${hours % 12}`}
            
            return(
                <div>
                    
                    <div className="clock"> 
                        <span>The date is November 25, 2018 </span><br/>  
                        <h3> Hello, Human </h3> 
                        <strong><span> {hours}:{minutes}:{seconds} </span></strong>
                    </div> 
                </div> 
            )
            
          
        }



       

    }


