<template>
    <main class="container">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
<!--            <tr :src="listRecipes.recipes">-->
            <tr v-for="character in RickAndMorty.results" :key="character.id"
                v-on:click="killTargets(character)">
                <th scope="row">{{character.id}}</th>
                <td>{{character.name}}</td>
                <td>{{character.status}}</td>
            </tr>
            </tbody>
        </table>
    </main>
</template>

<script>

    import RickAndMorty from "../data/rickandmortycharacter.json";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Recipe",
        data() {
            return {
                RickAndMorty,
            };
        },
        methods: {
            killTargets(character) {
                console.log('kill ' + character.name)
                character.status = "Dead"
            }
        }
    }
</script>

<style scoped>

</style>