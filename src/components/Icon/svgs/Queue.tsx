import { ISVGProps } from "../dtos/IIconDTO";

export default function Queue({ datatestid = null, ...rest }: ISVGProps) {
  return (
    <svg
      data-testid={datatestid}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g>
        <path
          d="M39 1127 c-34 -26 -39 -54 -39 -237 0 -227 9 -249 102 -250 l46 0 4
109 c3 118 12 141 72 185 26 20 43 21 312 24 l284 3 0 63 c0 53 -4 67 -25 90
l-24 26 -358 0 c-266 -1 -362 -4 -374 -13z"
        />
        <path
          d="M253 875 c-33 -23 -43 -76 -43 -235 0 -219 15 -250 121 -250 l57 0 4
103 c4 123 21 161 88 195 42 21 54 22 303 22 l260 0 -6 67 c-4 57 -9 71 -32
90 l-26 23 -352 0 c-300 0 -356 -2 -374 -15z"
        />
        <path
          d="M486 614 l-26 -27 0 -197 c0 -195 0 -197 25 -224 l24 -26 358 0 c266
1 362 4 374 13 34 26 39 54 39 237 0 183 -5 211 -39 237 -12 9 -108 12 -372
13 l-356 0 -27 -26z"
        />
      </g>
    </svg>
  );
}
