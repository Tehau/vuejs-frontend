import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/home/HomePage";
import ListCharacter from "@/listcharacter/ListCharacter";
import SideBarHome from "@/sidebar/SideBarHome";
import SideBarCharacterList from "@/sidebar/SideBarCharacterList";
import CharacterDetail from "@/character/CharacterDetail";


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
        name: 'CharacterDetail',
        components: {
            default: CharacterDetail,
            title: SideBarCharacterList
        },
        props: true,
    }]
});
