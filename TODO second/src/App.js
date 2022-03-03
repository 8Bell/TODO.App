import React, { useState, useCallback } from 'react';
import "./App.css";
import Form from './components/Form';
import Lists from './components/Lists';


export default function App() {

  // Functional Component state 정의 방법
  // state 객체 요소마다 아래 문법으로 변수 정의
  // 이제 객체 내부 요소가 아니므로 모든 메소드 구조 제거 
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

   // x 누를 때 State에서 list 배열 업데이트 
   const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData); // Functional component는 useState로 업데이트
},[todoData]); //의존성 배열 -> todoData가 바뀔 때만 리랜더링
  
    // submit 시 새로운 데이터 생성 및 배열에 추가하며 state 업데이트
    const handleSubmit = (e) => {
      e.preventDefault(); // form의 value 값을 input 할 때 페이지 리로드 막아줌
      // 새로운 할일 데이터 생성
      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      };
      //원래 할 일에 새로운 데이터 더해주기 : 전개 연산자 DeepCopy //submit 후 form의 value 값 비우기
      setTodoData((prev)=>[...prev,newTodo]); //Setter에서 이전 state 필요시 함수형식 사용
      setValue("")
    };


    const handleDeleteAll = () => {
      if(window.confirm("정말 다 삭제할까요?")){
        setTodoData([])
      }
    }
  
    return (
      <div className='flex items-center justify-center w-screen h-screen bg-gray-200'>
        <div className='w-full p-6 m-4 bg-white rounded-xl shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between mb-3'>
            <h1
            className='p-1 text-2xl text-orange-300 font-bold'
            >✔️ TO DO</h1>
            <button
            onClick={handleDeleteAll}
            className='flex px-2 py-1 my-2 rounded-lg bg-gray-200 text-gray-400 shadow hover:bg-orange-300 hover:text-white'
            >Delete all</button>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick} /> 
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
          
        </div>
      </div>
    );
  }

