import { RefObject, useEffect, useRef } from "react";

type Callback = (event: MouseEvent | TouchEvent | KeyboardEvent) => void;

export const useOnClickOutside = <T extends HTMLElement>(
  elementRef: RefObject<T>,
  callback: Callback
) => {
  const callbackRef = useRef<Callback>(callback);

  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callbackRef.current(event);
      }
    };

    window.addEventListener("keydown", callback);

    return () => {
      window.removeEventListener("keypress", callback);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        !elementRef.current ||
        elementRef.current.contains(event.target as T)
      ) {
        return;
      }

      if ((event.target as HTMLElement).dataset.cancelClickOutside) {
        return;
      }

      callbackRef.current(event);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [elementRef, callbackRef]);
};
