import React, { useState, useCallback, useEffect } from 'react';
import "./App.css";
import Form from './components/Form';
import Lists from './components/Lists';


export default function App() {

  // Functional Component state 정의 방법
  // state 객체 요소마다 아래 문법으로 변수 정의
  // useEffect -> localStorage에 데이터 string으로 저장
  const [todoData, setTodoData] = useState(
    ()=> JSON.parse(window.localStorage.getItem("todoData"))||[]
  );
  useEffect(()=>{
    window.localStorage.setItem("todoData",JSON.stringify(todoData));
  }, [todoData]);

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
      console.log("value",value)

      if(value == ""){
        alert("할 일을 입력하세요.")
      }else{
      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      };
      //원래 할 일에 새로운 데이터 더해주기 : 전개 연산자 DeepCopy //submit 후 form의 value 값 비우기
      setTodoData((prev)=>[...prev,newTodo]); //Setter에서 이전 state 필요시 함수형식 사용
      setValue("")
    }};


    const handleDeleteAll = () => {
      if(window.confirm("정말 다 삭제할까요?")){
        setTodoData([])
      }
    }
  
    return (
      <div className='flex items-center justify-center w-screen h-screen bg-neutral-200'>
        <div className='w-full py-8 px-6 m-5 nm-flat-neutral-200-lg rounded-3xl
        md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between mb-4'>
            <h1
            className='px-3 py-1 text-2xl mb-2 text-blue-600 font-bold nm-flat-neutral-200 rounded-3xl'
            >🅣●🅓●</h1>
            <button
            onClick={handleDeleteAll}
            className='flex px-2.5 py-1 my-2 rounded-3xl nm-convex-neutral-100-sm text-gray-400 hover:nm-concave-neutral-100-sm hover:text-blue-600 hover:font-semibold'
            >⏻</button>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick} /> 
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
          
        </div>
      </div>
    );
  }

