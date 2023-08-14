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
      viewBox="0 0 694 694"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g
        transform="translate(0.000000,694.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M3270 6919 c-729 -45 -1396 -301 -1960 -754 -956 -766 -1436 -1984
-1260 -3199 56 -381 188 -790 363 -1116 484 -907 1333 -1549 2332 -1765 381
-83 847 -97 1245 -39 1009 147 1919 759 2453 1648 199 331 348 719 421 1092
78 399 87 828 25 1214 -176 1109 -869 2059 -1864 2557 -443 222 -858 332
-1375 363 -180 11 -196 11 -380 -1z m550 -244 c696 -80 1339 -370 1842 -831
829 -758 1195 -1898 972 -3018 -118 -589 -419 -1160 -843 -1598 -52 -54 -97
-98 -101 -98 -4 0 -10 31 -14 69 -28 286 -179 595 -408 837 -336 355 -820 587
-1413 676 -123 18 -627 18 -750 0 -785 -118 -1394 -497 -1674 -1042 -85 -167
-133 -322 -147 -477 -4 -40 -11 -73 -16 -73 -4 0 -45 37 -91 83 -358 359 -638
829 -793 1332 -42 135 -87 340 -111 500 -26 175 -26 686 0 870 74 518 240 955
525 1375 124 183 219 297 387 466 522 525 1221 856 1965 933 147 15 523 12
670 -4z"
        />
        <path
          d="M3265 5724 c-635 -115 -1095 -658 -1095 -1294 0 -363 139 -691 400
-944 250 -242 561 -368 910 -368 349 0 660 126 910 368 261 253 400 581 400
944 0 640 -463 1183 -1104 1295 -110 19 -313 18 -421 -1z"
        />
      </g>
    </svg>
  );
}
