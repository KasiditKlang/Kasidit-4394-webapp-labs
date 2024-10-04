import React, { useState, useEffect } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  const [GitHubInfo, setGithubInfo] = useState({
    topic: '',
    GitHubAvatar: '',
    GitHubRepoURL: ''
  });

  useEffect(() => {
    const username = 'KasiditKlang';
    const apiURL = `https://api.github.com/users/${username}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setGithubInfo({
          topic: 'my Github repository',
          GitHubAvatar: data.avatar_url,
          GitHubRepoURL: data.html_url,
        });
      })
      .catch((error) => console.error('Error fetching GitHub user data:', error));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GitHub Profile</title>
      </Helmet>
      <div>
        <h1 style={{ textAlign: 'center'}}>
          My Github information
        </h1>
        <img
          className="avatar-img"
          src={GitHubInfo.GitHubAvatar}
          alt="GitHub Avatar"
          style={{
            width: '500px',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
                <h1 style={{ textAlign: 'center' }}>
          <a href={GitHubInfo.GitHubRepoURL} target="_blank" rel="noopener noreferrer" style={{ color: 'purple', textDecoration: 'underline' }}>
            {GitHubInfo.topic}
          </a>
        </h1>
      </div>
    </>
  );
}

export default App;
