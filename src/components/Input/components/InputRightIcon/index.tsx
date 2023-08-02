import { Icon } from "@/components";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

interface IInputRightIconProps {
  icon: IIconDTO;
  datatestid?: string;
}

export default function InputRightIcon({
  icon,
  datatestid,
}: IInputRightIconProps) {
  return (
    <Icon.Root
      icon={icon}
      className="right-icon"
      datatestid={datatestid ? `${datatestid}-button-icon` : null}
    />
  );
}
