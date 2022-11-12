import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/home/HomePage";
import Recipe from "@/listcharacter/ListCharacter";


export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    },{
        path: '/recipes',
        name: 'Recipes',
        component: Recipe,
    }]
});
