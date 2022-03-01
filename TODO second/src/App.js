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
    todoData: [
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
    value: "",
  };

  // x 누를 때 State에서 list 배열 업데이트 
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData }); // state 변경법 ***
  };

  // 입력할 때마다 State에서 value 값 e.target.value로 업데이트
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {

    e.preventDefault(); // form의 value 값을 input 할 때 페이지 리로드 막아줌

    // 새로운 할일 데이터 생성
    let newTodo = {
      id: Date.now,
      title: this.state.value,
      completed: false,
    };

    //원래 할 일에 새로운 데이터 더해주기 : 전개 연산자 DeepCopy
    this.setState({ todoData: [...this.state.todoData, newTodo] });
    
    //submit 후 form의 value 값 비우기
    this.setState({ value: "" });
  };


  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {/* List 부분 : map() 메소드 사용해서 list 나열 */}
          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <p>
                <input type="checkbox" defaultChecked={false} />
                {""}{data.title}
                <button style={this.btnstyle} onClick={() => this.handleClick(data.id)}>╳</button>
              </p>
            </div>
          ))}

          {/* Form 부분 : 입력시 state 변경해야 입력한 값이 랜더링 됨*/}
          <form style={{ display: "flex" }} >
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일을 입력 하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value='입력'
              className='btn'
              style={{ flex: '1' }}
              onClick={this.handleSubmit}
            />
          </form>

        </div>
      </div>
    )
  }
}

export default App
