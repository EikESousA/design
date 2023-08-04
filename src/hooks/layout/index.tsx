import Layout from "@/layout";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface ILayoutContextData {
  fold: boolean;
  toogleFold: () => void;
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

  const context = useMemo(() => {
    return {
      fold,
      toogleFold,
    };
  }, [fold, toogleFold]);

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
