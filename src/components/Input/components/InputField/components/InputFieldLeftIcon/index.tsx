import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

import { Container } from "./styles";

interface IInputFieldLeftIconProps {
  icon: IIconDTO;
  datatestid?: string;
}

export default function InputFieldLeftIcon({
  icon,
  datatestid,
}: IInputFieldLeftIconProps) {
  return (
    <Container className="left-icon icon">
      <Icon.Root
        icon={icon}
        datatestid={datatestid ? `${datatestid}-left-icon` : null}
      />
    </Container>
  );
}
