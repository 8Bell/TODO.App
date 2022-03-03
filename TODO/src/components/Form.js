import React from 'react';

export default function Form({value, setValue, handleSubmit}) {

    // 입력할 때마다 State에서 value 값 e.target.value로 업데이트
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}  className='flex mt-5'>
            <input
              type="text"
              name="value"
              className='w-full px-3 py-2 mr-4 nm-inset-neutral-100 rounded-3xl text-blue-600'
              placeholder=" 해야 할 일을 입력 하세요."
              value={value}
              onChange={handleChange}
            />
            <input
              type="submit"
              value='⏏'
              className='flex px-2.5 my-1 nm-convex-neutral-100-sm text-neutral-400 rounded-3xl hover:text-blue-600 hover:nm-concave-neutral-100-sm'
            />
          </form>
    </div>
  )
}
