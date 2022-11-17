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
            <tr v-for="(character, index) in RickAndMorty.results" :key="index"
                @click="killTargets(character)">
                <th scope="row">{{index+1}}</th>
                <td>
                    {{character.name}}
                </td>
                <td :style="deadPeople(character)">{{character.status}}</td>
            </tr>
            </tbody>
        </table>
    </main>
</template>

<script>

    import RickAndMorty from "../assets/data/rickandmortycharacter.json";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "ListCharacter",
        data() {
            return {
                RickAndMorty,
                cart: []
            };
        },
        methods: {
            killTargets(character) {
                // console.log('kill ' + character.name);
                // character.status = "Dead";
                // this.cart.push(character.name)
                this.$router.push({name: 'Character', params: { id: character.id}});
            },
            deadPeople(character) {
                return {
                    color: character.status === "Dead" ?
                        'red' :
                        'green'
                }
            }
        }
    }
</script>

<style scoped>

</style>