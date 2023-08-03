import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

interface IButtonDefaultRightIconProps {
  icon: IIconDTO;
  datatestid?: string;
}

export default function ButtonDefaultRightIcon({
  icon,
  datatestid,
}: IButtonDefaultRightIconProps) {
  return (
    <Icon.Root
      icon={icon}
      className="right-icon"
      datatestid={datatestid ? `${datatestid}-right-icon` : null}
    />
  );
}
