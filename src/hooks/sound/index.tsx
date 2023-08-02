import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
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

  return (
    <SoundContext.Provider
      value={{
        isPlayed,
        play,
      }}
    >
      {children}
    </SoundContext.Provider>
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
