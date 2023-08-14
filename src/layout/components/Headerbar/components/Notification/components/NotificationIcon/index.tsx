import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

import { Container } from "./styles";

interface INotificationIconProps {
  icon: IIconDTO;
  type: "whatsapp" | "telegram" | "instagram" | "facebook" | null;
}

export default function NotificationIcon({
  icon,
  type,
}: INotificationIconProps) {
  return (
    <Container>
      <Icon.Root icon={icon} />
      {type ? <Icon.Root icon={type} className={`type ${type}`} /> : null}
    </Container>
  );
}
