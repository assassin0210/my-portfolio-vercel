import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

import {
  HoverSection,
  Links,
  SkeletonCSS,
  transitionCSS,
} from "../styled/common";
import { media } from "../styled/media";
import { SocialMedia } from "./SocialMedia";

interface IProp {
  link: string;
  src: string;
  git: string;
}

export const MyWorkItem = ({ src, git, link }: IProp) => {
  const [status, setStatus] = useState(false);

  const loaded = useCallback(() => {
    setStatus(true);
  }, []);
  return (
    <Wrapper onLoad={loaded} loaded={status}>
      <HoverSection>
        <SocialMedia $size={"60px"} icon={faGithubSquare} href={git} />
        <SocialMedia $size={"60px"} icon={faLink} href={link} />
      </HoverSection>
      <Image loaded={status} src={src} alt="" />
    </Wrapper>
  );
};

const Image = styled.img<{ loaded: boolean }>`
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  position: absolute;
  display: block;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${transitionCSS};

  ${media.desktopBefore} {
    width: 180px;
  }
`;

const Wrapper = styled.div<{ loaded?: boolean }>`
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  width: 230px;
  height: 300px;

  overflow: hidden;
  ${transitionCSS};
  ${({ loaded }) => !loaded && SkeletonCSS};

  ${media.desktopBefore} {
    width: 160px;
    height: 200px;
  }

  :hover {
    transform: scale(1.08);

    ${Image} {
      opacity: 0.3;
    }

    ${HoverSection} {
      opacity: 1;
    }

    ${Links} {
      opacity: 1;
    }
  }
`;
