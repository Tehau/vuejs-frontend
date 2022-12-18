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
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        getCharacters(context) {
            // Check vue.config.js for proxy
            axios.get('/api/v1/character')
            // axios.get('https://rickandmortyapi.com/api/character?page=1')
                .then((result) => context.commit('getAllChar',result.data))
                .catch(console.error);
        },
        async getDetailCharacter(context, id) {
            axios.get('/api/v1/character/' + id)
            // axios.get('https://rickandmortyapi.com/api/character/' + id)
                .then((result) => context.commit('getChar',result.data))
                .catch(console.error);
        },
        postCharacter(context, character) {
            axios.put('/api/v1/character/' + character.id, character)
                .then(() => context.commit('character', character))
                .catch(console.error);
        }
    }
});