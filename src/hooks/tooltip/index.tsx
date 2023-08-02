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
  MouseEvent,
} from "react";

import Tooltip from "@/components/Tooltip";

interface ITooltipContextData {
  tooltipRef: RefObject<HTMLDivElement>;
  pastShow: () => void;
  handleOnMouseOut: () => void;
  handleOnMouseOver: ({ event, label }: IHandleOnMouseOver) => void;
}

interface ITooltipProps {
  children: ReactNode;
}

interface IHandleOnMouseOver {
  event: MouseEvent<HTMLButtonElement>;
  label: string;
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

  const style = {
    left: x + window.scrollX + "px",
    top: y + window.scrollY + "px",
  };

  const pastShow = useCallback(() => {
    const ttNode = tooltipRef.current;

    if (ttNode != null && rect !== null) {
      let x = 0;
      let y = 0;

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

      let type = "none";

      if (bAbove) {
        y = ty - rect.height / 2 - 5;
        x = lx + rect.width / 2 - ttRect.width / 2;

        if (x < 0) {
          x = lx;
        }

        type = "top";
      } else if (bBellow) {
        y = by + 5;
        x = lx + (rect.width / 2 - ttRect.width / 2);

        if (x < 0) {
          x = lx;
        }

        type = "bottom";
      } else if (bLeft) {
        x = lx - ttRect.width - 5;
        y = ty + (rect.height / 2 - ttRect.height / 2);

        if (y < 0) {
          y = ty;
        }

        type = "left";
      } else if (bRight) {
        x = rx + 5;
        y = ty + (rect.height / 2 - ttRect.height / 2);

        if (y < 0) {
          y = ty;
        }

        type = "right";
      }

      setType(type);
      setX(x);
      setY(y);
    }
  }, [rect]);

  const handleOnMouseOut = useCallback(() => {
    setRect(null);
  }, []);

  const handleOnMouseOver = useCallback(
    ({ event, label }: IHandleOnMouseOver) => {
      const el = event.currentTarget;

      if (el != null) {
        const rect = el.getBoundingClientRect();
        setLabel(label);
        setRect(rect);
      }
    },
    [],
  );

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
