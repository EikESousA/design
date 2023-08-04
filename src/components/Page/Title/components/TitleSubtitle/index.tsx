import { Container } from "./styles";

interface ISubtitleProps {
  subtitle: string;
  datatestid?: string;
}

export default function TitleRoot({ subtitle, datatestid }: ISubtitleProps) {
  return <Container data-testid={datatestid}>{subtitle}</Container>;
}
