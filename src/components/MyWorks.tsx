import { TextWithLine, Title, transitionCSS } from "../styled/common";
import { MyWorkItem } from "../common/MyWorkItem";
import styled from "styled-components";
import { useTranslate } from "../hooks/translate";

import { useSelector } from "react-redux";
import { RootStateType } from "../store/rootReducer";
import { media } from "../styled/media";

export const MyWorks = () => {
  const { t } = useTranslate();

  const { work, status } = useSelector(
    (state: RootStateType) => state.workData
  );

  return (
    <>
      <Title>{t.myWorks.title}</Title>
      <TextWithLine>{t.myWorks.description}</TextWithLine>
      <Wrapper>
        {status === "loaded" &&
          work.map((item) => (
            <MyWorkItem
              key={item.src}
              src={item.src}
              link={item.link}
              git={item.git}
            />
          ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 160px));
  grid-template-rows: repeat(auto-fit, minmax(140px, 200px));
  grid-gap: 45px;

  ${media.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(160px, 230px));
    grid-template-rows: repeat(auto-fit, minmax(200px, 300px));
    grid-gap: 30px;
  }

  align-items: center;
  justify-content: center;
  ${transitionCSS};
`;
