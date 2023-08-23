/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-useless-fragment */

import { RefObject, ReactNode, HTMLAttributes, useEffect } from "react";

import { usePopover } from "@/hooks/popover";

type Orders = "top" | "left" | "right" | "bottom";

interface IPopoverRootProps extends HTMLAttributes<HTMLDivElement> {
  elRef: RefObject<HTMLButtonElement>;
  open: boolean;
  handleClose: (value?: any) => void;
  order?: Orders[];
  children: ReactNode;
}

export default function PopoverRoot({
  elRef,
  open,
  handleClose,
  order,
  children,
}: IPopoverRootProps) {
  const { selectPopover } = usePopover();

  useEffect(() => {
    selectPopover({
      open,
      handleClose,
      elRef,
      popover: children,
      order,
    });
  }, [children, elRef, handleClose, open, order, selectPopover]);

  return <></>;
}
