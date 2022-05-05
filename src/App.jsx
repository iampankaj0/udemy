import React, { Component } from 'react'
import './App.css'
import Cards from './components/card-list/Cards';
import SearchBox from './components/search-box/SearchBox';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(
        () => {
          return { monster: users }
        },
        () => {
          console.log(this.state)
        }
      ))
  }


  filterEvent = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }


  render() {

    const filterMonster = this.state.monster.filter((data) => {
      return data.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <div className='App'>

        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox onChangeHandler={this.filterEvent} placeholder='search monsters' className='monster-search-box' />
        <Cards monster={filterMonster} />
      </div >
    )
  }
}
