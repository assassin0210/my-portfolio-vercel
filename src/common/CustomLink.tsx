import { Link, useMatch } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";

export const CustomLink: FC<{ to: string }> = ({ to, children }) => {
  const match = useMatch(to);
  return (
    <LinkStyle $active={!!match} to={to}>
      {children}
    </LinkStyle>
  );
};

const LinkStyle = styled(Link)<{ $active: boolean }>`
  svg {
    font-size: ${({ $active }) =>
      $active && "calc(24px + 16 * (100vw / 1700))"};
  }

  path {
    fill: ${({ $active }) => $active && "#00c483"};
  }
`;
