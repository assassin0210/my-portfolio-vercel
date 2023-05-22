import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { media } from "./media";

export const transitionCSS = css`
  transition: all 0.3s ease-in-out;
`;

const SkeletonAnim = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const SkeletonCSS = css`
  background: linear-gradient(90deg, #c4ccd3 35%, #f2f5f7 60%, #c4ccd3 80%);
  background-size: 400% 100%;
  animation: ${SkeletonAnim} 1s infinite;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 470px;
  overflow: hidden;
  z-index: 20;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4), 0 4px 20px 0 rgba(0, 0, 0, 0.7);
  border-radius: 3px;

  ${media.extraDesktopBefore} {
    width: 340px;
  }

  ${media.laptopBefore} {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const scrollStylesCSS = css`
  overflow: auto;

  @supports (-moz-appearance: none) {
    scrollbar-color: #57585a;
    scrollbar-width: thin;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    &::-webkit-scrollbar {
      width: 14px;
      height: 14px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      width: 100%;
    }

    &::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      padding: 20px;
      background-clip: padding-box;
      box-sizing: border-box;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.color.lightGrey};
    }
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 10px 5px;
  width: 600px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  margin: 30px 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;

  ${media.extraDesktopBefore} {
    width: 700px;
    margin: 60px 0;
  }

  ${media.laptopBefore} {
    margin: 0;
    width: 600px;
  }

  :before {
    content: "";
    top: 0;
    height: 30px;
    position: absolute;
    display: block;
    width: 100%;
    margin-right: 10px;
    margin-top: 10px;
    z-index: 100;

    background-image: linear-gradient(
      to bottom,
      rgba(21, 23, 24, 1),
      rgba(21, 23, 24, 0.5),
      rgba(21, 23, 24, 0)
    );
  }

  :after {
    content: "";
    bottom: 9px;
    height: 30px;
    position: absolute;
    display: block;
    width: 100%;
    margin-right: 10px;
    z-index: 100;
    background-color: ${({ theme }) => theme.color.darkGrey};
    background: linear-gradient(
      to top,
      rgba(21, 23, 24, 1),
      rgba(21, 23, 24, 0.5),
      rgba(21, 23, 24, 0)
    );
  }
`;

export const ScrollSection = styled.section`
  padding: 30px 10px 10px 30px;
  ${scrollStylesCSS};

  ${media.laptopBefore} {
    padding: 30px 6px;
  }
`;

export const Title = styled.h1`
  font-size: calc(28px + 32 * (100vw / 1700));
  font-weight: bold;
  line-height: 50px;
  margin-bottom: 15px;

  color: ${({ theme }) => theme.color.white};
`;

export const GreenText = styled.span`
  font-size: calc(14px + 4 * (100vw / 1700));
  font-style: italic;
  color: ${({ theme }) => theme.color.green};
`;

export const Subtitle = styled(Title)`
  font-size: calc(22px + 18 * (100vw / 1700));
  margin-bottom: 15px;
  line-height: 40px;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  padding-bottom: 30px;
`;

export const TextWithLine = styled.p`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const cssGreenHover = css`
  cursor: pointer;

  &:active,
  :hover {
    color: ${({ theme }) => theme.color.green};

    path {
      fill: ${({ theme }) => theme.color.green};
      ${transitionCSS};
    }
  }

  ${transitionCSS};
`;
export const Icon = styled(FontAwesomeIcon)<{ $size?: string }>`
  font-size: ${({ $size }) =>
    $size ? $size : "calc(18px + 12 * (100vw / 1700))"};

  ${media.desktopBefore} {
    font-size: calc(30px + 10 * (100vw / 1700));
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GreenTextTick = styled(GreenText)`
  &:after {
    content: "/";
    padding: 0 10px;
    color: ${({ theme }) => theme.color.lightGrey};
    opacity: 0.5;
  }
`;
export const SubtitleWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;

  ${media.laptopBefore} {
    margin: 10px 0;
  }
`;
export const Menu = styled.div`
  margin: 30px 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.darkGrey};
  width: 80px;
  position: relative;
  left: 0;

  ${media.extraDesktopBefore} {
    padding-bottom: 60px;
    margin: 60px 0;
  }

  ${media.laptopBefore} {
    width: 60px;
    margin: 0;
  }

  ${media.laptop} {
    display: flex;
    background: linear-gradient(
      90deg,
      rgba(28, 29, 31, 1) 0%,
      rgba(9, 8, 8, 1) 100%
    );
  }
`;

export const HoverSection = styled(FlexCenter)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 4;
  ${transitionCSS};
  object-fit: contain;
`;
export const Links = styled.div`
  position: absolute;
  border-radius: 8px;
  width: 100%;
  pointer-events: none;
  height: 100%;
  z-index: 3;
  opacity: 0;
  background-color: rgb(45%, 46%, 47%, 0.6);
  ${transitionCSS};
`;
