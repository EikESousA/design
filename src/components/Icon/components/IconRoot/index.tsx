import {
  IconAlert,
  IconAsterisk,
  IconAttachFile,
  IconChatbot,
  IconCheck,
  IconClose,
  IconDark,
  IconDelete,
  IconEdit,
  IconEmail,
  IconEye,
  IconEyeSlash,
  IconFilter,
  IconInfo,
  IconLight,
  IconMenu,
  IconNotification,
  IconPassword,
  IconProfile,
  IconSearch,
  IconSend,
  IconSuccess,
  IconVolumeDown,
  IconVolumeMute,
  IconVolumeUp,
  IconWarning,
  IconPainting,
  IconComponents,
} from "../../svgs";

import { IIconRootProps } from "../../dtos/IIconDTO";

export default function IconRoot({
  icon,
  datatestid = null,
  ...rest
}: IIconRootProps) {
  switch (icon) {
    case "alert":
      return <IconAlert datatestid={datatestid} {...rest} />;

    case "asterisk":
      return <IconAsterisk datatestid={datatestid} {...rest} />;

    case "attachfile":
      return <IconAttachFile datatestid={datatestid} {...rest} />;

    case "chatbot":
      return <IconChatbot datatestid={datatestid} {...rest} />;

    case "check":
      return <IconCheck datatestid={datatestid} {...rest} />;

    case "close":
      return <IconClose datatestid={datatestid} {...rest} />;

    case "dark":
      return <IconDark datatestid={datatestid} {...rest} />;

    case "delete":
      return <IconDelete datatestid={datatestid} {...rest} />;

    case "edit":
      return <IconEdit datatestid={datatestid} {...rest} />;

    case "email":
      return <IconEmail datatestid={datatestid} {...rest} />;

    case "eye":
      return <IconEye datatestid={datatestid} {...rest} />;

    case "eyeslash":
      return <IconEyeSlash datatestid={datatestid} {...rest} />;

    case "filter":
      return <IconFilter datatestid={datatestid} {...rest} />;

    case "info":
      return <IconInfo datatestid={datatestid} {...rest} />;

    case "light":
      return <IconLight datatestid={datatestid} {...rest} />;

    case "menu":
      return <IconMenu datatestid={datatestid} {...rest} />;

    case "notification":
      return <IconNotification datatestid={datatestid} {...rest} />;

    case "password":
      return <IconPassword datatestid={datatestid} {...rest} />;

    case "profile":
      return <IconProfile datatestid={datatestid} {...rest} />;

    case "search":
      return <IconSearch datatestid={datatestid} {...rest} />;

    case "send":
      return <IconSend datatestid={datatestid} {...rest} />;

    case "success":
      return <IconSuccess datatestid={datatestid} {...rest} />;

    case "volumedown":
      return <IconVolumeDown datatestid={datatestid} {...rest} />;

    case "volumemute":
      return <IconVolumeMute datatestid={datatestid} {...rest} />;

    case "volumeup":
      return <IconVolumeUp datatestid={datatestid} {...rest} />;

    case "warning":
      return <IconWarning datatestid={datatestid} {...rest} />;

    case "painting":
      return <IconPainting datatestid={datatestid} {...rest} />;

    case "components":
      return <IconComponents datatestid={datatestid} {...rest} />;

    default:
      return <></>;
  }
}

export {
  IconAlert,
  IconAsterisk,
  IconAttachFile,
  IconChatbot,
  IconCheck,
  IconClose,
  IconDark,
  IconDelete,
  IconEdit,
  IconEmail,
  IconEye,
  IconEyeSlash,
  IconFilter,
  IconInfo,
  IconLight,
  IconMenu,
  IconNotification,
  IconPassword,
  IconProfile,
  IconSearch,
  IconSend,
  IconSuccess,
  IconVolumeDown,
  IconVolumeMute,
  IconVolumeUp,
  IconWarning,
  IconPainting,
  IconComponents,
};
