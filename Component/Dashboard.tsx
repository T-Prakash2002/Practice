import React, { useEffect, useRef, useState } from "react";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table, DatePicker } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";

import moment, { Moment } from "moment";
import { SearchOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  dob: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 35,
    address: "New York No. 1 Lake Park",
    dob: "2024-08-10",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
    dob: "2024-07-02",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 23,
    address: "Sydney No. 1 Lake Park",
    dob: "2024-12-04",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
    dob: "2024-10-08",
  },
];

const Dashboard: React.FC = () => {
  const searchInput = useRef<InputRef>(null);

  const [tableData, setTableData] = useState<DataType[]>(data);
  const [selectedDates,setselectedDates]=useState<string[]>([])

  const { RangePicker } = DatePicker;

  let dataSet = data;

  function handleSearch(
    selectedKeys: string[],
    confirm: (message?: string | undefined) => boolean,
    dataIndex: DataIndex
  ) {
    
    if (selectedKeys.length) {
      setTableData(
        tableData.filter((item) => {
          if (dataIndex == "name") {
            return item.name.toLowerCase().includes(selectedKeys[0].toLowerCase());
          } else if (dataIndex == "address") {
            return item.address.toLowerCase().includes(selectedKeys[0].toLowerCase());
          } else if (dataIndex == "age") {
            return item.age == Number(selectedKeys[0]);
          }
        })
      );
    } else{
      setTableData(dataSet);
    }


  }


  function handleDateRangeChange (
    dates: [Moment | null, Moment | null],
    dateStrings: [string, string]
  ) {
    
    setselectedDates(dateStrings);

  };

  function filterDates(){    

    console.log("filter Dates");
    

    const [startDate, endDate] = selectedDates;

    if (startDate && endDate) {
      setTableData(
        tableData.filter((item) => {
          const itemDate = moment(item.dob);
          return itemDate.isBetween(startDate, endDate);
        })
      );
    } else {
      setTableData(dataSet);
    }
  }






  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>    
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
          }}
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />


        <Space>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
  });

  const getColumnDateProps=(
    dataIndex: DataIndex
  ):
  TableColumnType<DataType>=>
    ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, close }) => (
        <div style={{ padding: 8 }} onKeyDown={(e) => {
          if(e.key=='Enter'){
            filterDates();
          }
        }}>  



          <RangePicker onChange={handleDateRangeChange} />

          <Space>


          
          <Button
            type="primary"
            onClick={() => filterDates()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>

            <Button
              type="link"
              size="small"
              onClick={() => {

                if(!(selectedDates[0].length && selectedDates[1].length)){
                  setTableData(dataSet)
                }
                
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} 
        onKeyUp={()=>{console.log(filtered);
        }}
         />
      ),
  })





  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
      ...getColumnDateProps('dob')
    },
  ];




  return (
    <>

      <Table columns={columns} dataSource={tableData} />
    </>
  );
};

export default Dashboard;
