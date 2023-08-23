import { Card } from "@/components";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Card.Root>
        <div style={{ height: "10rem", width: "30rem" }} />
      </Card.Root>
    </Container>
  );
}
