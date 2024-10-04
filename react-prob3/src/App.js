import './App.css';
import {GitHubInfo} from './github_info.js';
import {users} from './users.js';
export default function App() {
  return (
    <div className = "App">
      <GitHubInfo userInfo={users[0]}/>
      <GitHubInfo userInfo={users[1]}/>
      <GitHubInfo userInfo={users[2]}/>

    </div>
  )
    
}


  