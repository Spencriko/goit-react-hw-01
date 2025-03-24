import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

const user = {
  name: "John Doe",
  tag: "johndoe",
  location: "New York, USA",
  avatar: "https://via.placeholder.com/100",
  stats: { followers: 1234, views: 5678, likes: 91011 }
};

const friends = [
  { id: 1, name: "Alice", avatar: "https://via.placeholder.com/50", isOnline: true },
  { id: 2, name: "Bob", avatar: "https://via.placeholder.com/50", isOnline: false }
];

const transactions = [
  { id: "1", type: "Invoice", amount: "125.00", currency: "USD" },
  { id: "2", type: "Withdrawal", amount: "85.50", currency: "USD" }
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>

      <Profile {...user} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
