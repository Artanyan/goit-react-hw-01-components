import React from 'react';

import Profile from './components/Profile/Profile';
import user from "./user.json";

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

const App = () =>{
    return(
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics 
                title="Upload stats" 
                stats={statisticalData} 
            />
            <FriendList 
                friends={friends} 
            />
            <TransactionHistory 
                items={transactions} 
            />;
        </div>
   
    );
};

export default App;