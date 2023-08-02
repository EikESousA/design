import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

import { v4 as uuidv4 } from "uuid";

import { Toasts } from "./components";

interface IToastContextData {
  addToast: ({ type, message }: IAddToastProps) => void;
  removeToast: (id: string) => void;
}

interface IToastProps {
  children: ReactNode;
}

interface IAddToastProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
}

export interface IToastMessageDTO {
  id: string;
  type: "success" | "info" | "warning" | "error";
  message: string;
}

const ToastContext = createContext({} as IToastContextData);

export function ToastProvider({ children }: IToastProps) {
  const [messages, setMessages] = useState<IToastMessageDTO[]>([]);

  const addToast = useCallback(({ type, message }: IAddToastProps) => {
    const id = uuidv4();

    const toast = {
      id,
      type,
      message,
    };

    setMessages((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const context = useMemo(() => {
    return {
      addToast,
      removeToast,
    };
  }, [addToast, removeToast]);

  return (
    <ToastContext.Provider value={context}>
      {children}
      <Toasts messages={messages} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
