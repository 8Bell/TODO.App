import React from 'react'

const List = React.memo(({
    id,
    title,
    completed,
    todoData, 
    setTodoData,
    provided,
    snapshot,
    handleClick,
}) => {

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

   

    return (
        <div
            key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>

            <div className='items-center'>
                <input
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={() => handleCompleChange(id)}
                />{" "}
                <span className={completed ? 'line-through' : undefined}>{title}</span>
            </div>
            <div className='items-center'>
                <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>╳</button>
            </div>
        </div>
    )
});
export default List