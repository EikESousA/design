import { Container } from "./styles";

interface IPageHeaderSubtitleProps {
  subtitle: string;
  datatestid?: string;
}

export default function PageHeaderSubtitle({
  subtitle,
  datatestid,
}: IPageHeaderSubtitleProps) {
  return <Container data-testid={datatestid}>{subtitle}</Container>;
}
