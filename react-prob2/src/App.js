import { GitHubAvatar, GitHubRepoURL } from "./github_data.js";
import "./App.css";

export default function GitHubUserInfo() {
  const userInfo = {
    url: "https://github.com/KasiditKlang", 
    imgURL: "https://avatars.githubusercontent.com/u/120089338?s=400&u=7d89281dc6de7db5e59735572a06b76d92a1ba5a&v=4", 
    alt: "Kasidit Malawai",
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar src={userInfo.imgURL} alt={userInfo.alt} size={50} />
      <GitHubRepoURL url={userInfo.url} text="GitHub Repository" />    
    </div>
   
  );
}
