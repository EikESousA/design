/* eslint-disable @typescript-eslint/no-unused-vars */
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
} from "react";

interface IPopoverContextData {
  popoverRef: RefObject<HTMLDivElement>;
  pastShow: () => void;
  handleOnClickOut: () => void;
  handleOnClickOver: ({ el, child }: IHandleOnClickOver) => void;
}

interface IPopoverProps {
  children: ReactNode;
}

interface IHandleOnClickOver {
  el: Element;
  child: ReactNode;
}

const PopoverContext = createContext<IPopoverContextData>(
  {} as IPopoverContextData,
);

export function PopoverProvider({ children }: IPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  const [rect, setRect] = useState<DOMRect | null>(null);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [type, setType] = useState<string>("none");

  const [element, setElement] = useState<ReactNode | null>(null);

  const style = useMemo(() => {
    return {
      left: `${x + window.scrollX}px`,
      top: `${y + window.scrollY}px`,
    };
  }, [x, y]);

  const pastShow = useCallback(() => {
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

      if (bAbove) {
        yUpdated = ty - rect.height / 2 - 5;
        xUpdated = lx + rect.width / 2 - ttRect.width / 2;

        if (xUpdated < 0) {
          xUpdated = lx;
        }

        typeUpdated = "top";
      } else if (bBellow) {
        yUpdated = by + 5;
        xUpdated = lx + (rect.width / 2 - ttRect.width / 2);

        if (xUpdated < 0) {
          xUpdated = lx;
        }

        typeUpdated = "bottom";
      } else if (bLeft) {
        xUpdated = lx - ttRect.width - 5;
        yUpdated = ty + (rect.height / 2 - ttRect.height / 2);

        if (yUpdated < 0) {
          yUpdated = ty;
        }

        typeUpdated = "left";
      } else if (bRight) {
        xUpdated = rx + 5;
        yUpdated = ty + (rect.height / 2 - ttRect.height / 2);

        if (yUpdated < 0) {
          yUpdated = ty;
        }

        typeUpdated = "right";
      }

      setType(typeUpdated);
      setX(xUpdated);
      setY(yUpdated);
    }
  }, [rect]);

  const handleOnClickOut = useCallback(() => {
    setRect(null);
  }, []);

  const handleOnClickOver = useCallback(({ el, child }: IHandleOnClickOver) => {
    if (el != null) {
      const rectUpdated = el.getBoundingClientRect();

      setRect(rectUpdated);
      setElement(child);
    }
  }, []);

  useEffect(() => {
    if (rect) {
      pastShow();
    }
  }, [pastShow, rect]);

  const context = useMemo(() => {
    return {
      popoverRef,
      pastShow,
      handleOnClickOut,
      handleOnClickOver,
      element,
      style,
      type,
    };
  }, [
    popoverRef,
    pastShow,
    handleOnClickOut,
    handleOnClickOver,
    element,
    style,
    type,
  ]);

  return (
    <PopoverContext.Provider value={context}>
      {children}
    </PopoverContext.Provider>
  );
}

export function usePopover() {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }

  return context;
}
