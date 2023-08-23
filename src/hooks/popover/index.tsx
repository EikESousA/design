/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
  ReactNode,
  RefObject,
  isValidElement,
} from "react";
import { createPortal } from "react-dom";

import { Container } from "./styles";

interface IPopoverContextData {
  selectPopover: (value: SelectPopoverProps) => void;
}

interface PopoverProps {
  children: ReactNode;
}

interface SelectPopoverProps {
  open: boolean;
  handleClose: (value?: any) => void;
  elRef: RefObject<HTMLButtonElement> | null;
  popover: ReactNode;
  order?: Orders[];
}

interface IElement {
  open: boolean;
  handleClose: (value?: any) => void;
  elRef: RefObject<HTMLButtonElement> | null;
  popover: ReactNode | null;
  order: Orders[];
}

const PopoverContext = createContext<IPopoverContextData>(
  {} as IPopoverContextData,
);

type Orders = "top" | "left" | "right" | "bottom";

const orderDefault: Orders[] = ["bottom", "top", "left", "right"];

export function PopoverProvider({ children }: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [type, setType] = useState<string>("none");

  const [element, setElement] = useState<IElement>({
    elRef: null,
    order: orderDefault,
    popover: null,
    handleClose: () => {},
    open: false,
  });

  const style = useMemo(() => {
    return {
      left: `${x + window.scrollX}px`,
      top: `${y + window.scrollY}px`,
    };
  }, [x, y]);

  const pastShow = useCallback(
    (rect: DOMRect) => {
      const ttNode = popoverRef.current;

      if (ttNode != null && rect !== null) {
        let xUpdated = 0;
        let yUpdated = 0;

        const docWidth = document.documentElement.clientWidth;
        const docHeight = document.documentElement.clientHeight;

        const rx = rect.x + rect.width;
        const lx = rect.x;
        const ty = rect.y;
        const by = rect.y + rect.height;

        const ttRect = ttNode.getBoundingClientRect();

        const bAbove = ty - ttRect.height >= 0;
        const bBellow = by + ttRect.height <= window.scrollY + docHeight;
        const bLeft = lx - ttRect.width >= 0;
        const bRight = rx + ttRect.width <= window.scrollX + docWidth;

        let typeUpdated = "none";

        let indexOrder = 0;
        let findPosition = false;

        while (!findPosition || indexOrder < 4) {
          if (
            element.order[indexOrder] === "bottom" &&
            bBellow &&
            !findPosition
          ) {
            yUpdated = by + 5;
            xUpdated = lx + (rect.width / 2 - ttRect.width / 2);

            if (xUpdated < 0) {
              xUpdated = lx;
            }

            typeUpdated = "bottom";
            findPosition = true;
          }

          if (element.order[indexOrder] === "top" && bAbove && !findPosition) {
            yUpdated = ty - rect.height / 2 - 5;
            xUpdated = lx + rect.width / 2 - ttRect.width / 2;

            if (xUpdated < 0) {
              xUpdated = lx;
            }

            typeUpdated = "top";
            findPosition = true;
          }

          if (element.order[indexOrder] === "left" && bLeft && !findPosition) {
            xUpdated = lx - ttRect.width - 5;
            yUpdated = ty + (rect.height / 2 - ttRect.height / 2);

            if (yUpdated < 0) {
              yUpdated = ty;
            }

            typeUpdated = "left";
            findPosition = true;
          }

          if (
            element.order[indexOrder] === "right" &&
            bRight &&
            !findPosition
          ) {
            xUpdated = rx + 5;
            yUpdated = ty + (rect.height / 2 - ttRect.height / 2);

            if (yUpdated < 0) {
              yUpdated = ty;
            }

            typeUpdated = "right";
            findPosition = true;
          }

          indexOrder += 1;
        }

        if (!findPosition) {
          yUpdated = by + 5;
          xUpdated = lx + (rect.width / 2 - ttRect.width / 2);

          if (xUpdated < 0) {
            xUpdated = lx;
          }

          typeUpdated = "bottom";
        }

        setType(typeUpdated);
        setX(xUpdated);
        setY(yUpdated);
      }
    },
    [element.order],
  );

  const selectPopover = useCallback(
    ({ open, handleClose, elRef, popover, order }: SelectPopoverProps) => {
      setElement({
        open,
        handleClose,
        elRef,
        popover,
        order: order || orderDefault,
      });
    },
    [],
  );

  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        popoverRef.current &&
        typeof popoverRef.current === "object" &&
        !popoverRef.current.contains(event.target)
      ) {
        element.handleClose();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [element]);

  useEffect(() => {
    if (
      element.elRef &&
      isValidElement(element.elRef.current) &&
      element.elRef.current
    ) {
      const rect = element.elRef.current.getBoundingClientRect();

      pastShow(rect);
    } else {
      setX(0);
      setY(0);
      setType("none");
    }
  }, [element.elRef, pastShow]);

  const context = useMemo(() => {
    return {
      selectPopover,
    };
  }, [selectPopover]);

  return (
    <PopoverContext.Provider value={context}>
      {element.open && element.popover
        ? createPortal(
            <div
              onClick={(event) => event.stopPropagation()}
              aria-hidden="true"
            >
              <Container
                className={`${type}`}
                style={{ left: style.left, top: style.top }}
                ref={popoverRef}
              >
                {element.popover}
              </Container>
            </div>,
            document.getElementById("root") || document.body,
          )
        : null}
      {children}
    </PopoverContext.Provider>
  );
}

export function usePopover() {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("usePopover must be used within a PopoverProvider");
  }

  return context;
}
