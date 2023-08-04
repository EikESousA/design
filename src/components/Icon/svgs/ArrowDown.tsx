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
      <path d="M12 14L8 10H16L12 14Z"></path>
    </svg>
  );
}
