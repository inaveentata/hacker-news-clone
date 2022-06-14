import React from 'react'
import Article from "../components/Article/Article";
import { useQuery } from "react-query";
import axios from "axios";

/* 
https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty
 */

const Ask = () => {
  const { data, isLoading, isError, error } = useQuery("newsIds", async () => {
    const resp = await axios.get(
      `https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`
    );
    return resp.data
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>{
      data.map((item,index)=>(<Article key={item} id={item} index={index+1}/>))
    }
    </>
  )
}

export default Ask