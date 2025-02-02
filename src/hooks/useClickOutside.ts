import React, { useEffect } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  withPortal?: boolean,
  portalRef?: React.RefObject<HTMLElement>,
  inputRef?: React.RefObject<HTMLInputElement>,
  optionRef?: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        (withPortal && portalRef?.current && portalRef.current.contains(target)) ||
        (optionRef?.current && optionRef.current.contains(target)) ||
        (inputRef?.current && inputRef.current.contains(target)) ||
        (ref.current && ref.current.contains(target))
      ) {
        return;
      }

      callback();
    };

    const handleMouseDown = (event: MouseEvent) => {
      setTimeout(() => {
        handleClickOutside(event);
      }, 0);
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [ref, callback, withPortal, portalRef, inputRef, optionRef]);
};
