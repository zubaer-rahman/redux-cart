 
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
    cart: [],
    products: [
        {name: 'Lenovo Laptop', id: 1},
        {name: 'Hp Laptop', id: 2},
        {name: 'Apple Laptop', id: 3},
        {name: 'Dell Laptop', id: 4},
        {name: 'Toshiba Laptop', id: 5},
    ]
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                id: action.id,
                name: action.name,
                cartId: state.cart.length +1
            }
            const newCart = [...state.cart, newItem]
            return {...state, cart: newCart}
        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item=> item.cartId !== action.id)
            return {...state, cart: remainingCart}
        default:
            return state
    }
};