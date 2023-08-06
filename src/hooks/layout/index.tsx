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
        .then(() => console.log("Document Exited from Full screen mode"))
        .catch((err) => console.error(err));
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
