import React from "react";
import "./commentArticle.scss";
import { GoTriangleUp } from "react-icons/go";
import axios from "axios";
import { useQuery } from "react-query";
import Topic from "../Topic";
import TimeFormatter from "../TimeFormatter";
import { TailSpin } from "react-loader-spinner";

const CommentArticle = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["newsComment", id],
    async () => {
      const resp = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      return resp?.data;
    }
  );

  if (isLoading) return <TailSpin />
  if (isError) return <h1>{error.message}</h1>;
  const { by: author, parent, text, time } = data;

  return (
    <article className="comment">
      <div className="info">
        <p>
          <span>
            <GoTriangleUp />
          </span>{" "}
          {author}
        </p>
        <p>
          <TimeFormatter value={time} />
          <span>ago</span>
        </p>
        <p>| parent |</p>
        <p>context</p>
        <p>| next |</p>
        <p>
          on: <Topic id={parent} />
        </p>
      </div>
      <p className="text" dangerouslySetInnerHTML={{ __html: text }}></p>
    </article>
  );
};

export default CommentArticle;

/* 
need to render the parent with link
next aka -> render kids 
figure out how context came
 */
