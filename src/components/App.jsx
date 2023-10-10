import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history/TransactionHistory';
import React, { Component } from 'react';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export class App extends Component  {
  state = {
    userData: user,
    statisticsData: data,
    friendsData: friends,
    transactionsData: transactions,
  }; 
  render () {
    return <div>
         <Profile user={this.state.userData} />
         <Statistics data={this.state.statisticsData}/>
         <FriendList friends={this.state.friendsData}/>
         <TransactionHistory transactions={this.state.transactionsData}/>
      </div>;
  }
}

