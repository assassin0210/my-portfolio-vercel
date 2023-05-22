import styled from "styled-components";
import { FC } from "react";
import { transitionCSS } from "../styled/common";

interface ICaretProp {
  toggle?: boolean;
  setToggle?: () => void;
}

export const Caret: FC<ICaretProp> = ({ toggle, setToggle }) => {
  return (
    <Container onClick={setToggle}>
      <Wrapper>
        <Line1 toggle={toggle} />
        <Line toggle={toggle} />
        <Line2 toggle={toggle} />
      </Wrapper>
    </Container>
  );
};

const Line = styled.div<{ toggle?: boolean }>`
  opacity: ${({ toggle }) => (toggle ? "0" : "1")};
  transition: all 0.2s ease-in-out;
  height: 3px;
  width: 100%;
  background-color: white;
`;
const Line1 = styled.div<{ toggle?: boolean }>`
  height: 3px;
  width: 100%;
  background-color: white;
  transform: ${({ toggle }) =>
    toggle && `rotate(-45deg) translate(-12px, 11px)`};
  ${transitionCSS};
`;
const Line2 = styled.div<{ toggle?: boolean }>`
  height: 3px;
  width: 100%;
  background-color: white;
  transform: ${({ toggle }) =>
    toggle && `rotate(45deg) translate(-11px, -10px)`};
  ${transitionCSS};
`;
const Container = styled.div`
  cursor: pointer;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
