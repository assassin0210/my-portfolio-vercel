import styled from "styled-components";
import { FlexCenter } from "../styled/common";

export const SkillItem = ({
  skill,
  percent,
}: {
  skill: string;
  percent: string;
}) => {
  return (
    <div>
      <TextWrapper>
        <Text>{skill}</Text>
        <PercentNum>
          {percent}
          <Percent>%</Percent>
        </PercentNum>
      </TextWrapper>
      <Lite $percent={percent} />
    </div>
  );
};

const Text = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: calc(12px + 4 * (100vw / 1700));
`;

const Percent = styled.span`
  font-size: calc(10px + 4 * (100vw / 1700));
`;

const PercentNum = styled.span`
  color: ${({ theme }) => theme.color.green};
`;

const TextWrapper = styled(FlexCenter)`
  justify-content: space-between;
`;

const Lite = styled.div<{ $percent: string }>`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.color.lightGrey};
  position: relative;
  margin-top: 5px;

  &:after {
    content: "";
    border-radius: 6px;
    height: 100%;
    width: ${({ $percent }) => $percent || 0}%;
    position: absolute;
    background-color: ${({ theme }) => theme.color.green};
    transition: all 0.3s ease-in-out;
  }
`;
