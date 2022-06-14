import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import CommentArticle from "../components/CommentArticle/CommentArticle";

const FetchKids = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["kids", id],
    async () => {
      const resp = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      return resp.data.kids;
    }
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  if (data) return <CommentArticle id={data[0]} />;
  return;
};

export default FetchKids;
