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
  mode_dark: boolean;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

interface IThemeProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: IThemeProps) {
  const [data, setData] = useState({
    mode_dark: false,
  });

  const toogleTheme = useCallback((mode_dark: boolean) => {
    setData({
      mode_dark,
    });

    document.documentElement.setAttribute(
      "data-theme",
      mode_dark ? "dark" : "light",
    );
  }, []);

  useEffect(() => {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        toogleTheme(true);
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        toogleTheme(false);
      }
    }
  }, [toogleTheme]);

  const context = useMemo(() => {
    return {
      mode_dark: data.mode_dark,
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
