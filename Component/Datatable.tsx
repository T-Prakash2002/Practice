import React, { useState } from 'react';
import { DatePicker, Button, List } from 'antd';
import moment, { Moment } from 'moment';

const { RangePicker } = DatePicker;

const DateTimeRangePicker: React.FC = () => {
  const [dateTimes, setDateTimes] = useState<Moment[]>([]);
  const [range, setRange] = useState<[Moment | null, Moment | null]>([null, null]);

  const handleRangeChange = (dates: [Moment | null, Moment | null]):void => {
    setRange(dates);
  };

  const generateDateTimes = () => {
    const [start, end] = range;
    if (start && end) {
      const intermediateTimes: Moment[] = [];
      let current = start.clone();

      while (current.isSameOrBefore(end)) {
        intermediateTimes.push(current.clone());
        current = current.add(1, 'hour'); // Adjust the interval as needed
      }
      setDateTimes(intermediateTimes);
    }
  };

  console.log(dateTimes);
  

  return (
    <div>
      <RangePicker showTime onChange={handleRangeChange} />
      <Button type="primary" onClick={generateDateTimes} disabled={!range[0] || !range[1]}>
        Generate Datetimes
      </Button>
      <List
        bordered
        dataSource={dateTimes}
        renderItem={(item) => (
          <List.Item>
            {item.format('YYYY-MM-DD HH:mm:ss')}
          </List.Item>
        )}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default DateTimeRangePicker;
