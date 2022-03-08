import React from "react";
//    Form 1. Form 컴포넌트 생성
//                            Form 5. props로 필요한 데이터 함수 가져오기
export default function Form({ handleSubmit, value, setValue }) {
  //   Form 3. 필요 함수 가져오기
  const hadleChange = (e) => {
    setValue(e.target.value);
  };
  //   Form 2. UI 부분 가져오기
  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={hadleChange}
      />
      <input
        className="p-2 text-blue-400 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        type="submit"
        value="입력"
      />
    </form>
  );
}
