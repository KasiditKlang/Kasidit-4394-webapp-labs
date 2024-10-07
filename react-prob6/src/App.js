/* eslint-disable jsx-a11y/alt-text */
import {useState} from "react";
import {users} from "./data.js";
export default function Gallary() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = users[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <img src={sculpture.imgURL} className="image" />
      &nbsp;
      <a href={sculpture.url} target='_blank' rel="noreferrer">
        {sculpture.alt}
      </a>
      &nbsp;({sculpture.followers} followers)
      <h3>
        ({index + 1}) of {users.length}
      </h3>
      <button onClick={handleMoreClick}>
      {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.imgURL}</p>}
      <p/>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}