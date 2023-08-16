/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */
import { CSSProperties, ReactNode, RefObject, useEffect } from "react";

import { usePopover } from "@/hooks/popover";

interface IPopoverRootProps {
  elRef: RefObject<HTMLButtonElement>;
  open: boolean;
  type: string;
  style: CSSProperties;
  children: ReactNode;
}

export default function PopoverRoot({
  elRef,
  open,
  type,
  style,
  children,
}: IPopoverRootProps) {
  const { handleOnClickOver } = usePopover();

  useEffect(() => {
    if (elRef && open && type && style && children) {
      handleOnClickOver({
        child: children,
        el: elRef.current as Element,
      });
    }
  }, [children, elRef, handleOnClickOver, open, style, type]);

  return <></>;
}
