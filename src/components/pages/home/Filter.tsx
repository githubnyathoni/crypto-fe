import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import Card from '../../Card';
import Input from '../../Input';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Button from '../../Button';

interface FilterProps {
  sender: string;
  receiver: string;
  startDate: Date;
  endDate: Date;
  onChangeSender: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeReceiver: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDateRange: any;
  onClick: (
    e: React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

function Filter({
  sender,
  receiver,
  startDate,
  endDate,
  onChangeSender,
  onChangeReceiver,
  onChangeDateRange,
  onClick,
}: FilterProps) {
  const [openCalendar, setOpenCalendar] = useState(false);
  const formatStartDate = moment(startDate).format('DD-MM-YYYY');
  const formatEndDate = moment(endDate).format('DD-MM-YYYY');
  const todayDate = new Date(moment().toISOString());
  const dateRangeRef = useRef<any>(null);
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  useEffect(() => {
    const clickHandlerDateRange = ({ target }: MouseEvent) => {
      if (dateRangeRef.current && !dateRangeRef.current.contains(target)) {
        setOpenCalendar(false);
      }
    };
    document.addEventListener('click', clickHandlerDateRange, true);
  });

  return (
    <Card>
      <h2 className='text-xl font-bold mb-4 text-black'>Filter Transactions</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Input
          id='sender'
          icon={faUser}
          type='text'
          placeholder='Enter sender username'
          onChange={onChangeSender}
          value={sender}
        />
        <Input
          id='receiver'
          icon={faUser}
          type='text'
          placeholder='Enter receiver username'
          onChange={onChangeReceiver}
          value={receiver}
        />
        <Input
          id='daterange'
          icon={faCalendarDays}
          type='text'
          value={`${formatStartDate} to ${formatEndDate}`}
          onClick={() => {
            setOpenCalendar(!openCalendar);
          }}
          readonly
        />
        {openCalendar && (
          <div
            ref={dateRangeRef}
            className='absolute top-48 right-96 z-50'
          >
            <DateRange
              onChange={onChangeDateRange}
              ranges={[selectionRange]}
              maxDate={todayDate}
            />
          </div>
        )}
        <Button
          label='Search'
          onClick={onClick}
        />
      </div>
    </Card>
  );
}

export default Filter;
