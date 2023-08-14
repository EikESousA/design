export interface INotificationDTO {
  id: string;
  type: string;
  connection_type: "whatsapp" | "telegram" | "instagram" | null;
  status: string | null;
  title: string;
  subtitle: string;
  date: string;
  img_url: string | null;
}
