귀한 기회를 통해 graphQL을 사용해볼 수 있어서 정말 감사드렸습니다.

# 실행

`npm install`하여 필요한 모듈을 설치한 후, `npm run dev` script를 이용하여 로컬에서 실행해보실 수 있습니다.

# 배포

AWS의 EC2에서 배포했습니다.

# .env

BASE_URI는 .env 파일로 관리했습니다. 로컬에서 실행할 경우 .env 파일을 생성하셔서 다음과 같이 저장하면 작동합니다.
`BASE_URI=https://playground-dev.futureplay.co/v1/graphql`

# Type

- 대부분 api 데이터와 관련된 type이라 graphql에 gql 정의하는 폴더 내에 type을 함께 정의했습니다.
- 컴포넌트 내에서만 사용되는 type의 경우 해당 컴포넌트 안에서만 정의하여 사용했습니다.

# Styles

- 전역적으로 사용되는 스타일은 styles/globalStyle.ts에 정의했습니다.
- 자주 사용되는 색상은 styles/theme.ts에 정의하여 사용했습니다.

# components

ExpandableBox.tsx, Rating.tsx의 경우 다른 페이지에서도 자주 사용될 것 같아 common 폴더를 생성할까 고민했지만 현재 구현하는 페이지 자체가 적기때문에 components 폴더 내에 common한 컴포넌트와 페이지에 종속적인 컴포넌트를 함께 정의했습니다.

# utils

초를 계산하여 MM:SS형태나 시,분으로 변환하는 함수의 경우 utils 폴더로 따로 관리할까 고민했지만 불필요하게 파일을 분리하는 것 같아 사용되는 파일에만 정의하였습니다. 만약에 동일한 함수가 다른 곳에서도 사용되었다면 utils 또는 lib 폴더를 만들어 따로 관리했을 것 같습니다.

# constants

초를 분으로 변환하기 위해 60이라는 숫자가 함수 2곳에서 사용되어 constants 폴더에서 따로 관리하였습니다.

# 아쉬운 부분

## > Apollo client

SSR에서 Apollo client를 활용해 caching하는 방법을 찾아보고 적용해보려고 했으나 Apollo client 자체에 대한 이해도가 높지 않아 적용하지 못한 점이 아쉽습니다.
참고자료 : https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js

## > Type

instructors나 course_contents에 관련된 type 등 자주 사용되는 정보의 경우, 공통된 type을 정의하고 필요한 type만 Omit을 활용하여 적용할까 고민했지만 파일이 불필요하게 나뉘고 의존성을 갖게 된다고 생각하여 따로 정의했습니다.

## > CSS

갭이 8px, 16px인 컴포넌트, 작은 글씨에 적용되는 글자크기와 색상을 공통 css로 지정하여 가져다 사용할까 생각했습니다. 구분하지 않은 이유는 일차적으로 구현 크기가 크지 않은 상태에서 불필요한 파일 분리가 된다고 생각했습니다. 다른 이유로는 공통된 CSS를 styled에서 구현할 경우 아래의 예시와 같이 컴포넌트 형태로 사용하게 되는데 컴포넌트화는 불필요하다고 생각했습니다. flex나 gap과 같이 자주 사용되는 CSS를 정의해두기 위해 module.css를 활용할까 생각했지만 CSS in JS와 기본 CSS를 섞어서 사용하는 것이 좋은 방식인지 판단이 되지 않아 CSS in JS로 모두 통일하기로 결정했습니다.

```javascript
const Button = styled("button")`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

## > 강사 프로필

강사 프로필 컴포넌트를 생성해서 developer_test_instructor_by_pk를 이용해 각 강사의 데이터를 가져와 구현했으면 좋았을 것이라는 아쉬움이 있습니다.
