import { ISVGProps } from "../dtos/IIconDTO";

export default function IA({ datatestid = null, ...rest }: ISVGProps) {
  return (
    <svg
      data-testid={datatestid}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 75 75"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M14.5015 42.1132H1.6369C0.732887 42.1132 0 41.3803 0 40.4763C0 39.5722 0.732887 38.8394 1.6369 38.8394H14.5015C15.4055 38.8394 16.1384 39.5722 16.1384 40.4763C16.1384 41.3803 15.4055 42.1132 14.5015 42.1132Z" />
      <path d="M17.0375 33.1845H6.10077C5.19675 33.1845 4.46387 32.4517 4.46387 31.5476V18.1548H7.73768V29.9107H17.0375V33.1845Z" />
      <path d="M68.8983 33.1845H58.3555V29.9107H67.2614V18.1548H70.5352V31.5476C70.5352 32.4517 69.8023 33.1845 68.8983 33.1845Z" />
      <path d="M7.73768 62.7978H4.46387V49.405C4.46387 48.501 5.19675 47.7681 6.10077 47.7681H16.7296V51.0419H7.73768V62.7978Z" />
      <path d="M70.5352 62.7978H67.2614V51.0419H58.3555V47.7681H68.8983C69.8023 47.7681 70.5352 48.501 70.5352 49.405V62.7978Z" />
      <path d="M73.3631 42.1132H60.3644C59.4604 42.1132 58.7275 41.3803 58.7275 40.4763C58.7275 39.5722 59.4604 38.8394 60.3644 38.8394H73.3631C74.2671 38.8394 75 39.5722 75 40.4763C75 41.3803 74.2671 42.1132 73.3631 42.1132Z" />
      <path d="M6.10119 19.7917C2.73705 19.7917 0 17.0547 0 13.6905C0 10.3264 2.73705 7.58936 6.10119 7.58936C9.46533 7.58936 12.2024 10.3264 12.2024 13.6905C12.2024 17.0547 9.46533 19.7917 6.10119 19.7917ZM6.10119 10.8632C4.54211 10.8632 3.27381 12.1315 3.27381 13.6905C3.27381 15.2496 4.54211 16.5179 6.10119 16.5179C7.66027 16.5179 8.92857 15.2496 8.92857 13.6905C8.92857 12.1315 7.66027 10.8632 6.10119 10.8632Z" />
      <path d="M68.899 19.7917C65.5349 19.7917 62.7979 17.0547 62.7979 13.6905C62.7979 10.3264 65.5349 7.58936 68.899 7.58936C72.2632 7.58936 75.0002 10.3264 75.0002 13.6905C75.0002 17.0547 72.2632 19.7917 68.899 19.7917ZM68.899 10.8632C67.34 10.8632 66.0717 12.1315 66.0717 13.6905C66.0717 15.2496 67.34 16.5179 68.899 16.5179C70.4581 16.5179 71.7264 15.2496 71.7264 13.6905C71.7264 12.1315 70.4581 10.8632 68.899 10.8632Z" />
      <path d="M68.899 73.363C65.5349 73.363 62.7979 70.626 62.7979 67.2618C62.7979 63.8977 65.5349 61.1606 68.899 61.1606C72.2632 61.1606 75.0002 63.8977 75.0002 67.2618C75.0002 70.626 72.2632 73.363 68.899 73.363ZM68.899 64.4345C67.34 64.4345 66.0717 65.7028 66.0717 67.2618C66.0717 68.8209 67.34 70.0892 68.899 70.0892C70.4581 70.0892 71.7264 68.8209 71.7264 67.2618C71.7264 65.7028 70.4581 64.4345 68.899 64.4345Z" />
      <path d="M6.10119 73.363C2.73705 73.363 0 70.626 0 67.2618C0 63.8977 2.73705 61.1606 6.10119 61.1606C9.46533 61.1606 12.2024 63.8977 12.2024 67.2618C12.2024 70.626 9.46533 73.363 6.10119 73.363ZM6.10119 64.4345C4.54211 64.4345 3.27381 65.7028 3.27381 67.2618C3.27381 68.8209 4.54211 70.0892 6.10119 70.0892C7.66027 70.0892 8.92857 68.8209 8.92857 67.2618C8.92857 65.7028 7.66027 64.4345 6.10119 64.4345Z" />
      <path d="M28.5721 42.113C26.2196 42.07 26.5773 38.4514 28.8922 38.8719C30.7883 39.2003 30.4951 42.1595 28.5721 42.113Z" />
      <path d="M37.4999 42.113C35.5771 42.1603 35.2834 39.1991 37.1799 38.8719C39.4956 38.4513 39.8518 42.0707 37.4999 42.113Z" />
      <path d="M46.4284 42.113C44.0759 42.0707 44.4339 38.4511 46.7485 38.8719C48.6445 39.2004 48.3518 42.1596 46.4284 42.113Z" />
      <path d="M37.5002 19.1603C36.5962 19.1603 35.8633 18.4274 35.8633 17.5234V4.7619C35.8633 3.85789 36.5962 3.125 37.5002 3.125C38.4042 3.125 39.1371 3.85789 39.1371 4.7619V17.5234C39.1371 18.4274 38.4042 19.1603 37.5002 19.1603Z" />
      <path d="M46.4289 21.0549C45.5249 21.0549 44.792 20.322 44.792 19.418V13.6906C44.792 12.7866 45.5249 12.0537 46.4289 12.0537C47.3329 12.0537 48.0658 12.7866 48.0658 13.6906V19.4181C48.0658 20.3222 47.3329 21.0549 46.4289 21.0549Z" />
      <path d="M28.5715 21.0549C27.6675 21.0549 26.9346 20.322 26.9346 19.418V13.6906C26.9346 12.7866 27.6675 12.0537 28.5715 12.0537C29.4755 12.0537 30.2084 12.7866 30.2084 13.6906V19.4181C30.2084 20.3222 29.4755 21.0549 28.5715 21.0549Z" />
      <path d="M37.5003 73.3633C36.9728 73.3633 36.4777 73.1091 36.1701 72.6804L29.0963 62.8184C19.7712 59.3105 13.542 50.3978 13.542 40.4764C13.542 27.2657 24.2896 16.5181 37.5003 16.5181C50.711 16.5181 61.4587 27.2657 61.4587 40.4764C61.4587 50.3978 55.2295 59.3105 45.9042 62.8185L38.8304 72.6806C38.5229 73.1091 38.0279 73.3633 37.5003 73.3633ZM37.5003 19.7919C26.0948 19.7919 16.8158 29.0709 16.8158 40.4764C16.8158 49.1846 22.3853 56.994 30.6747 59.9093C30.9914 60.0206 31.2661 60.2267 31.4618 60.4995L37.5003 68.9179L43.5389 60.4993C43.7346 60.2265 44.0093 60.0206 44.3259 59.9091C52.6154 56.994 58.1848 49.1846 58.1848 40.4764C58.1848 29.0709 48.9058 19.7919 37.5003 19.7919Z" />
    </svg>
  );
}
