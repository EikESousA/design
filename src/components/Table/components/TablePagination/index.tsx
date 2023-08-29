import { useMemo } from "react";

import { Icon } from "@/components";

import { Container } from "./styles";

interface ITablePaginationProps {
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
}: ITablePaginationProps) {
  const pagesShow = useMemo(() => {
    const pagesShowUpdated = [];

    if (page - 2 >= 1) {
      pagesShowUpdated.push(page - 2);
    }

    if (page - 1 >= 1) {
      pagesShowUpdated.push(page - 1);
    }

    pagesShowUpdated.push(page);

    if (page + 1 <= pages) {
      pagesShowUpdated.push(page + 1);
    }

    if (page + 2 <= pages) {
      pagesShowUpdated.push(page + 2);
    }

    if (pagesShowUpdated.length < 5 && page + 3 <= pages) {
      pagesShowUpdated.push(page + 3);
    }

    if (pagesShowUpdated.length < 5 && page + 4 <= pages) {
      pagesShowUpdated.push(page + 4);
    }

    if (pagesShowUpdated.length < 5 && page - 3 <= pages) {
      pagesShowUpdated.unshift(page - 3);
    }

    if (pagesShowUpdated.length < 5 && page - 4 <= pages) {
      pagesShowUpdated.unshift(page - 4);
    }

    return pagesShowUpdated;
  }, [page, pages]);

  return (
    <Container>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={loading || page === 1}
      >
        <Icon.Root icon="chevronleft" />
      </button>

      {pagesShow.length > 0 ? (
        <ul>
          {pagesShow.map((item) => (
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
