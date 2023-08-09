import { ISVGProps } from "../dtos/IIconDTO";

export default function ArrowUp({ datatestid = null, ...rest }: ISVGProps) {
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
      <path d="M14 12L10 16V8L14 12Z" />
    </svg>
  );
}
