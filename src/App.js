import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [메모내용, 메모내용변경] = useState(["메모내용1", "메모내용2"]);

  return (
    <div className="App">
      <div className="nav">
        <div> NEMO </div>
      </div>
      <h4 style={ {color: "gray"} }> NEMO는 채팅형 메모 사이트입니다. </h4>
      <div className="list">
        <hr/>
        <div className="memo">{ 메모내용[0] }</div>
        <p style={ {textAlign: "right"} }>2023년 5월 8일</p>
        <button onClick={ ()=>{} }>입력</button>
      </div>
    </div>
  );
}

export default App;
