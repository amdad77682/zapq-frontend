'use client';
import React from 'react';

export const ToggleState = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(props.isActive || false);
  return props.render({
    isOpen,
    close: () => {
      setIsOpen(false);
    },
    open: () => {
      setIsOpen(true);
    },
    toggle: () => {
      setIsOpen(!isOpen);
    },
  });
};
type Props = {
  isActive?: boolean;
  render({
    isOpen,
    close,
    open,
  }: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
    toggle: () => void;
  }): JSX.Element;
};
