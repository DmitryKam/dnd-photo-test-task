import { snapCenterToCursor } from "@dnd-kit/modifiers";

export const DROP_ANIMATION = {
  duration: 0,
  easing: 'ease-in-out',
  dragSourceOpacity: 0.5,
};

export const DRAG_MODIFIERS = [snapCenterToCursor];