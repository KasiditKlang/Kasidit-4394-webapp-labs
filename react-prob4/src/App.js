import './App.css';
import {GitHubInfo} from './github_info.js';
import {users} from './users.js';
export default function App() {
  return (
    <div className = "App">
      <h1 className="Name">Sample GitHub Repositories</h1>
      <ol>
      <li><GitHubInfo userInfo={users[0]}/></li>
      <li><GitHubInfo userInfo={users[1]}/></li>
      <li><GitHubInfo userInfo={users[2]}/></li>
      </ol>

    </div>
  )
}


  