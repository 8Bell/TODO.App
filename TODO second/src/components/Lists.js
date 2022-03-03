import React from 'react'

export default function Lists({todoData, setTodoData}) {

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
    };

    // x 누를 때 State에서 list 배열 업데이트 
    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData); // Functional component는 useState로 업데이트
    };


    return (
        <div>
            {/* List 부분 : map() 메소드 사용해서 list 나열 */}
            {todoData.map((data) => (
                <div key={data.id}>
                    <div className='flex items-center justify-between w-full px-4 py-2 my-2 text-gray-600 bg-gray-100 border rounded'>
                        <div className='items-center'>
                        <input
                            type="checkbox"
                            defaultChecked={data.completed}
                            onChange={() => handleCompleChange(data.id) } 
                            />{" "}
                            <span className={data.completed ? 'line-through' : undefined}>{data.title}</span>
                            </div>
                            <div className='items-center'>
                        <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>╳</button> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

