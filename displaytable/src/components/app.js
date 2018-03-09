import React, { Component } from 'react';
import TableList from './table_list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentData: [],
      currentView: 'recentData'
    };

    this.onSort = this.onSort.bind(this);

  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        this.setState({ recentData: json });
        console.log(this.state);
     });
  
  }

  onSort(event, sortKey) {
    const data = this.state.recentData;
    data.sort((a,b) => a[sortKey].toString().localeCompare(b[sortKey]));
    this.setState({recentData: data})
  }

  
  render() {
    return (
      <div>
        <TableList 
           tableinfo={this.state[this.state.currentView]} 
           sort={this.onSort}
        />
      </div>
    );
  }
}
