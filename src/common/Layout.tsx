import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  Menu,
  ScrollSection,
  transitionCSS,
} from "../styled/common";
import { media } from "../styled/media";
import { Caret } from "./Caret";
import { LeftMenu } from "../components/LeftMenu";
import { Avatar } from "../components/Avatar";

export const LayoutContainer: FC = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  const setMenuHandler = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const outClickRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const outsideClick = (event: any) => {
      event?.stopPropagation();
      if (
        !outClickRef.current?.contains(event.path?.[0] || event.target) &&
        !buttonRef.current?.contains(event.path?.[0] || event.target)
      ) {
        setMenu(false);
      }
    };
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  return (
    <Layout>
      <LeftMenu />
      <Avatar />
      <Container>
        <MobileGamburger ref={buttonRef}>
          <Caret toggle={menu} setToggle={setMenuHandler} />
        </MobileGamburger>
        <ScrollSection ref={ref}>
          <MobileMenu ref={outClickRef} menu={menu}>
            <LeftMenu />
          </MobileMenu>
          <Outlet />
        </ScrollSection>
      </Container>
    </Layout>
  );
};
const MobileMenu = styled.div<{ menu?: boolean }>`
  position: absolute;
  ${transitionCSS};
  z-index: 999;
  top: 0;
  left: ${({ menu }) => (menu ? "0" : "-90px")};
  height: 100%;

  ${Menu} {
    display: flex;
    height: 100%;

    :before {
      content: "";
      top: 0;
      right: -30px;
      height: 100%;
      position: absolute;
      display: block;
      width: 20px;
      margin-right: 10px;
      margin-top: 10px;
      background-image: linear-gradient(
        to right,
        rgba(21, 23, 24, 1),
        rgba(21, 23, 24, 0.5),
        rgba(21, 23, 24, 0)
      );
    }
  }

  ${media.laptop} {
    display: none;
  }
`;
const MobileGamburger = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  padding: 10px 20px;
  display: block;

  ${media.laptop} {
    display: none;
  }
`;
const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 6px 0;

  ${media.extraDesktopBefore} {
    padding: 26px 20px;
  }

  ${media.laptopBefore} {
    padding: 0;
  }
`;
