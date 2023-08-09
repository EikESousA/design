import { useEffect } from "react";

import { Icon } from "@/components";
import { IToastMessageDTO, useToast } from "@/hooks/toast";

import { Container } from "./styles";

const TIMEOUTCLOSESECONDS = 5 * 1000; // 5 seconds

interface IToastProps {
  message: IToastMessageDTO;
}

export default function Toast({ message }: IToastProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, TIMEOUTCLOSESECONDS);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message]);

  return (
    <Container
      className={`${message.type}`}
      onClick={() => removeToast(message.id)}
    >
      <div className="border">
        <div className="info">
          {message.type === "success" ? <Icon.Root icon="success" /> : null}
          {message.type === "info" ? <Icon.Root icon="info" /> : null}
          {message.type === "warning" ? <Icon.Root icon="alert" /> : null}
          {message.type === "error" ? <Icon.Root icon="warning" /> : null}

          <p>{message.message || "Ocorreu um erro inesperado!"}</p>
          <div className="close">
            <Icon.Root icon="close" />
          </div>
        </div>

        <div className="loading">
          <div className="empty" />
          <div className="complete" />
        </div>
      </div>
    </Container>
  );
}
