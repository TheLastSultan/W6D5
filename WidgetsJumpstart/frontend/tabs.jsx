import React from 'react';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: 0}

    }; 

    onClick(indx){
        return () => { 
            debugger; 
            this.setState({index: indx})
        }
    }



    render(){
        return(
            
            this.props.bananas.map( (el, indx) => {
                let className = "nonselected" 
                if(indx == this.state.index){
                   className = "selected" 
                }
                return <li className={className} onClick={this.onClick(indx)}>{el.title}</li> 
            })
            // map prop, render react component for each one

            // 
        )
    }



}

export default Tabs;  