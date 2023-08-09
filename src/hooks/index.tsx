import { ReactNode } from "react";

import { LayoutProvider } from "./layout";
import { SoundProvider } from "./sound";
import { ThemeProvider } from "./theme";
import { ToastProvider } from "./toast";
import { TooltipProvider } from "./tooltip";

interface IAppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <TooltipProvider>
          <LayoutProvider>
            <SoundProvider>{children}</SoundProvider>
          </LayoutProvider>
        </TooltipProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
