import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
  ReactNode,
} from "react";

interface IThemeContextData {
  light: boolean;
  toogleTheme: () => void;
}

interface IThemeProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export function ThemeProvider({ children }: IThemeProps) {
  const [data, setData] = useState({
    light: true,
  });

  const toogleTheme = useCallback(() => {
    document.documentElement.setAttribute(
      "data-theme",
      !data.light ? "dark" : "light",
    );

    setData({
      light: !data.light,
    });
  }, [data]);

  useEffect(() => {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        setData({ light: false });
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        setData({ light: true });
      }
    }
  }, []);

  const context = useMemo(() => {
    return {
      light: data.light,
      toogleTheme,
    };
  }, [data, toogleTheme]);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used whitin a ThemeProvider");
  }

  return context;
}
