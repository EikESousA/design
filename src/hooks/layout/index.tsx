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
  open: boolean;
  toogleFold: () => void;
  toogleFull: () => void;
  toogleOpen: (openUpdated?: boolean) => void;
}

interface ILayoutProps {
  children: ReactNode;
}

const LayoutContext = createContext<ILayoutContextData>(
  {} as ILayoutContextData,
);

export default function LayoutProvider({ children }: ILayoutProps) {
  const [fold, setFold] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const toogleFold = useCallback(() => {
    setFold((prev) => !prev);
  }, []);

  const toogleFull = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }, []);

  const toogleOpen = useCallback((openUpdated?: boolean) => {
    if (openUpdated !== undefined) {
      setOpen(openUpdated);
    } else {
      setOpen((prev) => !prev);
    }
  }, []);

  const context = useMemo(() => {
    return {
      fold,
      open,
      toogleFold,
      toogleFull,
      toogleOpen,
    };
  }, [fold, open, toogleFold, toogleFull, toogleOpen]);

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
