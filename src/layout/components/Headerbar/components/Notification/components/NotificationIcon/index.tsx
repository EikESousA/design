import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

import { Container } from "./styles";

interface INotificationIconProps {
  icon: IIconDTO;
}

export default function NotificationIcon({ icon }: INotificationIconProps) {
  return (
    <Container>
      <Icon.Root icon={icon} />
    </Container>
  );
}
