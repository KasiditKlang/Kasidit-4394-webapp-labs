import { useState } from "react";
import { users } from "./users.js";
import "./App.css"; 

export default function Gallary() {
  const [index, setIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);

  function handleNextClick() {
    if (index < users.length - 1) {
      setIndex(index + 1);
      setShowFollowers(false); 
    }
  }

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
      setShowFollowers(false);
    }
  }

  function handleFollowersClick() {
    setShowFollowers(!showFollowers);
  }

  let user = users[index];

  return (
    <>
      <h1 style={{textAlign: "center"}}>Sample GitHub Repositories</h1>
      <div style={{ textAlign: "center" }}>
        <a href={user.url} target="_blank" rel="noreferrer">
          <h2>{user.alt}</h2>
          <img src={user.imgURL} alt={user.alt} className="image" />
        </a>

        <div style={{ marginTop: "20px" }}>
          <button className="prev-button"
            onClick={handlePreviousClick}
            style={{ margin: "20px", backgroundColor: "orange"}}
            disabled={index === 0}
          >
            Previous
          </button>

          <div style={{ display: "inline-block" }}>
            <button className="follow-button"
              onClick={handleFollowersClick}
              style={{ margin: "20px", backgroundColor: "lightblue" }}
            >
              {showFollowers ? "Hide followers" : "Show followers"}
            </button>
            {showFollowers && (
              <span style={{ marginLeft: "10px", fontSize: "18px" }}>
                {user.followers} followers
              </span>
            )}
          </div>

          <button className="next-button"
            onClick={handleNextClick}
            style={{ margin: "20px", backgroundColor: "greenyellow" }}
            disabled={index === users.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
