import { ReactNode } from "react";
import { ThemeProvider } from "./theme";

interface IAppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
