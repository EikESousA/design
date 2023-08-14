import { Container } from "./styles";

interface IBadgeRootProps {
  horizontal?: boolean;
  datatestid?: string | null;
}

export default function DividerRoot({
  horizontal = true,
  datatestid = null,
}: IBadgeRootProps) {
  return (
    <Container
      className={horizontal ? "horizontal" : "vertical"}
      data-testid={datatestid}
    />
  );
}
