import {createStore} from "vuex";
import axios from "axios";


export default createStore({
    state: {
        cart: [],
        characterList: null,
        character: null
    },
    mutations: {
        addCharImageToCart(state, charImage) {
            state.cart.push(charImage)
        },
        getAllChar(state, result) {
            state.characterList = result
        },
        getChar(state, result) {
            state.character = result
            console.log(state.character)
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        getCharacters(context) {
            axios.get('https://rickandmortyapi.com/api/character')
                .then((result) => context.commit('getAllChar',result.data))
                .catch(console.error);
        },
        async getDetailCharacter(context, id) {
            axios.get('https://rickandmortyapi.com/api/character/' + id)
                .then((result) => context.commit('getChar',result.data))
                .catch(console.error);
        },
    }
});