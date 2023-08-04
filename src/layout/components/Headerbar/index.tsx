import { Icon } from "@/components";
import { Container } from "./styles";
import { useLayout } from "@/hooks/layout";

export default function Headerbar() {
  const { fold } = useLayout();

  return (
    <Container>
      <section className={fold ? "fold" : "unfold"}>
        <button type="button" onClick={() => {}}>
          <Icon.Root icon="fullscreen" />
        </button>
      </section>
      <section className="company">
        <p>Empresa 1</p>
      </section>
      <section>
        <button type="button" onClick={() => {}}>
          <Icon.Root icon="notification" />
        </button>
        <button type="button" onClick={() => {}}>
          <Icon.Root icon="call" />
        </button>
        <button type="button" onClick={() => {}}>
          <Icon.Root icon="light" />
        </button>
        <button type="button" onClick={() => {}}>
          <Icon.Root icon="volumeup" />
        </button>
      </section>
    </Container>
  );
}
