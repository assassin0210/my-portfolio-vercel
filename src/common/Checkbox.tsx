import styled from "styled-components";
import React from "react";
import { transitionCSS } from "../styled/common";

export const Checkbox = ({
  lang,
  checkHandler,
}: {
  lang: string;
  checkHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Wrapper>
      <input
        onChange={checkHandler}
        checked={lang === "en"}
        type="checkbox"
        id="toggle"
        className="checkbox"
      />
      <label htmlFor="toggle" className="switch" />
      <Lang>
        <LangItem toggle={lang === "ru"}>Ru</LangItem>
        <LangItem toggle={lang === "en"}>En</LangItem>
      </Lang>
    </Wrapper>
  );
};

const LangItem = styled.span<{ toggle?: boolean }>`
  color: ${({ toggle, theme }) => toggle && theme.color.green};
  ${transitionCSS};
`;

const Lang = styled.div`
  display: flex;
  gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .switch {
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.lightGrey};
    border-radius: 20px;
    ${transitionCSS};
  }

  .switch::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    top: 1px;
    left: 1px;
    ${transitionCSS};
  }

  .checkbox:checked + .switch::after {
    left: 20px;
  }

  .checkbox:checked + .switch {
    background-color: ${({ theme }) => theme.color.green};
  }

  .checkbox {
    display: none;
  }
`;
