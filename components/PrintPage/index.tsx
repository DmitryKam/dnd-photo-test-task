import { useState } from 'react';
import styled from 'styled-components';

import Toolbar from '../ToolBar';
import { colors } from '../../styles/colors';
import DndLayout from '../DndLayout';
import DraggablePhoto from "../DraggablePhoto";
import { TPagesData } from '../../types';
import { TPrintPageProps } from "./types";

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: ${colors.darkGray};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${colors.blue};
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

const PrintPhoto = styled.div`
  width: calc(50% - 10px);

  animation: show 0.7s;
  animation-fill-mode: forwards;
  
  @keyframes show{
  0% {
    opacity:0.3;
  }
  100% {
    opacity:1;
  }
 }
  
  img {
    max-width: 100%;
  }
`;

export default function PrintPage({ data}:TPrintPageProps) {
  const [draggablePages, setDraggablePages] = useState<TPagesData[]>(data);

  const handlePhotosChange = (pages: TPagesData[]) => {
    setDraggablePages(pages);
  };

  return (
    <Wrapper>
      <DndLayout pages={draggablePages} onPhotosChange={handlePhotosChange}>
        <>
          {draggablePages.map((page, pageIndex) =>
            <div key={pageIndex + page.title}>
              <Header>
                <Title>{page.title}</Title>
                <Toolbar />
              </Header>

              <PageLayout>
                {page.images.map((image, index) =>
                  <PrintPhoto key={image + index}>
                    <DraggablePhoto photo={image} />
                  </PrintPhoto>
                )}
              </PageLayout>
            </div>
          )}
        </>
      </DndLayout>
    </Wrapper>
  );
}
