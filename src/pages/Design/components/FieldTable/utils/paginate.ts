/* eslint-disable @typescript-eslint/no-explicit-any */

interface PaginateProps {
  array: any[];
  page_size: number;
  page_number: number;
}

export default function paginate({
  array,
  page_size,
  page_number,
}: PaginateProps) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
