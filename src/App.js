import './style.css'

import React from "react";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }


  updateInput(key, value){
    this.setState({
      [key]: value
    })

  }
  addItem(){
    //creating item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    //copy current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and rest newItem
    this.setState({
      list,
      newItem:""
    });



  }


  deleteItem(id){

    const list=[...this.state.list];

    const updatedList = list.filter(item=>item.id !== id)

    this.setState({list: updatedList});
  }

  render(){
  return (
    <div className="App">
    
      <div>
        <h3>Add an Item...</h3>
        <br />
        <input
          type="text"
          placeholder="Type ıtem"
          value={this.state.newItem}
          onChange={e=> this.updateInput("newItem", e.target.value)}
        ></input>
        <button onClick={()=>this.addItem()}>Add</button>
        <br />

        <ul>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>{item.value}
              <button onClick={()=>this.deleteItem(item.id)}>X</button>
              </li>
            )
          })}

        </ul>
        
      </div>
    </div>
  );
}
}

export default App;
