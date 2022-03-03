import React from 'react'

export default function Form({value, setValue, handleSubmit}) {

    // 입력할 때마다 State에서 value 값 e.target.value로 업데이트
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
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
  )
}
