import React from 'react';

export default function Form({value, setValue, handleSubmit}) {

    // 입력할 때마다 State에서 value 값 e.target.value로 업데이트
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}  className='flex pt-2'>
            <input
              type="text"
              name="value"
              className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
              placeholder="해야 할 일을 입력 하세요."
              value={value}
              onChange={handleChange}
            />
            <input
              type="submit"
              value='⏏'
              className='p-2 text-orange-300 border-2 border-orange-300 rounded hover:text-white hover:bg-orange-300'
            />
          </form>
    </div>
  )
}
