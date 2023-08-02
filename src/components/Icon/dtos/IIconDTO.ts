import { SVGProps } from "react";

export type IIconDTO =
  | "alert"
  | "asterisk"
  | "attachfile"
  | "chatbot"
  | "check"
  | "close"
  | "dark"
  | "delete"
  | "edit"
  | "email"
  | "eye"
  | "eyeslash"
  | "filter"
  | "info"
  | "light"
  | "menu"
  | "notification"
  | "password"
  | "profile"
  | "search"
  | "send"
  | "success"
  | "volumedown"
  | "volumemute"
  | "volumeup"
  | "warning"
  | "painting"
  | "components";

export interface IIconRootProps extends SVGProps<SVGSVGElement> {
  icon: IIconDTO;
  datatestid?: string | null;
}

export interface ISVGProps extends SVGProps<SVGSVGElement> {
  datatestid?: string | null;
}
