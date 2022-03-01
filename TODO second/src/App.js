import React, { Component } from 'react'
import "./App.css"

export class App extends Component {

  btnstyle ={
    color: "#fff",
    border:"none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          <div>
            <input type="checkbox" defaultChecked={false}/> 공부하기
            <button style={this.btnstyle}>╳</button>
          </div> 

        </div>
      </div>
    )
  }
}

export default App
 