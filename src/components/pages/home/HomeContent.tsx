import { useCallback, useEffect, useState } from 'react';
import DataTable from '../../DataTable';
import Header from '../../Header';
import MainLayout from '../../layout/MainLayout';
import { GET_ALL_TRANSACTIONS } from '../../../api/services/transactions';
import toast from 'react-hot-toast';
import LineChart from '../../LineChart';
import Filter from './Filter';
import moment from 'moment';

function HomeContent() {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [startDate, setStartDate] = useState(
    new Date(moment().startOf('month').toISOString())
  );
  const [endDate, setEndDate] = useState(new Date(moment().toISOString()));
  const [page, setPage] = useState(1);
  const [chartData, setChartData] = useState([]);
  const [detailTransactions, setDetailTransactions] = useState<any[]>([]);

  const columns = [
    {
      header: 'Sender',
      accessor: 'sender',
    },
    {
      header: 'Receiver',
      accessor: 'receiver',
    },
    {
      header: 'Amount',
      accessor: 'amount',
    },
    {
      header: 'Created',
      accessor: 'created',
    },
  ];

  const RETRIEVE_ALL_TRANSACTIONS = async () => {
    setLoading(true);
    const formatStartDate = moment(startDate).format('YYYY-MM-DD');
    const formatEndDate = moment(endDate).format('YYYY-MM-DD');

    const result = await GET_ALL_TRANSACTIONS(
      sender,
      receiver,
      formatStartDate,
      formatEndDate,
      page
    );

    setLoading(false);

    if (result.error) {
      toast.error(result.message);
    } else if (page === 1) {
      setChartData(result.daily_transaction);
      setDetailTransactions(result.detail_transactions);
      setHasMore(result.has_more);
    } else {
      setChartData(result.daily_transaction);
      setDetailTransactions((prevTransactions) => [
        ...prevTransactions,
        ...result.detail_transactions,
      ]);
      setHasMore(result.has_more);
    }
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleSearchTransactions = async () => {
    setPage(1);
    RETRIEVE_ALL_TRANSACTIONS();
  };

  useEffect(() => {
    RETRIEVE_ALL_TRANSACTIONS();
  }, [page]);

  const handleChangeSenderInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSender(e.target.value);
  };

  const handleChangeReceiverInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReceiver(e.target.value);
  };

  const handleSelectDateRange = ({ selection }: any) => {
    setStartDate(selection.startDate);
    setEndDate(selection.endDate);
  };

  return (
    <MainLayout>
      <Header />
      <Filter
        sender={sender}
        receiver={receiver}
        startDate={startDate}
        endDate={endDate}
        onChangeSender={handleChangeSenderInput}
        onChangeReceiver={handleChangeReceiverInput}
        onChangeDateRange={handleSelectDateRange}
        onClick={handleSearchTransactions}
      />
      <LineChart
        title='Daily Transactions Chart'
        data={chartData}
      />
      <DataTable
        data={detailTransactions}
        columns={columns}
        loading={loading}
        hasMore={hasMore}
        onClick={handleLoadMore}
      />
    </MainLayout>
  );
}

export default HomeContent;
