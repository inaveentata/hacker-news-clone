import React from "react";
import "./jobArticle.scss";
import axios from "axios";
import { useQuery } from "react-query";
import TimeFormatter from "../TimeFormatter";
import { TailSpin } from "react-loader-spinner";
import UrlText from '../UrlText'

const JobArticle = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["jobItem", id],
    async () => {
      const resp = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      return resp.data;
    }
  );

  if (isLoading) return <TailSpin />;
  if (isError) return <h1>{error.message}</h1>;
  const { title, url, time } = data;
  return (
    <article className="job-article">
      <p className="title">
        <a href={url} target='_blank' rel="noreferrer">{title}</a> (<UrlText url={url } />)
      </p>
      <p className="time">
        <TimeFormatter value={time} /> ago
      </p>
    </article>
  );
};

export default JobArticle;

/* edge cases ----->
Need to impliment url link

*/
