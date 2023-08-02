import { Container, Pagination } from "./styles";

const initFieldHeader = {
  id: "id",
  name: "name",
  value: "value",
};

interface ITableRootProps {
  id: string;
  datas: any[];
  header: any[];
  fieldHeader: IHeaderFieldDTO;
  loading?: boolean;
  tableStyles: any;
  page?: number | null;
  setPage?: (value: number) => void | null;
  pages?: number | null;
  total?: number | null;
  labelItems?: string;
}

interface IHeaderFieldDTO {
  id: string;
  name: string;
  value: string;
}

export default function TableRoot({
  id = "table",
  datas = [],
  header = [],
  fieldHeader = initFieldHeader,
  loading = false,
  tableStyles = {},
  page = null,
  setPage,
  pages = null,
  total = null,
}: ITableRootProps) {
  return (
    <>
      <Container
        id={id}
        style={
          tableStyles && tableStyles.containerStyle
            ? tableStyles.containerStyle
            : {}
        }
      >
        <table>
          <thead>
            <tr>
              {header.map((header) => (
                <th
                  key={`${id}-table-thead-tr-th-${header[fieldHeader.id]}`}
                  style={
                    tableStyles &&
                    tableStyles.headerStyle &&
                    tableStyles.headerStyle[header[fieldHeader.value]]
                      ? tableStyles.headerStyle[header[fieldHeader.value]]
                      : {}
                  }
                >
                  <p>{header[fieldHeader.name]}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={header.length} className="empty">
                  <div>{/* <LoadingSpinner /> */}</div>
                </td>
              </tr>
            ) : (
              <>
                {datas.length === 0 ? (
                  <tr>
                    <td colSpan={header.length} className="empty">
                      <div>
                        <p>Não possui dados</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {datas.map((data) => (
                      <tr key={`${id}-table-tbody-tr-${data[fieldHeader.id]}`}>
                        {header.map((header) => (
                          <td
                            key={`${id}-table-tbody-tr-${
                              data[fieldHeader.id]
                            }-td-${header[fieldHeader.id]}`}
                            style={
                              tableStyles &&
                              tableStyles.columnStyle &&
                              tableStyles.columnStyle[header[fieldHeader.value]]
                                ? tableStyles.columnStyle[
                                    header[fieldHeader.value]
                                  ]
                                : {}
                            }
                          >
                            {typeof data[header[fieldHeader.value]] ===
                              "string" ||
                            typeof data[header[fieldHeader.value]] ===
                              "number" ? (
                              <p>{data[header[fieldHeader.value]]}</p>
                            ) : (
                              <>{data[header[fieldHeader.value]]}</>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                )}
              </>
            )}
          </tbody>
        </table>
      </Container>
      {page !== null && setPage !== null && pages !== null && total !== null ? (
        <Pagination>
          {/* <ButtonIcon
            tooltip={'PÁGINA ANTERIOR'}
            icon={MdNavigateBefore}
            onClick={() => setPage(prev => prev - 1)}
            disabled={page === 1}
          />
          <div>
            <p>
              Página <strong>{page}</strong> de <strong>{pages}</strong> - Total
              de <strong>{total}</strong> {labelItems}
            </p>
          </div>
          <ButtonIcon
            tooltip={'PÁGINA POSTERIOR'}
            icon={MdNavigateNext}
            onClick={() => setPage(prev => prev + 1)}
            disabled={page === pages}
          /> */}
        </Pagination>
      ) : null}
    </>
  );
}
