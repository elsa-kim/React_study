// 함수형
/*
import React from "react";
import PropTypes from "prop-types";

export default function MyComponent({ name, children, favoriteNumber }) {
  return (
    <div>
      제 이름은 {name}입니다. <br />
      children 값은 {children}입니다. <br />
      제가 가장 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
*/

// 클래스형
// props 사용할 때는 render 함수에서 this.props 조회
// defaultProps와 propTypes 설정 시 class 내부에서 설정 가능
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        제 이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 가장 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
