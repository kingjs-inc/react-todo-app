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
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", padding: "5px" }}
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={hadleChange}
      />
      <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
    </form>
  );
}
