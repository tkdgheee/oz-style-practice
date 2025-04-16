import { flexMixin, fontMixin, tagColor, gray } from "../styles/mixin.js";
import styled from "styled-components";

const HeaderContainer = styled.header`
  ${flexMixin('row', 'space-between', 'center')};
  padding: 20px;
  background-color: black;

  ul {
    ${flexMixin('row', 'center', 'center', '20px')};

    li {
      ${fontMixin('16px', 400)};
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}
