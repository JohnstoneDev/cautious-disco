import { useReducer, useState } from 'react';
import Modal from './modal';
import { reducer } from './reducer';

const firstState = {
  groceryList : [],
  displayModal : false,
  modalMessage : "This is the way"
}

const GroceryBud = () => {
  const [ name , setName ] = useState("")
  const [ state, dispatch ] = useReducer(reducer,firstState);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();

    if(name){
      let newValue = { id : Math.random().toString(),name };
      dispatch({ type : "ADD_ITEM",payload : newValue });
      setName("");
    } else {
      dispatch({ type : "EMPTY_FIELD"})
    }
  }

  const closeModal = () => {
    dispatch({ type : "DISAPPEAR"})
  }

  const clearAllItems = () => {
    dispatch({ type : "DELETE_ALL"});
  }

  return (
  <div className="main-display">
    {state.displayModal && <Modal modalMessage={state.modalMessage} closeModal={closeModal}/>}
    <h2> Grocery Bud </h2>
      <form>
        <div>
          <input type="text" value={name} onChange={handleChange} placeholder="e.g eggs"/>
          <button type="submit" onClick={handleClick}>submit</button>
        </div>
      </form>

      <div className="grocery-list">
          {state.groceryList.map((item) => {
            return <div key={item.id} className="grocery-item">
              <p>{item.name}</p>
              <button onClick={()=> dispatch({ type : "REMOVE_ITEM" , payload : item.id})}> Delete </button>
            </div>
          })}
          <div>
            <button className="delete-all" onClick={clearAllItems} hidden={state.groceryList.length <= 0}>Clear All </button>
          </div>
      </div>
    </div>
  )
};


export default GroceryBud;
