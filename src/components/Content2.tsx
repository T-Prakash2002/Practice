import {useEffect, useState} from 'react'
import { Avatar, Button, List, Skeleton } from 'antd';


interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const Content2 = () => {

  const [data,setData]=useState<DataType[]>([])
  const [initLoading, setInitLoading] = useState<boolean>(true);
  const [loading,setLoading]=useState<boolean>(false)

  const count=3
  

  useEffect(()=>{
    setLoading(true)
    fetch(`https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`)
    .then((res)=>res.json())
    .then(result=>{
      setData(result.results)
      setInitLoading(false)})
      
      window.dispatchEvent(new Event('resize'));

  },[])

  const onLoadMore=()=>{
    setLoading(true)
    setData(
      data.concat([...new Array(count)].map(()=>({loading:true,name:{},picture:{}})))
    )


    fetch(`https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`)
    .then((res)=>res.json())
    .then(result=>{
      const newData = data.concat(result.results);
      setData(newData)
      setLoading(false)
    })
  }

  const handleloadMore=
      <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>



  return (
    <List
    itemLayout='horizontal'
    dataSource={data}
    loadMore={handleloadMore}
    renderItem={(item: DataType, index: number)=>{
      return <List.Item key={index}>
          <Skeleton
          title={false}
          loading={item.loading}
          active
          >
          <List.Item.Meta
            avatar={<Avatar src={item.picture?.large}/>}
            title={<a>{item.name?.last}</a>}
          />
          </Skeleton>
      </List.Item>
    }}
    >
      
    </List>
  )
}

export default Content2