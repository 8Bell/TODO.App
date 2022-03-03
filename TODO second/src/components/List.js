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

    // 수정
    const handleModify=(id,title)=>{
        const newTitle = prompt ("수정할 내용을 입력하세요.",title)
        if(newTitle !== null){
        let newTodoData = todoData.map((data) => {
            if (id === data.id) {
                data.title = newTitle
            }
            return data;
        });
        setTodoData(newTodoData)
        }}
   

    return (
        <div
            key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
            className={
                
                `${ completed ? (snapshot.isDragging ? ' nm-flat-neutral-200-xl brightness-105' : 'nm-inset-neutral-200 brightness-90')
                  :  (snapshot.isDragging ? ' nm-flat-neutral-200-xl brightness-105 ' : 'nm-flat-neutral-200')
                } 
                flex items-center justify-between w-full px-4 py-1.5 my-3  rounded-3xl text-gray-500 hover:brightness-105`}>

            <div className='items-center py-1'>
                <input
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={() => handleCompleChange(id)}
                />{"  "}
                <span 
                className={`${completed ? 'line-through decoration-blue-600 decoration-4' : undefined} p-2 rounded-xl hover:text-blue-600 hover:after:content-['ㅤ💬']`}
                onClick={()=>handleModify(id,title)}
                >{title}</span>
            </div>
            <div className='items-center'>
                <button className={
                    `${completed ? (snapshot.isDragging ? 'nm-flat-neutral-200 text-gray-400 hover:nm-inset-neutral-200':'nm-flat-neutral-200 text-gray-400 hover:nm-inset-neutral-200')
                    :(snapshot.isDragging ? 'nm-flat-neutral-200 text-gray-400 hover:nm-inset-neutral-200':'nm-flat-neutral-200 text-gray-400 hover:nm-inset-neutral-200') }
                    px-1.5 py-1 rounded-3xl float-right text-xs `} onClick={() => handleClick(id)}> ╳ </button>
            </div>
        </div>
    )
});
export default List