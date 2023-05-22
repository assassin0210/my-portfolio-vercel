import { FC } from "react";
import { cssGreenHover, Icon, Text } from "../styled/common";
import { ISocialMedia } from "../const";
import styled from "styled-components";

export const SocialMedia: FC<ISocialMedia> = ({
  icon,
  href,
  children,
  $size,
}) => {
  return (
    <Wrapper target={"_blank"} href={href}>
      <Icon $size={$size} icon={icon} />
      <ContactText>{children}</ContactText>
    </Wrapper>
  );
};
const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  ${cssGreenHover};
`;

const ContactText = styled(Text)`
  margin: 0;
  padding: 0;
`;
