import { ISVGProps } from "../dtos/IIconDTO";

export default function MenuFold({ datatestid = null, ...rest }: ISVGProps) {
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
      <path d="M21 17.9996V19.9996H3V17.9996H21ZM6.94975 3.5498V13.4493L2 8.49955L6.94975 3.5498ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z"></path>
    </svg>
  );
}
