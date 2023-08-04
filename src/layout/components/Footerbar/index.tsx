import { Icon } from "@/components";

import { Container } from "./styles";
import { useLayout } from "@/hooks/layout";

export default function Footerbar() {
  const { toogleFold } = useLayout();

  return (
    <Container>
      <button type="button" onClick={() => toogleFold()}>
        <Icon.Root icon="menu" />
      </button>
      <button className="user" type="button" onClick={() => {}}>
        <Icon.Root icon="profile" />
      </button>
      <button type="button" onClick={() => {}}>
        <Icon.Root icon="notification" />
      </button>
    </Container>
  );
}
