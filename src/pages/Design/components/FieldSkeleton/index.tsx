import { Skeleton } from "@/components";

import { FieldContainer, FieldContent } from "../../styles";

export default function FieldSkeleton() {
  return (
    <FieldContainer>
      <legend>Card</legend>
      <FieldContent>
        <Skeleton.Root type="circle" />
      </FieldContent>
    </FieldContainer>
  );
}
