import { ISVGProps } from "../dtos/IIconDTO";

export default function ArrowDown({ datatestid = null, ...rest }: ISVGProps) {
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
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}
