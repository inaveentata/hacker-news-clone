import React from 'react'
import JobArticle from "../components/JobArticle/JobArticle";
import { useQuery } from "react-query";
import axios from "axios";


const Jobs = () => {
  const { data, isLoading, isError, error } = useQuery("newsIds", async () => {
    const resp = await axios.get(
      `https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`
    );
    return resp.data;
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>{
      data.map((item,index)=>(<JobArticle key={index}  id={item} />))
    }
      
    </>
  )
}

export default Jobs