import { IIconRootProps } from "../../dtos/IIconDTO";
import {
  IconAlert,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconAsterisk,
  IconAttachFile,
  IconBug,
  IconCalendar,
  IconCall,
  IconCampaign,
  IconChatbot,
  IconChatshop,
  IconCheck,
  IconClose,
  IconComponents,
  IconConfig,
  IconContact,
  IconDark,
  IconDashboard,
  IconDelete,
  IconEmail,
  IconEdit,
  IconEye,
  IconEyeSlash,
  IconFacebook,
  IconFilter,
  IconFullscreen,
  IconHelp,
  IconInfo,
  IconInstagram,
  IconLight,
  IconLogout,
  IconManager,
  IconMenu,
  IconMenuFold,
  IconMenuUnfold,
  IconNotification,
  IconPainting,
  IconPassword,
  IconProfile,
  IconProfileGroup,
  IconReport,
  IconRequest,
  IconSearch,
  IconSend,
  IconSuccess,
  IconSuport,
  IconTelegram,
  IconVolumeDown,
  IconVolumeMute,
  IconVolumeUp,
  IconWarning,
  IconWhatsapp,
} from "../../svgs";

export default function IconRoot({
  icon,
  datatestid = null,
  ...rest
}: IIconRootProps) {
  switch (icon) {
    case "alert":
      return <IconAlert datatestid={datatestid} {...rest} />;

    case "arrowdown":
      return <IconArrowDown datatestid={datatestid} {...rest} />;

    case "arrowleft":
      return <IconArrowLeft datatestid={datatestid} {...rest} />;

    case "arrowright":
      return <IconArrowRight datatestid={datatestid} {...rest} />;

    case "arrowup":
      return <IconArrowUp datatestid={datatestid} {...rest} />;

    case "asterisk":
      return <IconAsterisk datatestid={datatestid} {...rest} />;

    case "attachfile":
      return <IconAttachFile datatestid={datatestid} {...rest} />;

    case "bug":
      return <IconBug datatestid={datatestid} {...rest} />;

    case "calendar":
      return <IconCalendar datatestid={datatestid} {...rest} />;

    case "call":
      return <IconCall datatestid={datatestid} {...rest} />;

    case "campaign":
      return <IconCampaign datatestid={datatestid} {...rest} />;

    case "chatbot":
      return <IconChatbot datatestid={datatestid} {...rest} />;

    case "chatshop":
      return <IconChatshop datatestid={datatestid} {...rest} />;

    case "check":
      return <IconCheck datatestid={datatestid} {...rest} />;

    case "close":
      return <IconClose datatestid={datatestid} {...rest} />;

    case "components":
      return <IconComponents datatestid={datatestid} {...rest} />;

    case "config":
      return <IconConfig datatestid={datatestid} {...rest} />;

    case "contact":
      return <IconContact datatestid={datatestid} {...rest} />;

    case "dark":
      return <IconDark datatestid={datatestid} {...rest} />;

    case "dashboard":
      return <IconDashboard datatestid={datatestid} {...rest} />;

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

    case "facebook":
      return <IconFacebook datatestid={datatestid} {...rest} />;

    case "filter":
      return <IconFilter datatestid={datatestid} {...rest} />;

    case "fullscreen":
      return <IconFullscreen datatestid={datatestid} {...rest} />;

    case "help":
      return <IconHelp datatestid={datatestid} {...rest} />;

    case "info":
      return <IconInfo datatestid={datatestid} {...rest} />;

    case "instagram":
      return <IconInstagram datatestid={datatestid} {...rest} />;

    case "light":
      return <IconLight datatestid={datatestid} {...rest} />;

    case "logout":
      return <IconLogout datatestid={datatestid} {...rest} />;

    case "manager":
      return <IconManager datatestid={datatestid} {...rest} />;

    case "menu":
      return <IconMenu datatestid={datatestid} {...rest} />;

    case "menufold":
      return <IconMenuFold datatestid={datatestid} {...rest} />;

    case "menuunfold":
      return <IconMenuUnfold datatestid={datatestid} {...rest} />;

    case "notification":
      return <IconNotification datatestid={datatestid} {...rest} />;

    case "painting":
      return <IconPainting datatestid={datatestid} {...rest} />;

    case "password":
      return <IconPassword datatestid={datatestid} {...rest} />;

    case "profile":
      return <IconProfile datatestid={datatestid} {...rest} />;

    case "profilegroup":
      return <IconProfileGroup datatestid={datatestid} {...rest} />;

    case "report":
      return <IconReport datatestid={datatestid} {...rest} />;

    case "request":
      return <IconRequest datatestid={datatestid} {...rest} />;

    case "search":
      return <IconSearch datatestid={datatestid} {...rest} />;

    case "send":
      return <IconSend datatestid={datatestid} {...rest} />;

    case "success":
      return <IconSuccess datatestid={datatestid} {...rest} />;

    case "suport":
      return <IconSuport datatestid={datatestid} {...rest} />;

    case "telegram":
      return <IconTelegram datatestid={datatestid} {...rest} />;

    case "volumedown":
      return <IconVolumeDown datatestid={datatestid} {...rest} />;

    case "volumemute":
      return <IconVolumeMute datatestid={datatestid} {...rest} />;

    case "volumeup":
      return <IconVolumeUp datatestid={datatestid} {...rest} />;

    case "warning":
      return <IconWarning datatestid={datatestid} {...rest} />;

    case "whatsapp":
      return <IconWhatsapp datatestid={datatestid} {...rest} />;

    default:
      return <svg />;
  }
}

export {
  IconAlert,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconAsterisk,
  IconAttachFile,
  IconBug,
  IconCalendar,
  IconCall,
  IconCampaign,
  IconChatbot,
  IconChatshop,
  IconCheck,
  IconClose,
  IconComponents,
  IconConfig,
  IconContact,
  IconDark,
  IconDashboard,
  IconDelete,
  IconEmail,
  IconEdit,
  IconEye,
  IconEyeSlash,
  IconFacebook,
  IconFilter,
  IconFullscreen,
  IconHelp,
  IconInfo,
  IconInstagram,
  IconLight,
  IconLogout,
  IconManager,
  IconMenu,
  IconMenuFold,
  IconMenuUnfold,
  IconNotification,
  IconPainting,
  IconPassword,
  IconProfile,
  IconProfileGroup,
  IconReport,
  IconRequest,
  IconSearch,
  IconSend,
  IconSuccess,
  IconSuport,
  IconTelegram,
  IconVolumeDown,
  IconVolumeMute,
  IconVolumeUp,
  IconWarning,
  IconWhatsapp,
};
