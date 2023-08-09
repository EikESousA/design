import { ReactNode, isValidElement } from "react";

export default function getChildrens(childrens: ReactNode[] | ReactNode) {
  let label = null;
  let lefticon = null;
  let righticon = null;
  let button = null;

  if (childrens) {
    if (Array.isArray(childrens)) {
      if (childrens.length > 0) {
        childrens.forEach((item: ReactNode) => {
          if (item && isValidElement(item) && typeof item.type === "function") {
            if (item.type.name === "InputLabel") {
              label = item;
            }
            if (item.type.name === "InputLeftIcon") {
              lefticon = item;
            }
            if (item.type.name === "InputRightIcon") {
              righticon = item;
            }
            if (item.type.name === "InputButton") {
              button = item;
            }
          }
        });
      }
    } else if (
      childrens &&
      isValidElement(childrens) &&
      typeof childrens.type === "function"
    ) {
      if (childrens.type.name === "InputLabel") {
        label = childrens;
      }
      if (childrens.type.name === "InputLeftIcon") {
        lefticon = childrens;
      }
      if (childrens.type.name === "InputRightIcon") {
        righticon = childrens;
      }
      if (childrens.type.name === "InputButton") {
        button = childrens;
      }
    }
  }

  return {
    label,
    lefticon,
    righticon,
    button,
  };
}
