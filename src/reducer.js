export const initState = {
    basket: [],
    user: null
}

export const reducer = (state = initState, action) => {
    console.log(action);
    
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
     
        case "REMOVE_FROM_BASKET": 
            const index = state.basket?.findIndex(basketItem => basketItem.id === action.id )
            let newBasket = [...state.basket]

            if(index >= 0) {
                 newBasket.splice(index, 1)
            } else {
                console.warn(action.id + ' not in basket');
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER": 
            return {
                ...state,
                user: action.user
            }
    
        default:
            return state
    }
}