import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

interface ILinkRootProps {
  label: string;
  url: string;
  size?: string;
  disabled?: boolean;
  newTab?: boolean;
  full?: boolean;
  datatestid?: string;
}

export default function LinkRoot({
  label,
  url,
  size = "md",
  disabled = false,
  newTab = false,
  full = false,
  datatestid,
}: ILinkRootProps) {
  const navigate = useNavigate();

  function handleClick() {
    if (newTab) {
      window.open(url, "_blank");
    } else {
      navigate(url);
    }
  }

  return (
    <Container
      disabled={disabled}
      onClick={() => handleClick()}
      className={`${size} ${full ? "full" : ""}`}
      data-testid={datatestid}
      type="button"
    >
      <p data-testid={datatestid ? `${datatestid}-p` : null}>{label}</p>
    </Container>
  );
}
