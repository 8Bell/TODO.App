import React, {useState} from 'react'
import "./App.css"

export function App() {

  //변하지 않는 스타일이므로 객체로 표현
  const btnstyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  //동적으로 작동하는 스타일이므로 함수로 표현
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? 'line-through' : 'none'
      ,
    };
  };

  // Functional Component state 정의 방법
  // state 객체 요소마다 아래 문법으로 변수 정의
  // 이제 객체 내부 요소가 아니므로 모든 메소드 구조 제거 
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");


  // x 누를 때 State에서 list 배열 업데이트 
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData); // Functional component는 useState로 업데이트
  };

  // 입력할 때마다 State에서 value 값 e.target.value로 업데이트
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // submit 시 새로운 데이터 생성 및 배열에 추가하며 state 업데이트
  const handleSubmit = (e) => {
    e.preventDefault(); // form의 value 값을 input 할 때 페이지 리로드 막아줌
    // 새로운 할일 데이터 생성
    let newTodo = {
      id: Date.now,
      title: value,
      completed: false,
    };
    //원래 할 일에 새로운 데이터 더해주기 : 전개 연산자 DeepCopy //submit 후 form의 value 값 비우기
    setTodoData(prev=>[...prev,newTodo]); //Setter에서 이전 state 필요시 함수형식 사용
    setValue("")
  };
    // 체크박스 클릭한 리스트속 객체 id를 map으로 todoData 속 객체 id와 전수 비교,
    // id 값이 일치한다면 completed 값 반대로 바꿔주는 알고리즘  
  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (id === data.id) {
        data.completed = !data.completed
      }
      return data;
    });
    setTodoData(newTodoData)

  }

    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {/* List 부분 : map() 메소드 사용해서 list 나열 */}
          {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
              <p>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onClick={() => {handleCompleChange(data.id) }} /> 
                  {/* onchange 도 작동한다. 비교할 인자가 있을 때 함수 모양 주의 */}

                {""}{data.title}
                <button style={btnstyle} onClick={() => handleClick(data.id)}>╳</button>
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
              value={value}
              onChange={handleChange}
            />
            <input
              type="submit"
              value='입력'
              className='btn'
              style={{ flex: '1' }}
              onClick={handleSubmit}
            />
          </form>

        </div>
      </div>
    )
  }
export default App
