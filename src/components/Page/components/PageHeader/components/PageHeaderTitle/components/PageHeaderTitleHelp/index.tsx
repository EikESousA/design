import { Icon } from "@/components";

import { Container } from "./styles";

interface IPageHeaderTitleHelpProps {
  datatestid?: string;
}

export default function PageHeaderTitleHelp({
  datatestid,
}: IPageHeaderTitleHelpProps) {
  return (
    <Container data-testid={datatestid}>
      <Icon.Root icon="help" />
    </Container>
  );
}
