import { ISVGProps } from "../dtos/IIconDTO";

export default function ArrowRight({ datatestid = null, ...rest }: ISVGProps) {
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
      <path fill="none" d="M24 0v24H0V0h24z" opacity=".87" />
      <path d="M14 7l-5 5 5 5V7z" />
    </svg>
  );
}
