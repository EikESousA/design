/* eslint-disable @typescript-eslint/no-explicit-any */

interface PaginateProps {
  array: any[];
  search: string;
  object: string;
}

export default function filter({ array, search, object }: PaginateProps) {
  return array.filter(
    (item) =>
      item[object].toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0,
  );
}
