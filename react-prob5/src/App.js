/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import {users} from './users.js';

export default function App() {
  const popular = users.filter(person => person.followers > 10000);
  const listItems = popular.map((person) =>
    <li key={person.url}>
      <img src={person.imgURL} className="image" />
      &nbsp;
      <a href={person.url} target='_blank' rel="noreferrer">
        {person.alt}
      </a>
      &nbsp;({person.followers} followers)
    </li>
  );

  return (
    <>
      <h1 className="Name">Popular GitHub Repositories</h1>
      <ul>{listItems}</ul>
    </>
  );
}
