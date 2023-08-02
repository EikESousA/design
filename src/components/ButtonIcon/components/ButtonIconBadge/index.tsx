import { Badge } from "@/components";

interface IButtonIconBadgeProps {
  number: number;
  datatestid?: string | null;
}

export default function ButtonIconBadge({
  number,
  datatestid = null,
}: IButtonIconBadgeProps) {
  return (
    <Badge.Root
      number={number}
      datatestid={datatestid ? `${datatestid}-badge` : null}
    />
  );
}
