import { ISVGProps } from "../dtos/IIconDTO";

export default function Tag({ datatestid = null, ...rest }: ISVGProps) {
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
      <g clipPath="url(#clip0_278_8121)">
        <path d="M2 7.17704V19C2.00159 20.3256 2.52888 21.5965 3.46622 22.5338C4.40356 23.4712 5.67441 23.9985 7 24H17C18.3256 23.9985 19.5964 23.4712 20.5338 22.5338C21.4711 21.5965 21.9984 20.3256 22 19V7.17704C21.9999 6.64212 21.8568 6.11695 21.5855 5.65594C21.3142 5.19492 20.9246 4.81483 20.457 4.55504L12.486 0.126041C12.3374 0.043381 12.1701 0 12 0C11.8299 0 11.6626 0.043381 11.514 0.126041L3.543 4.55504C3.0754 4.81483 2.68578 5.19492 2.41448 5.65594C2.14318 6.11695 2.00008 6.64212 2 7.17704ZM12 5.50004C12.2967 5.50004 12.5867 5.58801 12.8334 5.75284C13.08 5.91766 13.2723 6.15193 13.3858 6.42602C13.4994 6.70011 13.5291 7.00171 13.4712 7.29268C13.4133 7.58365 13.2704 7.85092 13.0607 8.0607C12.8509 8.27048 12.5836 8.41334 12.2926 8.47122C12.0017 8.5291 11.7001 8.49939 11.426 8.38586C11.1519 8.27233 10.9176 8.08007 10.7528 7.8334C10.588 7.58672 10.5 7.29671 10.5 7.00004C10.5 6.60222 10.658 6.22069 10.9393 5.93938C11.2206 5.65808 11.6022 5.50004 12 5.50004Z" />
      </g>
    </svg>
  );
}
