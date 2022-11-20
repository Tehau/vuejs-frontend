import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/home/HomePage";
import ListCharacter from "@/listcharacter/ListCharacter";
import Character from "@/character/Character";
import SideBarHome from "@/sidebar/SideBarHome";
import SideBarCharacterList from "@/sidebar/SideBarCharacterList";


export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            default: HomePage,
            title: SideBarHome
        },
    },{
        path: '/characters',
        name: 'ListCharacter',
        components: {
            default: ListCharacter,
            title: SideBarCharacterList
        },
    },{
        path: '/characters/:id',
        name: 'Character',
        components: {
            default: Character,
            title: SideBarCharacterList
        },
        props: true,
    }]
});
