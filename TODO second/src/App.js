import React, { Component } from 'react'
import "./App.css"

export class App extends Component {

  //변하지 않는 스타일이므로 객체로 표현
  btnstyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  //동적으로 작동하는 스타일이므로 함수로 표현
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };
     // 랜더링을 위한 React state 생성 
  state = {
     //반복적으로 생성되는 UI 요소를 map()으로 표현하기 위해 배열 사용
  todoData : [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ],

  };
 
 
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data)=> data.id !== id);
    console.log('newTodoData',newTodoData)
    this.setState({todoData : newTodoData}); // state 변경법 ***
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {/* map() 메소드 사용해서 list 나열 */}
          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <p>
                <input type="checkbox" defaultChecked={false} />
                {""}{data.title}
                <button style={this.btnstyle} onClick={()=>this.handleClick(data.id)}>╳</button>
              </p>
            </div>
          ))}
 
        </div>
      </div>
    )
  }
}

export default App
