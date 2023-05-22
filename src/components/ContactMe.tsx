import { TextWithLine, Title, Text } from "../styled/common";
import { Map } from "../common/Map";
import { useTranslate } from "../hooks/translate";
import { contactsData, socialData } from "../const";

import { SocialMedia } from "../common/SocialMedia";
import styled from "styled-components";
import { media } from "../styled/media";

export const ContactMe = () => {
  const { t } = useTranslate();
  return (
    <>
      <Title>{t.contactMe.title}</Title>
      <TextWithLine>{t.contactMe.text}</TextWithLine>
      <Map />
      <Wrapper>
        {contactsData.concat(socialData).map(({ icon, href, text }) => (
          <SocialMedia key={href} icon={icon} href={href}>
            <ContactText> {text}</ContactText>
          </SocialMedia>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;

  ${media.mobileBefore} {
    grid-template-columns: auto;
  }
`;

const ContactText = styled(Text)`
  display: inline;
  padding: 0;
  margin: 0;
`;
