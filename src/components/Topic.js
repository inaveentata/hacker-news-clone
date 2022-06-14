import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Topic = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery("newsId", async () => {
    const resp = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    return resp.data;
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  const { title } = data;
  return <>{title}</>;
};

export default Topic;
