/* eslint-disable @typescript-eslint/no-empty-function */
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
  return (
    <Container>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={loading || page === 1}
      >
        <Icon.Root icon="chevronleft" />
      </button>
      <div>
        <button
          className={page === 1 ? "active" : ""}
          type="button"
          onClick={() => setPage(1)}
          disabled={loading}
        >
          <p>1</p>
        </button>
        <button
          className={page === 2 ? "active" : ""}
          type="button"
          onClick={() => setPage(2)}
          disabled={loading}
        >
          <p>1</p>
        </button>
        <button
          className={page === 3 ? "active" : ""}
          type="button"
          onClick={() => setPage(3)}
          disabled={loading}
        >
          <p>1</p>
        </button>
        <button
          className={page === 7 ? "active" : ""}
          type="button"
          onClick={() => setPage(7)}
          disabled={loading}
        >
          <p>1</p>
        </button>
        <button
          className={page === 7 ? "active" : ""}
          type="button"
          onClick={() => setPage(7)}
          disabled={loading}
        >
          <p>1</p>
        </button>
      </div>

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
