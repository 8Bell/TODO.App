import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


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

    const handleEnd = (result) => {

        if (! result.destination) return;
        const newTodoData = todoData;
        
        // 1. 변경시키는 아이템을 배열에서 삭제.
        // 2. return 값으로 지워진 아이템을 잡아줌.
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        //원하는 자리에 reorderedItem을 insert.
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
    }



    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId='todo'>
                   {(provided)=>(
                       <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data, index) => (
                 <Draggable
                 key={data.id}
                 draggableId={data.id.toString()}
                 index={index}
                 >
                     {(provided, snapshot)=>(
                <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} 
                className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
                   
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
                )}
                </Draggable>
            ))}
            {provided.placeholder}
            </div>
            )}
            </Droppable>
            </DragDropContext>
        </div>
    );
};

