import React from "react";
import "./article.scss";
import { GoTriangleUp } from "react-icons/go";
import axios from "axios";
import { useQuery } from "react-query";
import TimeFormatter from "../TimeFormatter";
import UrlText from "../UrlText";
import { TailSpin } from "react-loader-spinner"; 

const Article = ({ index, id }) => {
  const { data, isLoading, isError, error } = useQuery(["newsItem",id], async () => {
    const resp = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    return resp.data;
  });
  
  if (isLoading) return <TailSpin />
  if (isError) return <h1>{error.message}</h1>;
  const hide = () => {};
  const { title, score: points, by: author, time, descendants: comments,url } = data;
  return ( 
    <article className="main-article">
      <p className="title">
        {index}.
        <span className="triangle">
          <GoTriangleUp size={10}  />
        </span> <a href={url} rel="noreferrer" target="_blank">{title}</a>
         <span className="urlText">(<UrlText url={url} />)</span>
      </p>
      <div className="info">
        <p>{points} points</p>
        <p>
          by <span>{author}</span>
        </p>
        <p>
          {" "}
          <span><TimeFormatter value={time} /> ago</span>
        </p>
        <p onClick={() => hide}>
          | <span>hide</span> |
        </p>
        <p>
          {comments} <span>comments</span>{" "}
        </p>
      </div>
    </article>
  );
};

export default Article;
