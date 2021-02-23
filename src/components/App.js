

import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0,
      renderball:false
     };
     var remove;
     var timer;
     this.handleListener=this.handleListener.bind(this);
  }
  handleListener(event){
 
    switch(event.keyCode)
    {

        case 37:
          this.setState(()=>{return{
            x:this.state.x-5,
            y:this.state.y
          }});
          break;
        case 38:
             this.setState(()=>{return{
              x:this.state.x,
              y:this.state.y-5
            }});
            break;
        case 39:
            this.setState(()=>{return{
              x:this.state.x+5,
              y:this.state.y
            }});
            break;
        case 40:
           this.setState(()=>{return{
             x:this.state.x,
             y:this.state.y+5
           }});
            break;

        }
        
        if(this.state.x==250 && this.state.y==250){
          clearInterval(this.timer);
          document.removeEventListener("keydown",this.handleListener);
        }
       
  }
  componentDidMount() {
   
  }

  componentWillUnmount() {
 
    return(<div></div>);
  }
  buttonClickHandler(){
    document.addEventListener("keydown",this.handleListener);
    this.setState({
      x:0,
      y:0,
      time:0
    });
    this.timer =setInterval(()=>
      this.setState(
        {
          time:this.state.time+1
        }
      )
    ,1000);
//  console.log(this.timer);
  
  }
 
// shouldComponentUpdate(){
//   if(this.state.x==250 && this.state.y==250)
//   {console.log(this.state.x,this.state.y);
   
//     document.removeEventListener("keydown",this.handleListener);
//      clearInterval(this.timer);
//     return false;
//   }
//   console.log(this.state.x,this.state.y);
//   return true;
 
// }
  render() {
    // console.log("Hello");
    return (
 <>
 <div className="ball" style={{
          left:this.state.x+"px",
          top:this.state.y+"px",
        }}></div>
   <button className="start" onClick={this.buttonClickHandler.bind(this)}>Start</button>
    <div className="hole"></div>
   <div className="heading-timer">{this.state.time}</div>
</>
    );
  }
}

export default Timer;

// import React, { Component, useState } from "react";
// import "../styles/App.css";
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { time: 0, x: 0, y: 0 };
//   }
//   componentDidMount() {
    
//   }

//   componentWillUnmount() {
    
//   }



//   render() {
//     return (
//  <>
// </>
//     );
//   }
// }

// export default Timer;
