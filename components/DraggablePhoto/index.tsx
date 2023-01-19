import React from 'react';
import styled from 'styled-components';
import { useDraggable, useDroppable } from '@dnd-kit/core';

import { TDraggablePhotoProps } from "./types";

const Draggable = styled.div`
  margin: auto;
  cursor: grab;
  opacity: ${({ isDragging }) => (isDragging ? 0.64 : 1)};
`;

const DropArea = styled.div`
  opacity: ${({ isOver }) => (isOver ? 0.3 : 1)};
`;

export default function DraggablePhoto({ photo }: TDraggablePhotoProps) {
  const dndPhotoConfig = {
    id: photo,
  };

  const { isDragging, attributes, listeners, setNodeRef } = useDraggable(dndPhotoConfig);

  const { active, isOver, setNodeRef: setDroppableRef, over } = useDroppable(dndPhotoConfig);

  return (
    <DropArea ref={setDroppableRef}  isOver={isOver && active.id !== over.id}>
      <Draggable ref={setNodeRef} {...attributes} {...listeners} isDragging={isDragging} isOver={isOver}>
        <img src={photo} alt="photo" />
      </Draggable>
    </DropArea>
  );
}
