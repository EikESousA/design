import { ISVGProps } from "../dtos/IIconDTO";

export default function Request({ datatestid = null, ...rest }: ISVGProps) {
  return (
    <svg
      data-testid={datatestid}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M8.15069 2.09038C8.28396 1.83871 8.18791 1.52666 7.93624 1.3934C7.68452 1.26013 7.37252 1.35623 7.2393 1.60785L3.75049 8.19754H4.91735L8.15069 2.09038Z" />
      <path d="M16.7566 1.60762C16.6234 1.35594 16.3112 1.2599 16.0596 1.39316C15.808 1.52643 15.7119 1.83848 15.8452 2.09015L19.0785 8.1973H20.2453L16.7566 1.60762Z" />
      <path d="M22.8444 8.19739H1.15561C0.518437 8.19739 0 8.71578 0 9.35295V10.9696C0 11.6068 0.518437 12.1252 1.15561 12.1252H1.23281L3.67331 22.2717C3.72905 22.5034 3.93633 22.6668 4.17464 22.6668H19.8206C20.0588 22.6668 20.266 22.5036 20.3218 22.272L22.768 12.1252H22.8443C23.4816 12.1252 23.9999 11.6068 23.9999 10.9696V9.35295C24 8.71578 23.4816 8.19739 22.8444 8.19739ZM12.5166 21.6355V17.3937H15.9939L15.4643 21.6355H12.5166ZM8.53762 21.6355L8.00756 17.3937H11.4854V21.6355H8.53762ZM11.4854 12.1252V16.3625H7.87866L7.34916 12.1252H11.4854ZM12.5166 16.3625V12.1252H16.6517L16.1227 16.3625H12.5166ZM6.30989 12.1252L6.83939 16.3625H3.31266L2.2935 12.1252H6.30989ZM3.56072 17.3937H6.9683L7.49836 21.6355H4.581L3.56072 17.3937ZM19.4145 21.6355H16.5036L17.0332 17.3937H20.4371L19.4145 21.6355ZM20.6857 16.3625H17.1619L17.691 12.1252H21.7073L20.6857 16.3625ZM22.9687 10.9697C22.9687 11.0382 22.913 11.094 22.8444 11.094H1.15561C1.08703 11.094 1.03125 11.0382 1.03125 10.9697V9.35295C1.03125 9.28437 1.08703 9.22859 1.15561 9.22859H22.8444C22.913 9.22859 22.9687 9.28437 22.9687 9.35295V10.9697H22.9687Z" />
    </svg>
  );
}