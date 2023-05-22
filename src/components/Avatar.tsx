import styled from "styled-components";
import { ImageWrapper, Title } from "../styled/common";

import { socialData } from "../const";
import { SocialMedia } from "../common/SocialMedia";
import { useTranslate } from "../hooks/translate";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require("../static/main.jpg");

export const Avatar = () => {
  const { t } = useTranslate();
  return (
    <ImageWrapper>
      <Image src={logo} alt="avatar" />
      <Contact>
        <Name>{t.name}</Name>
        <SocialMediaWrapper>
          {socialData.map(({ icon, href }) => (
            <SocialMedia icon={icon} href={href} key={href} />
          ))}
        </SocialMediaWrapper>
      </Contact>
    </ImageWrapper>
  );
};

const Contact = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: 10%;
  width: 100%;
  text-align: center;
`;

const Name = styled(Title)`
  font-size: calc(24px + 26 * (100vw / 1700));

  line-height: 60px;
`;
const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
