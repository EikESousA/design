import { DatasProvider } from "./datas";

interface IAppProviderProps {
  children: JSX.Element;
}

export default function PageProvider({ children }: IAppProviderProps) {
  return <DatasProvider>{children}</DatasProvider>;
}
