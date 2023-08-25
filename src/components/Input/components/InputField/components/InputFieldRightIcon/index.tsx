import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

import { Container } from "./styles";

interface IInputFieldRightIconProps {
  icon: IIconDTO;
  datatestid?: string;
}

export default function InputFieldRightIcon({
  icon,
  datatestid,
}: IInputFieldRightIconProps) {
  return (
    <Container className="right-icon icon">
      <Icon.Root
        icon={icon}
        datatestid={datatestid ? `${datatestid}-right-icon` : null}
      />
    </Container>
  );
}
