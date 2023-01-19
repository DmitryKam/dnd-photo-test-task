import { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { swapPhoto } from '../../utils/dndUtils';
import { TDndLayoutProps } from './types';
import { DRAG_MODIFIERS, DROP_ANIMATION } from "./constants";

const ImgPreview = styled.div`
  height: 100px;
  width: 100px;
  border: 5px ${colors.white} solid;
  border-radius: 50%;
  max-width: 100px;
  overflow: hidden;

  cursor: grabbing;
  margin: auto;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default function DndLayout({
  pages,
  onPhotosChange,
  children,
}: TDndLayoutProps) {
  const [currentDragItem, setCurrentDragItem] = useState<string | null>(null);

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.id) {
      setCurrentDragItem(event.active.id as string);
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    const sourceablePhoto = event.over?.id as string;

    if (currentDragItem && sourceablePhoto && sourceablePhoto !== currentDragItem) {
      const updatedPages = pages.map(page => ({
        ...page,
        images: swapPhoto(page.images, currentDragItem, sourceablePhoto),
      }));

      onPhotosChange(updatedPages);
    }
    setCurrentDragItem(null);
  };

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      {children}
      <DragOverlay dropAnimation={DROP_ANIMATION} modifiers={DRAG_MODIFIERS}>
        {currentDragItem && (
          <ImgPreview>
            <img src={currentDragItem} alt="photo" />
          </ImgPreview>
        )}
      </DragOverlay>
    </DndContext>
  );
}
