import React,{Component} from 'react';
import TodoItems from './Components/TodoItems/TodoItems';
import AddItems from './Components/AddItems/AddItems';

class App extends Component {

  state={
    items:[{id:1,name:'Hamza',hours:22},
    {id:2,name:"Amir",hours:22},
    {id:3,name:"Mirooo",hours:23}]
  }


  deleteItem = (id) =>{
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items});
  }

  addItem = (item) =>{
      item.id = Math.random();
      let items = this.state.items;
      items.push(item);
      this.setState({items})
  }

  render(){
    return(
      <div className='App'>
        <header className='title'>Todo List</header>
        <TodoItems items={this.state.items}  deleteItem={this.deleteItem}/>
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
