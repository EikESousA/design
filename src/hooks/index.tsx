import { ReactNode } from "react";
import { ThemeProvider } from "./theme";
import LayoutProvider from "./layout";

interface IAppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <ThemeProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </ThemeProvider>
  );
}
