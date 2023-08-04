import { ISVGProps } from "../dtos/IIconDTO";

export default function Calendar({ datatestid = null, ...rest }: ISVGProps) {
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
      <g clipPath="url(#clip0_461_521)">
        <path d="M11.4181 1.95398H3.98438V2.98523H11.4181V1.95398Z" />
        <path d="M3.46875 4.51092C3.18398 4.51092 2.95312 4.28006 2.95312 3.9953V0.586548C2.95312 0.301782 3.18398 0.0709229 3.46875 0.0709229C3.75352 0.0709229 3.98438 0.301782 3.98438 0.586548V3.9953C3.98438 4.28011 3.75352 4.51092 3.46875 4.51092Z" />
        <path d="M11.9338 4.51092C11.6491 4.51092 11.4182 4.28006 11.4182 3.9953V0.586548C11.4182 0.301782 11.6491 0.0709229 11.9338 0.0709229C12.2186 0.0709229 12.4495 0.301782 12.4495 0.586548V3.9953C12.4495 4.28011 12.2186 4.51092 11.9338 4.51092Z" />
        <path d="M20.4695 4.49362C20.1847 4.49362 19.9539 4.26276 19.9539 3.97799V0.569336C19.9539 0.28457 20.1847 0.0537109 20.4695 0.0537109C20.7542 0.0537109 20.9851 0.28457 20.9851 0.569336V3.97804C20.9851 4.26276 20.7542 4.49362 20.4695 4.49362Z" />
        <path d="M23.4844 1.95398H20.985V2.98523H22.9688V6.17175H1.03125V2.98523H2.95322V1.95398H0.515625C0.230859 1.95398 0 2.18484 0 2.4696V23.4307C0 23.7155 0.230859 23.9463 0.515625 23.9463H23.4844C23.7691 23.9463 24 23.7155 24 23.4307V2.4696C24 2.18479 23.7691 1.95398 23.4844 1.95398ZM22.9688 22.915H1.03125V7.20295H22.9688V22.915Z" />
        <path d="M19.9538 1.95398H12.4495V2.98523H19.9538V1.95398Z" />
        <path d="M19.5602 9.79578H4.36743C4.08267 9.79578 3.85181 10.0266 3.85181 10.3114V19.6226C3.85181 19.9073 4.08267 20.1382 4.36743 20.1382H19.5601C19.8449 20.1382 20.0758 19.9073 20.0758 19.6226V10.3114C20.0758 10.0266 19.8449 9.79578 19.5602 9.79578ZM4.88306 13.9307H7.64999V16.0032H4.88306V13.9307ZM8.68124 13.9307H11.4482V16.0032H8.68124V13.9307ZM11.4482 12.8995H8.68124V10.827H11.4482V12.8995ZM12.4794 10.827H15.2464V12.8995H12.4794V10.827ZM11.4482 17.0344V19.1069H8.68124V17.0344H11.4482ZM12.4794 17.0344H15.2464V19.1069H12.4794V17.0344ZM12.4794 16.0032V13.9307H15.2464V16.0032H12.4794ZM16.2776 13.9307H19.0446V16.0032H16.2776V13.9307ZM19.0446 12.8995H16.2776V10.827H19.0446V12.8995ZM7.64999 10.827V12.8995H4.88306V10.827H7.64999ZM4.88306 17.0344H7.64999V19.1069H4.88306V17.0344ZM16.2776 19.1069V17.0344H19.0446V19.1069H16.2776Z" />
      </g>
      <defs>
        <clipPath id="clip0_461_521">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  );
}
