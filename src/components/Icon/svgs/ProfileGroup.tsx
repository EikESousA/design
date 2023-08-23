import { ISVGProps } from "../dtos/IIconDTO";

export default function ProfileGroup({
  datatestid = null,
  ...rest
}: ISVGProps) {
  return (
    <svg
      data-testid={datatestid}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 260 280"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g
        transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M1090 2635 c-612 -115 -1024 -702 -925 -1315 68 -414 351 -754 752
   -899 165 -61 400 -81 573 -52 454 79 817 418 926 866 76 312 13 651 -169 920
   -108 159 -320 333 -494 405 -147 62 -251 82 -428 86 -110 2 -184 -1 -235 -11z
   m410 -81 c728 -138 1097 -968 714 -1605 -27 -45 -55 -84 -61 -86 -7 -3 -27 7
   -44 21 -63 53 -81 58 -130 33 -63 -32 -186 -31 -248 1 l-43 23 -42 -25 c-55
   -32 -60 -40 -75 -107 -6 -31 -26 -78 -43 -105 -20 -32 -26 -50 -18 -52 21 -7
   112 -86 138 -119 19 -26 21 -34 10 -38 -8 -3 -38 19 -73 52 -89 86 -102 91
   -167 62 -74 -33 -166 -33 -237 0 -51 24 -52 25 -84 7 -18 -10 -58 -44 -89 -74
   -41 -39 -61 -53 -68 -46 -14 14 65 103 118 135 20 12 38 23 40 24 1 1 -13 28
   -32 60 -20 31 -38 78 -42 104 -8 55 -15 65 -69 97 l-42 24 -57 -26 c-48 -22
   -68 -26 -124 -22 -42 2 -83 12 -111 25 -41 21 -46 21 -75 6 -17 -9 -44 -26
   -59 -39 -16 -13 -32 -24 -37 -24 -13 0 -86 119 -125 204 -83 179 -115 421 -81
   614 77 439 403 780 836 872 110 24 308 26 420 4z"
        />
        <path
          d="M1219 1677 c-85 -32 -142 -99 -159 -186 -45 -238 247 -387 416 -213
   103 106 79 297 -48 375 -56 35 -151 46 -209 24z"
        />
        <path
          d="M653 1394 c-24 -9 -60 -35 -86 -63 -172 -184 15 -475 253 -396 140
   47 208 212 141 343 -56 108 -188 158 -308 116z"
        />
        <path
          d="M1771 1396 c-54 -19 -112 -75 -139 -134 -76 -166 67 -360 250 -339
   155 19 251 168 206 321 -16 55 -99 138 -154 154 -51 15 -118 14 -163 -2z"
        />
        <path
          d="M1072 1185 c-36 -25 -52 -42 -52 -58 0 -27 -33 -99 -60 -134 l-20
   -25 40 -29 c47 -34 50 -35 50 -11 0 24 37 91 69 125 78 84 224 108 327 55 61
   -32 108 -85 132 -150 l18 -47 41 27 41 27 -29 42 c-16 23 -35 64 -42 92 -13
   50 -33 73 -91 103 -28 14 -33 14 -80 -8 -71 -33 -162 -33 -234 1 -30 14 -55
   25 -56 25 -1 0 -25 -16 -54 -35z"
        />
        <path
          d="M1247 1099 c-56 -13 -89 -33 -129 -77 -90 -99 -81 -253 19 -341 57
   -51 98 -64 183 -59 81 4 135 35 184 106 25 35 31 55 34 112 5 83 -8 124 -53
   178 -58 67 -156 101 -238 81z"
        />
      </g>
    </svg>
  );
}