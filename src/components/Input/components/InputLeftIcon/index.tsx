import { Icon } from "@/components";

import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

interface IInputLeftIconProps {
  icon: IIconDTO;
  datatestid?: string;
}

export default function InputLeftIcon({
  icon,
  datatestid,
}: IInputLeftIconProps) {
  return (
    <Icon.Root
      icon={icon}
      className="left-icon"
      datatestid={datatestid ? `${datatestid}-left-icon` : null}
    />
  );
}
