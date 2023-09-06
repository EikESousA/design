/* eslint-disable no-constant-condition */
import { useMemo, HtmlHTMLAttributes, useEffect } from "react";

import { Icon, Skeleton } from "@/components";

import { Container } from "./styles";

interface ITablePaginationProps extends HtmlHTMLAttributes<HTMLDivElement> {
  page: number;
  setPage: (value: number) => void;
  pages: number;
  loading?: boolean;
}

export default function TablePagination({
  page,
  setPage,
  pages,
  loading = false,
  ...rest
}: ITablePaginationProps) {
  const pagesShow = useMemo(() => {
    let count = 1;

    const pagesShowUpdated = [page < pages ? page : pages];

    while (true) {
      if (pagesShowUpdated.length >= 5) {
        break;
      }

      if (page - count <= 0 && page + count > pages) {
        break;
      }

      if (
        page - count > 0 &&
        pagesShowUpdated.length < 5 &&
        !pagesShowUpdated.includes(page - count)
      ) {
        pagesShowUpdated.unshift(page - count);
      }

      if (
        page + count <= pages &&
        pagesShowUpdated.length < 5 &&
        !pagesShowUpdated.includes(page + count)
      ) {
        pagesShowUpdated.push(page + count);
      }

      count += 1;
    }

    return {
      pages: pagesShowUpdated,
      hasLeft: page - count > 0,
      hasRight: page + count <= pages,
    };
  }, [page, pages]);

  useEffect(() => {
    if (page > pages) {
      setPage(pages);
    }

    if (page <= 0) {
      setPage(1);
    }
  }, [page, pages, setPage]);

  if (loading) {
    return (
      <Container {...rest}>
        <Skeleton.Root type="square" height="3rem" width="3rem" />

        <ul>
          <li>
            <Skeleton.Root type="square" height="2.5rem" width="2.5rem" />
          </li>
          <li>
            <Skeleton.Root type="square" height="2.5rem" width="2.5rem" />
          </li>
          <li>
            <Skeleton.Root type="square" height="2.5rem" width="2.5rem" />
          </li>
          <li>
            <Skeleton.Root type="square" height="2.5rem" width="2.5rem" />
          </li>
          <li>
            <Skeleton.Root type="square" height="2.5rem" width="2.5rem" />
          </li>
          <li>
            <Skeleton.Root type="square" height="2.5rem" width="2.5rem" />
          </li>
          <li>
            <Skeleton.Root type="square" height="2.5rem" width="2.5rem" />
          </li>
        </ul>

        <Skeleton.Root type="square" height="3rem" width="3rem" />
      </Container>
    );
  }

  return (
    <Container {...rest}>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={loading || page === 1}
      >
        <Icon.Root icon="chevronleft" />
      </button>

      {pagesShow.pages.length > 0 ? (
        <ul>
          {pagesShow.hasLeft ? (
            <li>
              <Icon.Root icon="ellipsis" />
            </li>
          ) : null}
          {pagesShow.pages.map((item) => (
            <li key={`table-pagination-${item}`}>
              <button
                className={page === item ? "active" : ""}
                type="button"
                onClick={() => setPage(item)}
                disabled={loading}
              >
                <p>{item}</p>
              </button>
            </li>
          ))}
          {pagesShow.hasRight ? (
            <li>
              <Icon.Root icon="ellipsis" />
            </li>
          ) : null}
        </ul>
      ) : null}

      <button
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={loading || page === pages}
      >
        <Icon.Root icon="chevronright" />
      </button>
    </Container>
  );
}
