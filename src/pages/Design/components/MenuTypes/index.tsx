import { useNavigate, useParams } from "react-router-dom";

import { Icon } from "@/components";
import { Container } from "./styles";

interface IProps {
  openComponents: boolean;
  setOpenComponents: (value: boolean) => void;
}

export default function MenuTypes({
  openComponents,
  setOpenComponents,
}: IProps) {
  const navigate = useNavigate();
  const { type } = useParams();

  return (
    <Container className={type}>
      <button
        className={`menu ${openComponents ? "selected" : ""}`}
        type="button"
        aria-label="button"
        onClick={() => setOpenComponents(!openComponents)}
      >
        <Icon.Root icon="menu" />
      </button>
      <button
        className={`components ${type === "components" ? "selected" : ""}`}
        type="button"
        aria-label="button"
        onClick={() => navigate(`/design/components`)}
        disabled={type === "components"}
      >
        <Icon.Root icon="components" />
      </button>
      <button
        className={`theme ${type === "theme" ? "selected" : ""}`}
        type="button"
        aria-label="button"
        onClick={() => navigate(`/design/theme`)}
        disabled={type === "theme"}
      >
        <Icon.Root icon="painting" />
      </button>
      <button
        className={`volume ${type === "volume" ? "selected" : ""}`}
        type="button"
        aria-label="button"
        onClick={() => navigate(`/design/volume`)}
        disabled={type === "volume"}
      >
        <Icon.Root icon="volumeup" />
      </button>
    </Container>
  );
}
