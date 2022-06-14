import React,{useState} from 'react' 
import { useQuery } from "react-query";
import axios from "axios";
import FetchKids from '../components/FetchKids';


const Comments = () => {
const [sortedData, setSortedData] = useState([])
  const { data, isLoading, isError, error } = useQuery("newsIds", async () => {
    const resp = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    );
    return resp.data.slice(0,20);
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    
    <>
      {
        data.map(item => (<FetchKids key={item} id={item} />))
      }
    </>
  )
}

export default Comments