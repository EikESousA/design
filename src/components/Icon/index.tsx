import { IconDelete } from "./svgs";

interface IProps {
  icon: string;
}

export default function Icon({ icon, ...rest }: IProps) {
  switch (icon) {
    case "delete":
      return <IconDelete {...rest} />;

    default:
      return <></>;
  }
}

export { IconDelete };
