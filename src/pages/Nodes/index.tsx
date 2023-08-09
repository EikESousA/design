import { Flow, Menu } from "./components";
import PageProvider from "./hooks";

import { Container } from "./styles";

export default function Nodes() {
  return (
    <PageProvider>
      <Container>
        <Flow />

        <Menu />
      </Container>
    </PageProvider>
  );
}
