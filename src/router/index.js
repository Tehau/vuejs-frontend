import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/home/HomePage";
import ListCharacter from "@/listcharacter/ListCharacter";
import Character from "@/character/Character";


export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    },{
        path: '/characters',
        name: 'ListCharacter',
        component: ListCharacter,
    },{
        path: '/characters/:id',
        name: 'Character',
        component: Character,
        props: true,
    }]
});
