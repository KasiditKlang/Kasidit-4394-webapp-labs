/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
export function GitHubInfo({userInfo}) {
    if (userInfo.followers > 10000) {
    return(
        <div className="App">
        <img src={userInfo.imgURL} className="image"/>
        <a href={userInfo.url} target='_blank' rel="noreferrer">{userInfo.alt}({userInfo.followers} followers)</a>
        </div>
    )} else {
        return(
            <div className="App">
            <img src={userInfo.imgURL} className="image"/>
            <a href={userInfo.url} target='_blank' rel="noreferrer">{userInfo.alt}</a>
            </div>
        ) 
    } 
}
