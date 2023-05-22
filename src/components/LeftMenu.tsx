import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faCloudDownloadAlt,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { CustomLink } from "../common/CustomLink";
import { Checkbox } from "../common/Checkbox";
import { cssGreenHover, Menu } from "../styled/common";
import { useTranslate } from "../hooks/translate";
import React, { useCallback, useEffect } from "react";

export const LeftMenu = () => {
  const { lang, setT } = useTranslate();
  useEffect(() => {
    if (localStorage.getItem("lang") === "ru") {
      setT(false);
    } else if (localStorage.getItem("lang") === "en") {
      setT(true);
    }
  }, []);

  const checkHandler = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (lang === "en") {
        setT(false);
      } else if (lang === "ru") {
        setT(true);
      }
    },
    [lang]
  );
  return (
    <Menu>
      <div />
      <Checkbox checkHandler={checkHandler} lang={lang as string} />
      <List>
        <CustomLink to="/">
          <MenuIcon icon={faUser} />
        </CustomLink>
        <CustomLink to="contacts">
          <MenuIcon icon={faComment} />
        </CustomLink>
        <CustomLink to="my-works">
          <MenuIcon icon={faGlasses} />
        </CustomLink>
        <CustomLink to="resume">
          <MenuIcon icon={faBriefcase} />
        </CustomLink>
      </List>
      <div>
        <MenuIcon icon={faCloudDownloadAlt} />
      </div>
    </Menu>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 30px;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: calc(20px + 10 * (100vw / 1700));
  width: 50px;
  color: ${({ theme }) => theme.color.lightGrey};
  ${cssGreenHover}
`;
