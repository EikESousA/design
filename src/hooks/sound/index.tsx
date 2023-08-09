import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface ISoundContextData {
  isPlayed: boolean;
  play: () => void;
}

interface ISoundProps {
  children: ReactNode;
}

const SoundContext = createContext<ISoundContextData>({} as ISoundContextData);

export default function SoundProvider({ children }: ISoundProps) {
  const [isPlayed, setIsPlayed] = useState<boolean>(false);

  const play = useCallback(() => {
    setIsPlayed((prev) => !prev);
  }, []);

  const context = useMemo(() => {
    return {
      isPlayed,
      play,
    };
  }, [isPlayed, play]);

  return (
    <SoundContext.Provider value={context}>{children}</SoundContext.Provider>
  );
}

function useSound() {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error("useSound precisa ser usado com o SoundContext!");
  }

  return context;
}

export { SoundProvider, useSound };
