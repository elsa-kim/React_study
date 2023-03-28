// 클래스형 컴포넌트가 지니고 있는 state 사용
import React, { Component } from "react";

export default class Counter extends Component {
  // 컴포넌트에 state 설정할 때
  // 1. constructor 메서드 작성해 설정
  /*
  constructor(props) {
    // 클래스형에서 constructor 작성시 반드시 super(props) 호출해야 함
    // -> 이 함수 호출 되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수 호출해줌
    super(props);
    // state 초기값 설정 : 객체 형식
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  */
  // 2. constructor 메서드 선언 없이
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        {/* 이벤트로 설정할 함수 넣어줄 때는 화살표 함수 문법 사용해 넣어줘야함 */}
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
        {/* this.setState 사용해 state 값 업데이트 할 때는 상태가 비동기적으로 업데이트 됨 
        -> this.setState 사용할 때 객체 대신 함수를 인자로 넣어주면 여러번 사용시 값 안바뀌는 문제 해결 
        this.setState((prevState ; 기존상태, props ; 현재 지니고 있는 props 가리킴, 필요없을 시 생략 가능) => {
        return {업데이트하고 싶은 내용}
        })
        */}
        {/* <button
          onClick={() => {
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +1
        </button> 
        */}
      </div>
    );
  }
}
