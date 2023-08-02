import { Container } from "./styles";

interface ILoadingRootProps {
  variant?: ILoadingVariantDTO;
  size?: ILoadingSizeDTO;
  datatestid?: string | null;
}

export type ILoadingVariantDTO = "primary" | "secondary" | "danger";
export type ILoadingSizeDTO = "xs" | "sm" | "md" | "lg" | "xl";

export default function LoadingRoot({
  variant = "primary",
  size = "md",
  datatestid = null,
}: ILoadingRootProps) {
  return (
    <Container data-testid={datatestid} className={`${variant} ${size}`} />
  );
}
