import { Icon } from "@/components";
import { Container } from "./styles";

interface IBadgeRootProps {
  number: number;
  datatestid?: string | null;
}

export default function BadgeRoot({
  number,
  datatestid = null,
}: IBadgeRootProps) {
  if (number > 0) {
    if (number > 9) {
      return (
        <Container data-testid={datatestid}>
          <Icon.Root
            icon="asterisk"
            datatestid={datatestid ? `${datatestid}-icon` : null}
          />
        </Container>
      );
    } else {
      return (
        <Container data-testid={datatestid}>
          <p data-testid={datatestid ? `${datatestid}-p` : null}>{number}</p>
        </Container>
      );
    }
  }

  return <></>;
}
