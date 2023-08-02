import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

interface IButtonDefaultLeftIconProps {
  icon: IIconDTO;
  datatestid?: string;
}

export default function ButtonDefaultLeftIcon({
  icon,
  datatestid,
}: IButtonDefaultLeftIconProps) {
  return (
    <Icon.Root
      icon={icon}
      className="left-icon"
      datatestid={datatestid ? `${datatestid}-button-icon` : null}
    />
  );
}
