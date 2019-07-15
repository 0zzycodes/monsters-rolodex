import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import '../src/App.css';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const fillterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={fillterdMonsters} />
      </div>
    );
  }
}

export default App;
