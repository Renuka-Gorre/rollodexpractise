import React from "react";
import CardList from '../../Components/Card.List/Card.List.component';
import Search from '../../Components/Search/Search.component';
import './Home.styles.css'


class Home extends React.Component{

    constructor(){
  
      super();
  
      //this.state={
  
       // name: 'Renu'
  
     // }

      this.state={
        monsters:[],
        searchField: ''
      }
  
    }
    componentDidMount(){

      fetch('https://jsonplaceholder.typicode.com/users')

          .then(response => response.json())

          .then(users => this.setState({ monsters: users }));

  }
  
  // handleUpdateState = () => {
  
    // this.setState({name:'xxxxxxx'})
  
  // }
  
  
  
  render(){
  {/*
    return(
  
      <>
  
        <h1 className='title'>Monster's Rollodex</h1>
  
          <form>
  
            <input />
  
            <button >Search</button>
  
            <p>{this.state.monster}</p>

            <img>https://robohash.org/39.96.1.102.png</img>

            <p>Robohash</p>

            <p>robohash@qentelli.com</p>
  
            </form>
  
      </>
  
    )
    */}
    const {monsters,searchField } = this.state
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monsters Rolodex</h1>
               
               <Search handleSearch={this.handleSearch} />
                <CardList monsters={this.state.monsters} />
                
            </div>
            </>
        )
  
  }
   }
  export default Home
