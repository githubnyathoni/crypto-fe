import Button from './Button';
import Card from './Card';

interface Column {
  header: string;
  accessor: string;
}

interface DataTableProps {
  data: {
    [key: string]: any;
  }[];
  columns: Column[];
  hasMore: boolean;
  loading: boolean;
  onClick?: (
    e: React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  columns,
  hasMore,
  loading,
  onClick = () => {},
}) => {
  return (
    <Card>
      <table className='border-collapse table-auto w-full text-sm'>
        <thead className='bg-gray-200'>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className='border-b border-slate-400 font-medium p-4 pl-8  pb-3 text-left'
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white'>
          {data.length ? (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className='border-b border-slate-200  p-4 pl-8'
                  >
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                className='text-center pt-4'
                colSpan={4}
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {hasMore && (
        <div className='flex justify-center mt-10'>
          <Button
            label='Load More'
            onClick={onClick}
          />
        </div>
      )}
    </Card>
  );
};

export default DataTable;
