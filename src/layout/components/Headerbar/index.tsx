import { Icon } from "@/components";
import { Container } from "./styles";
import { useLayout } from "@/hooks/layout";
import { useTheme } from "@/hooks/theme";

export default function Headerbar() {
  const { fold, toogleFull } = useLayout();
  const { light, toogleTheme } = useTheme();

  return (
    <Container>
      <section className={fold ? "fold" : "unfold"}>
        <button type="button" onClick={() => toogleFull()}>
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
        <button type="button" onClick={() => toogleTheme()}>
          <Icon.Root icon={light ? "light" : "dark"} />
        </button>
        <button type="button" onClick={() => {}}>
          <Icon.Root icon="volumeup" />
        </button>
      </section>
    </Container>
  );
}
