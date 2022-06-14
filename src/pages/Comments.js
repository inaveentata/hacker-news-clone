import React from 'react' 
import { useQuery } from "react-query";
import axios from "axios";
import FetchKids from '../components/FetchKids';
import { TailSpin } from 'react-loader-spinner';


const Comments = () => {
  const { data, isLoading, isError, error } = useQuery("newsIds", async () => {
    const resp = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    );
    return resp.data.slice(0,20);
  });
  if (isLoading) return <TailSpin />;
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