import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  // 에러 발생시 componentDidCatch 메소드 호출, this.state.error 값을 true로 업데이트 해줌
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  // this.state.error 값이 true면 에러 발생했음을 알려주는 문구 보여줌
  render() {
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}
