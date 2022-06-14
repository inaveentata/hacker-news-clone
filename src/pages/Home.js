import React from "react";
import Article from "../components/Article/Article";
import { useQuery } from "react-query";
import axios from "axios";
import {TailSpin} from 'react-loader-spinner'


const Home = () => {
  const { data, isLoading, isError, error } = useQuery("newsIds", async () => {
    const resp = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    );
    return resp.data;
  });
  if (isLoading) return <TailSpin />;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      {data.map((item,index) => (
        <Article key={item}  index={index+1} id={item} />
      ))}
    </>
  );
};

export default Home;
