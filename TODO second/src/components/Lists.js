import React from 'react'

export default function Lists({todoData, setTodoData}) {

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
            textDecoration: completed ? 'line-through' : 'none',
        };
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
                <div style={getStyle(data.completed)} key={data.id}>
                    <p>
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            onClick={() => { handleCompleChange(data.id) }} />
                        {/* onchange 도 작동한다. 비교할 인자가 있을 때 함수 모양 주의 */}

                        {""}{data.title}
                        <button style={btnstyle} onClick={() => handleClick(data.id)}>╳</button>
                    </p>
                </div>
            ))};
        </div>
    );
};

