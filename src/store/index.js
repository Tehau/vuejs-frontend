import {createStore} from "vuex";


export default createStore({
    state: {
        cart: [],
    },
    mutations: {
        addCharImageToCart(state, charImage) {
            state.cart.push(charImage)
        },
    },
});