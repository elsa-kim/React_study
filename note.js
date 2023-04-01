/*
ReactDOM.render(첫번째 파라미터 : 페이지에 렌더링할 내용 JSX 형태로, 두번째 : 해당 JSX를 렌더링 할 document 내부 요소 설정) 
  : 컴포넌트를 페이지에 렌더링하는 역할, react-dom 모듈 불러와 사용
  
JSX 문법
  1. 컴포넌트에 여러 요소가 있다면 부모 요소 하나로 감싸야 함 : virtual DOM에서 컴포넌트 변화 감지할 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이뤄저야 한다는 규칙이 있기 때문
  2. JSX 내부에 자바스크립트 표현식을 작성하려면 코드를 {}로 감싸기
  3. JSX 내부 자바스크립트 표현식에서 if문 사용못함 : JSX 밖에서 사용해 사전에 값 변경하거나 {} 안에 삼항 연산자 사용
  4. AND 연산자(&&) 사용해 조건부 렌더링 : 리액트에서 false와 null 렌더링 시 아무것도 나타나지 않음, flasy 한 값인 0은 예외적으로 화면에 나타남
  5. 리액트 컴포넌트는 함수에서 undefined만 반환해 렌더링하는 상황을 만들면 안됨, OR 연산자(||) 사용해 해당 값 undefined일 때 사용할 값 지정해 오류 방지
    JSX 내부에서 undefined 렌더링하는 것은 괜찮음
  6. 리액트에서 DOM 요소에 스타일 적용할 때 문자열 형태가 아닌 객체 형태로 넣어야 함, 카멜 표기법 사용해 작성, 단위 생략시 px로 지정됨
  7. JSX에서는 class가 아닌 className으로 설정
  8. 태그 꼭 닫아야 함, 태그 사이에 별도의 내용이 들어가지 않는 경우 self-closing
  9. 주석 {/* … * /}와 같은 형식으로 작성(띄어쓰기 없이)

ESLint : 문법 검사 도구

Prettier : 코드 스타일 자동 정리 도구
  루트 디렉터리에서 .prettierrc 파일 생성 후 스타일 커스터마이징

컴포넌트 선언
  1. 함수형 컴포넌트 : 선언이 편리함, 메모리 자원도 덜 사용, state와 라이프사이클 API 사용 불가하지만 Hooks 기능 도입으로 해결
  2. 클래스형 컴포넌트 : state 기능 및 라이프사이클 기능 사용 가능, 임의 메서드 정의 가능
    render 함수 필수, 그 안에서 보여줘야 할 JSX 반환

state : 컴포넌트 내부에서 바뀔 수 있는 값
  - 종류
    1. 클래스형 컴포넌트가 지니고 있는 state
    2. 함수형 컴포넌트에서 useState라는 함수 통해 사용하는 state

이벤트 : 사용자가 웹 브라우저에서 DOM 요소들과 상호작용 하는 것
  - 리액트에서 이벤트 사용 시 주의사항
    1. 이벤트 이름은 카멜 표기법으로 작성 : HTML의 onclick은 리액트에서 onClick
    2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아닌, 함수 형태의 값 전달 : HTML에서는 이벤트 설정 시 큰따옴표 안에 실행할 코드 넣었지만, 리액트에선 함수형태 객체 전달
    3. DOM 요소에만 이벤트 설정 가능 : div, button, input 등 DOM 요소에는 이벤트 설정할 수 있지만, 우리가 직접 만든 컴포넌트엔 이벤트 자체적으로 설정 불가(그냥 이름이 onClick인 props를 전달하는게 됨)

ref : HTML에서 id를 사용해 DOM에 이름 다는 것처럼 리액트 내부에서 DOM에 이름 달 때 사용, DOM을 꼭 직접적으로 건드려야 할 때 사용
  - 사용법
    1. 콜백 함수를 통한 ref 설정 : ref 달고자 하는 요소에 ref라는 콜백함수를 props로 전달, 이 콜백함수는 ref 값을 파라미터로 전달받고 이를 컴포넌트의 멤버 변수로 설정
      ex) <input ref={(ref) => {this.input=ref}} />  // this.input은 input 요소의 DOM 가리킴
    2. createRed를 통한 ref 설정 : 리액트 내장함수 createRef 사용, 컴포넌트 내부에서 멤버 변수로 React.createRef() 담아줘야 함, 해당 멤버 변수를 ref를 달고자 하는 요소애 ref props로 넣어주면 설정 완료
      ref 설정해 준 DOM에 접근하려면 this.input.current 조회
  - 리액트에선 컴포넌트에도 ref 달 수 있음 : 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씀
    사용법 : <MyComponent ref={(ref) => {this.myComponent=ref}}

map() 함수 : 파라미터로 전달된 함수를 사용해 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열 생성
  1. 문법 : arr.map(callback, [thisArg])
    - callback : 새로운 배열 요소 생성하는 함수, 
      파라미터 3가지 (currentValue : 현재 처리하고 있는 요소, index : 현재 처리하고 있는 요소의 index값, array : 현재 처리하고 있는 원본 배열 )
    - thisArg(선택항목) : callback 함수 내부에서 사용할 this 래퍼런스
  2. key : 컴포넌트 배열 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 사용
    - key 값 설정 : map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props 설정하듯 설정, key값은 언제나 유일해야 함

불변성 유지 함수 : 리액트에서 상태 업데이트 시 기존 상태 그대로 두면서 새로운 값을 상태로 설정해야 함
  - concat : push함수는 기존 배열 자체를 변경해주고 concat은 새로운 배열을 만들어줌
  - filter : 불변성 유지하며 배열 특정 항목 지울 때 사용

라이프사이클(수명 주기) : 모든 리액트 컴포넌트에는 라이프사이클 존재, 컴포넌트 수명은 페이지에 렌더링 되기 전인 준비 과정에서 시작해 페이지에서 사라질 때 끝남, 클래스형 컴포넌트에서만 사용 가능(함수형에서는 Hooks 기능 사용)
  - 메소드 9종류(Will 접두사 붙은 메소드 : 어떤 작업 작동하기 전 실행, Did 접두사 붙은 메소드 : 어떤 작업 작동 후 실행) & 3가지 카테고리(마운트, 업데이트, 언마운트)로 나뉨
  - 카테고리
    1. 마운트 : DOM이 생성되고 웹 브라우저상에 나타나는 것
      - constructor : 컴포넌트 새로 만들 때마다 호출되는 클래스 생성자 메소드
      - getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메소드
      - render : 우리가 준비한 UI를 렌더링하는 메소드
      - componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메소드
    2. 업데이트 : 컴포넌트는 총 4가지 경우에 업데이트 함
      - 업데이트 하는 경우
        1) props가 바뀔 때
        2) state가 바뀔 때
        3) 부모 컴포넌트가 리렌더링 될 때
        4) this.forceUpdate로 강제 렌더링 트리거할 때 
      - forceUpdate : 컴포넌트 업데이트 할 때 호출하는 메소드 
      - getDerivedStateFromProps : 이 메소드는 마운트 과정에서도 호출되며, 업데이트 시작하기 전에도 호출, props 변화에 따라 state값에도 변화를 주고싶을 때 사용
      - shouldComponentUpdate : 컴포넌트가 리렌더링 해야할지 말아야할지를 결정하는 메소드, true나 false 반환, true반환 시 다음 라이프사이클 메소드 계속 실해으 false 반환 시 작업 중지(컴포넌트 리렌더링 x), this.forceUpdate() 함수 호출 시 이 과정 생략하고 바로 render 호출
      - render : 컴포넌트 리렌더링
      - getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메소드
      - componentDidUpdate : 컴포넌트의 업데이트 작업 끝난 후 호출하는 메소드
    3. 언마운트 : 마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것
      - componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메소드
  - 메소드 : 컴포넌트 상태에 변화 있을 때마다 실행, 서드파티 라이브러리 사용하거나 DOM 직접 건드려야 하는 상황에서 유용
    1. render() 함수 : render() {...} 
      라이프사이클 메소드 중 유일한 필수 메소드, 컴포넌트 모양새 정의, 이 메소드 안에서 this.props와 this.state에 접근할 수 있으며 리액트 요소 반환
      이 메소드 안에서 이벤트 설정이 아닌 곳에서 setState 사용하거나 브라우저의 DOM에 접근하면 안됨 => componentDidMount에서 처리
    2. constructor 메소드 : constructor(props) {...}
      컴포넌트의 생성자 메소드로 컴포넌트를 만들 때 처음으로 실햄, 이 메소드에서 초기 state 정할 수 있음
    3. getDerivedStateFromProps 메소드 : 리액트 v16.3 이후 만든 메소드
        static getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.value !== prevState.value) { // 조건에 따라 특정 값 동기화
                return {value : nextProps.value}
            }
            return null // state 변경할 필요 없다면 null 반환
        }
      props로 받아 온 값을 state에 동기화 시키는 용도로 사용, 컴포넌트가 마운트 될 때와 업데이트 될 때 호출
    4. componentDidMount 메소드 : componentDidMount() {...}
      컴포넌트 만들고 첫 렌더링 다 마친 후 실행, 이 안에서 다른 JS 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리
    5. shouldComponentUpdate 메소드 : shouldComponentUpdate(nextProps, nextState) {...}
      props 또는 state를 변경했을 때 리렌더링을 시작할지 여부 지정하는 메소드, 이 메소드 안에서 현재 props와 state는 this.props와 this.state로 접근하고 새로 설정 될 것은 nextProps와 nextState로 접근
      프로젝트 성능 최적화 시 상황에 맞는 알고리즘 작성해 리렌더링 방지할 땐 false 값 반환하게 함
    6. getSnapshopBeforeUpdate 메소드 : 리액트 v16.3 이후 만든 메소드
        getSnapshotBeforeUpdate(prevProps, prevState) {
            if(prevState.array !== this.state.array) {
                const {scrollTop, scrollHeight} = this.list
                  return {scrollTop, scrollHeight}
            }
        }
      render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전 호출, 이 메소드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있음
      주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용됨(ex. 스크롤바 위치 유지) 
    7. componentDidUpdate 메소드 : componentDidUpdate(prevProps, prevState, snapshot) {...}
      리렌더링 완료한 후 실행, 업데이트 끝난 직후이므로 DOM 관련 처리 가능, prevProps 또는 prevState 사용해 컴포넌트가 이전에 가졌던 데이터에 접근 가능
      getSnapshopBeforeUpdate에서 반환한 값 있으면 snapshot 값 전달받을 수 있음
    8. componentWillUnmount 메소드 : componentWillUnmount() {...}
      컴포넌트를 DOM에서 제거할 때 실행, componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있을경우 여기서 제거 작업 해야됨
    9. componentDidCatch 메소드 : 리액트 v16에서 새로 도입
      componentDidCatch(error, info) { // error : 어떤 에러가 발생했는지 알려줌, info : 어디에 있는 코드에서 오류 발생했는지에 대한 정보 줌
        this.setState({
            error : true
        })
        console.log({error, info})
      }
      컴포넌트 렌더링 도중 에러 발생했을 때 애플리케이션이 먹통 되지 않고 오류 UI 보여줄 수 있게 해줌
      컴포넌트 자신에게 방생하는 에러 잡아낼 수 없고 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있음






*/
