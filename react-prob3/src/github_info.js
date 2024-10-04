import React from 'react';
export function GitHubInfo({userInfo}) {
    return(
        <div className="App">
        <h1 className="Name">{userInfo.alt}</h1>
        <img src={userInfo.imgURL} className="image"/>
        <div><a href={userInfo.url} target='_blank'>GitHub Repository</a></div>
        </div>
    )
}
