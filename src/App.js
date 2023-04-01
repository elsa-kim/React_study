import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

// App 이라는 컴포넌트 만들어 줌, function 키워드 사용 -> 함수형 컴포넌트
class App extends Component {
  render() {
    return <IterationSample />;
  }
}

export default App;
