import { ISVGProps } from "../dtos/IIconDTO";

export default function Config({ datatestid = null, ...rest }: ISVGProps) {
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
      <g clipPath="url(#clip0_461_555)">
        <path d="M13.3173 22H10.6828C10.4642 22 10.2805 21.836 10.2558 21.6188L10.0398 19.7178C9.2927 19.5333 8.57945 19.2445 7.91246 18.8564L6.43184 20.0348C6.26082 20.1709 6.01492 20.157 5.86039 20.0025L3.9975 18.1396C3.84297 17.9851 3.82906 17.7392 3.96516 17.5682L5.10152 16.1405C4.67148 15.4571 4.34867 14.7205 4.13879 13.9439L2.38117 13.7442C2.16402 13.7195 2 13.5358 2 13.3173V10.6828C2 10.4642 2.16402 10.2805 2.38117 10.2558L4.04457 10.0668C4.2268 9.23074 4.53781 8.43598 4.97203 7.69684L3.96516 6.43176C3.82906 6.26078 3.84297 6.01488 3.9975 5.86035L5.86039 3.9975C6.01492 3.84297 6.26086 3.82902 6.43184 3.96516L7.64516 4.9309C8.39961 4.45187 9.21742 4.10492 10.0836 3.89641L10.2558 2.38117C10.2805 2.16402 10.4642 2 10.6827 2H13.3172C13.5358 2 13.7195 2.16402 13.7442 2.38117L13.9164 3.89637C14.7826 4.10488 15.6004 4.45187 16.3548 4.9309L17.5682 3.96516C17.7392 3.82906 17.985 3.84297 18.1396 3.9975L20.0025 5.86035C20.157 6.01488 20.1709 6.26078 20.0348 6.43176L19.0279 7.69684C19.4622 8.43598 19.7732 9.2307 19.9554 10.0668L21.6188 10.2558C21.8359 10.2805 22 10.4642 22 10.6828V13.3173C22 13.5358 21.8359 13.7195 21.6188 13.7442L19.8612 13.9439C19.6513 14.7205 19.3285 15.4571 18.8984 16.1405L20.0348 17.5682C20.1709 17.7392 20.157 17.9851 20.0025 18.1396L18.1396 20.0025C17.985 20.157 17.7392 20.171 17.5682 20.0348L16.0875 18.8564C15.4205 19.2445 14.7073 19.5333 13.9602 19.7178L13.7442 21.6188C13.7195 21.836 13.5358 22 13.3173 22ZM11.0664 21.1406H12.9336L13.1407 19.3177C13.1617 19.1332 13.2989 18.983 13.4808 18.9454C14.3378 18.7685 15.1487 18.4405 15.8908 17.9705C16.0454 17.8727 16.245 17.8834 16.3883 17.9974L17.8032 19.1236L19.1236 17.8032L18.0324 16.4323C17.9148 16.2847 17.9074 16.0777 18.014 15.922C18.5296 15.169 18.8943 14.3387 19.098 13.4542C19.1389 13.2767 19.2872 13.1442 19.4682 13.1237L21.1406 12.9336V11.0664L19.5463 10.8852C19.3573 10.8638 19.2049 10.7205 19.1717 10.5332C19.0049 9.59125 18.6585 8.70398 18.1423 7.89609C18.0434 7.74133 18.0538 7.54082 18.1681 7.39715L19.1235 6.1968L17.8032 4.87645L16.6456 5.79777C16.4974 5.9157 16.2895 5.92273 16.1338 5.81516C15.3162 5.25047 14.4097 4.86555 13.4396 4.67113C13.2565 4.63445 13.1181 4.48379 13.097 4.29836L12.9336 2.85938H11.0664L10.9029 4.29832C10.8818 4.48379 10.7434 4.63441 10.5604 4.67109C9.5902 4.86555 8.68371 5.25047 7.86613 5.81512C7.71043 5.9227 7.5025 5.91566 7.35434 5.79773L6.19676 4.87641L4.87641 6.19676L5.8318 7.39711C5.94617 7.54082 5.95656 7.74129 5.8577 7.89605C5.34141 8.70398 4.99504 9.59121 4.82824 10.5332C4.79508 10.7205 4.6427 10.8637 4.45367 10.8852L2.85938 11.0664V12.9336L4.53176 13.1237C4.71273 13.1442 4.86109 13.2767 4.90199 13.4542C5.1057 14.3388 5.47039 15.169 5.98594 15.922C6.09254 16.0777 6.08512 16.2847 5.96758 16.4323L4.87641 17.8032L6.19676 19.1236L7.61168 17.9974C7.75492 17.8834 7.95461 17.8727 8.10914 17.9705C8.85129 18.4405 9.66215 18.7685 10.5192 18.9454C10.7011 18.983 10.8382 19.1332 10.8592 19.3177L11.0664 21.1406Z" />
        <path d="M12 17.5729C8.82368 17.5729 6.2395 14.9887 6.2395 11.8123C6.2395 8.63602 8.82364 6.05188 12 6.05188C15.1764 6.05188 17.7605 8.63602 17.7605 11.8123C17.7605 14.9887 15.1764 17.5729 12 17.5729ZM12 6.91129C9.29751 6.91129 7.09888 9.10993 7.09888 11.8124C7.09888 14.5148 9.29751 16.7135 12 16.7135C14.7025 16.7135 16.9011 14.5148 16.9011 11.8123C16.9011 9.10985 14.7025 6.91129 12 6.91129Z" />
        <path d="M11.9999 15.1902C10.1373 15.1902 8.62207 13.6749 8.62207 11.8124C8.62207 9.94984 10.1373 8.43457 11.9999 8.43457C13.8625 8.43457 15.3778 9.94984 15.3778 11.8124C15.3778 13.675 13.8625 15.1902 11.9999 15.1902ZM11.9999 9.29398C10.6112 9.29398 9.48145 10.4238 9.48145 11.8124C9.48145 13.2011 10.6112 14.3309 11.9999 14.3309C13.3886 14.3309 14.5184 13.2011 14.5184 11.8124C14.5184 10.4237 13.3886 9.29398 11.9999 9.29398Z" />
      </g>
      <defs>
        <clipPath id="clip0_461_555">
          <rect width="20" height="20" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </svg>
  );
}
