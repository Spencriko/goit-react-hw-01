import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile/Profile'
import userData from '../assets/userData.json'
import friends from '../assets/friends.json'
import FriendList from './FriendsList/FriendsList'
import transactions from '../assets/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory'

function App() {

  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App