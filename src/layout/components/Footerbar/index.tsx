/* eslint-disable no-alert */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";
import { useLayout } from "@/hooks/layout";

import modules from "../utils/modules";

import { Container } from "./styles";

interface IIconSelectedDTO {
  icon: IIconDTO;
  name: string;
}

export default function Footerbar() {
  const { toogleOpen } = useLayout();
  const location = useLocation();

  const [icon, setIcon] = useState<IIconSelectedDTO>({
    icon: "dashboard",
    name: "Dashboard",
  });

  useEffect(() => {
    const findLocation = modules.find((item) => item.url === location.pathname);

    if (findLocation) {
      setIcon({
        icon: findLocation.icon,
        name: findLocation.name,
      });
    }
  }, [location.pathname]);

  return (
    <Container>
      <button className="first" type="button" onClick={() => toogleOpen()}>
        <Icon.Root icon="menu" />
      </button>
      <button type="button" onClick={() => alert("Botao apertado")}>
        <Icon.Root icon="profile" />
      </button>
      <button
        className="middle"
        type="button"
        onClick={() => alert("Botao apertado")}
      >
        <div>
          <Icon.Root icon={icon.icon} />
          <p>{icon.name}</p>
        </div>
      </button>
      <button type="button" onClick={() => alert("Botao apertado")}>
        <Icon.Root icon="call" />
      </button>
      <button
        className="last"
        type="button"
        onClick={() => alert("Botao apertado")}
      >
        <Icon.Root icon="notification" />
      </button>
    </Container>
  );
}
