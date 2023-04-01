import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// App 이라는 컴포넌트 만들어 줌, function 키워드 사용 -> 함수형 컴포넌트
class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
