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

import Tooltip from "@/components/Tooltip";

interface ITooltipContextData {
  tooltipRef: RefObject<HTMLDivElement>;
  pastShow: () => void;
  handleOnMouseOut: () => void;
  handleOnMouseOver: ({ el, text }: IHandleOnMouseOver) => void;
}

interface ITooltipProps {
  children: ReactNode;
}

interface IHandleOnMouseOver {
  el: Element;
  text: string;
}

const TooltipContext = createContext<ITooltipContextData>(
  {} as ITooltipContextData,
);

export function TooltipProvider({ children }: ITooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [rect, setRect] = useState<DOMRect | null>(null);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [type, setType] = useState<string>("none");
  const [label, setLabel] = useState<string>("");

  const style = useMemo(() => {
    return {
      left: `${x + window.scrollX}px`,
      top: `${y + window.scrollY}px`,
    };
  }, [x, y]);

  const pastShow = useCallback(() => {
    const ttNode = tooltipRef.current;

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

  const handleOnMouseOut = useCallback(() => {
    setRect(null);
  }, []);

  const handleOnMouseOver = useCallback(({ el, text }: IHandleOnMouseOver) => {
    if (el != null) {
      const rectUpdated = el.getBoundingClientRect();

      setLabel(text);
      setRect(rectUpdated);
    }
  }, []);

  useEffect(() => {
    if (rect) {
      pastShow();
    }
  }, [pastShow, rect]);

  const context = useMemo(() => {
    return {
      tooltipRef,
      pastShow,
      handleOnMouseOut,
      handleOnMouseOver,
    };
  }, [tooltipRef, pastShow, handleOnMouseOut, handleOnMouseOver]);

  return (
    <TooltipContext.Provider value={context}>
      {children}
      <Tooltip.Root
        elRef={tooltipRef}
        label={label}
        visible={!!rect}
        style={style}
        type={type}
      />
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }

  return context;
}
