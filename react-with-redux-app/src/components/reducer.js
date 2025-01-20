let initialState = {
    counter: 100,
    name: "Farrukh",
    products: [
        { "pid": 1, "pname": "Mobile", "price": 10000 },
        { "pid": 2, "pname": "Laptop", "price": 50000 },
        { "pid": 3, "pname": "TV", "price": 30000 }
    ]
}
function reducer(state = initialState, action) {
    // based upon the action, we can do some changes in state variable and return it
    console.log("Reducer called", action);
    if (action.type == "INCREMENT") {
        //...state means copy of state ie hold all the values of state ie 1st parameter 
        // 2nd which property you want to change, 3rd property new value.
        return { ...state, counter: state.counter + 1 }
    }

    if (action.type == "DECREMENT") {
        //...state means copy of state ie hold all the values of state ie 1st parameter 
        // 2nd which property you want to change, 3rd property new value.
        return { ...state, counter: state.counter - 1 }
    }

    if (action.type == "ADD_PRODUCT") {
        // 1st parameter copy of state, 2nd parameter which property you want to change, 3rd parameter new value.
        //return {...state,products:[...state.products,action.payload]}
        return { ...state, products: state.products.concat(action.payload) }
    }

    return state;
}


export default reducer;