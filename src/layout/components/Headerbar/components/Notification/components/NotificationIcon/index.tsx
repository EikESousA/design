import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

import { Container } from "./styles";

interface INotificationIconProps {
  icon: IIconDTO;
  img_url: string | null;
  type: "whatsapp" | "telegram" | "instagram" | "facebook" | null;
}

export default function NotificationIcon({
  icon,
  img_url,
  type,
}: INotificationIconProps) {
  return (
    <Container>
      {img_url ? (
        <img src={img_url} alt="Imagem do usuario" />
      ) : (
        <Icon.Root icon={icon} />
      )}

      {type ? <Icon.Root icon={type} className={`type ${type}`} /> : null}
    </Container>
  );
}
