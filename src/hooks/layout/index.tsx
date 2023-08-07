/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

import Layout from "@/layout";

interface ILayoutContextData {
  fold: boolean;
  toogleFold: () => void;
  toogleFull: () => void;
}

interface ILayoutProps {
  children: ReactNode;
}

const LayoutContext = createContext<ILayoutContextData>(
  {} as ILayoutContextData,
);

export default function LayoutProvider({ children }: ILayoutProps) {
  const [fold, setFold] = useState<boolean>(false);

  const toogleFold = useCallback(() => {
    setFold((prev) => !prev);
  }, []);

  const toogleFull = useCallback(() => {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => {})
        .catch(() => {});
    } else {
      document.documentElement.requestFullscreen();
    }
  }, []);

  const context = useMemo(() => {
    return {
      fold,
      toogleFold,
      toogleFull,
    };
  }, [fold, toogleFold, toogleFull]);

  return (
    <LayoutContext.Provider value={context}>
      <Layout>{children}</Layout>
    </LayoutContext.Provider>
  );
}

function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout precisa ser usado com o LayoutContext!");
  }

  return context;
}

export { LayoutProvider, useLayout };
