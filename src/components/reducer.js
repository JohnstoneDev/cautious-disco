export const reducer = (state,action) => {
    const newItems = [...state.groceryList,action.payload];
    if(action.type === "ADD_ITEM"){
      return {
        ...state,
        groceryList : newItems,
        displayModal : true,
        modalMessage : "Item Added"
      };
    };

    if(action.type === "EMPTY_FIELD"){
      return {...state,
        displayModal : true,
        modalMessage : "Can't Submit Empty Value"
      }
    };

    if(action.type === "DISAPPEAR"){
      return {...state,displayModal:false}
    };

    if(action.type === "REMOVE_ITEM"){
      const newGroceryList = state.groceryList.filter((item) => item.id !== action.payload);
      return {...state,groceryList : newGroceryList,displayModal : true,modalMessage : "delete succesful"}
    }

    if(action.type === "DELETE_ALL"){
      return {
        groceryList : [],
        displayModal : true,
        modalMessage : "Cleared Grocery List"
      };
    }

    throw new Error("action is not defined")
};
