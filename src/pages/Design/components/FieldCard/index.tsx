import { Card } from "@/components";

import { FieldContainer, FieldContent } from "../../styles";

export default function FieldCard() {
  return (
    <FieldContainer>
      <legend>Card</legend>
      <FieldContent>
        <Card.Root>
          <div style={{ height: "10rem", width: "30rem" }} />
        </Card.Root>
      </FieldContent>
    </FieldContainer>
  );
}
