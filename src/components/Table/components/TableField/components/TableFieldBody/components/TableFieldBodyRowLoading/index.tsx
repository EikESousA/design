import { TableHTMLAttributes } from "react";

import { Skeleton } from "@/components";

import { Container } from "./styles";

interface ITableFieldBodyRowProps
  extends TableHTMLAttributes<HTMLTableRowElement> {
  colSpan: number;
}

export default function TableFieldBodyRow({
  colSpan,
  ...rest
}: ITableFieldBodyRowProps) {
  return (
    <>
      <Container {...rest}>
        <td colSpan={colSpan}>
          <Skeleton.Root type="rect" height="3rem" width="100%" />
        </td>
      </Container>
      <Container {...rest}>
        <td colSpan={colSpan}>
          <Skeleton.Root type="rect" height="3rem" width="100%" />
        </td>
      </Container>
      <Container {...rest}>
        <td colSpan={colSpan}>
          <Skeleton.Root type="rect" height="3rem" width="100%" />
        </td>
      </Container>
      <Container {...rest}>
        <td colSpan={colSpan}>
          <Skeleton.Root type="rect" height="3rem" width="100%" />
        </td>
      </Container>
      <Container {...rest}>
        <td colSpan={colSpan}>
          <Skeleton.Root type="rect" height="3rem" width="100%" />
        </td>
      </Container>
    </>
  );
}
