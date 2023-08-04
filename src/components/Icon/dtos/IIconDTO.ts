import { SVGProps } from "react";

export type IIconDTO =
  | "alert"
  | "arrowdown"
  | "arrowleft"
  | "arrowright"
  | "arrowup"
  | "asterisk"
  | "attachfile"
  | "bug"
  | "calendar"
  | "call"
  | "campaign"
  | "chatbot"
  | "chatshop"
  | "check"
  | "close"
  | "components"
  | "config"
  | "contact"
  | "dark"
  | "dashboard"
  | "delete"
  | "edit"
  | "email"
  | "eye"
  | "eyeslash"
  | "filter"
  | "fullscreen"
  | "help"
  | "info"
  | "light"
  | "logout"
  | "manager"
  | "menu"
  | "menufold"
  | "menuunfold"
  | "notification"
  | "painting"
  | "password"
  | "profile"
  | "report"
  | "request"
  | "search"
  | "send"
  | "success"
  | "suport"
  | "volumedown"
  | "volumemute"
  | "volumeup"
  | "warning";

export interface IIconRootProps extends SVGProps<SVGSVGElement> {
  icon: IIconDTO;
  datatestid?: string | null;
}

export interface ISVGProps extends SVGProps<SVGSVGElement> {
  datatestid?: string | null;
}
