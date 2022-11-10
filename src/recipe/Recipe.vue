<template>
    <main class="container">
        <div class="bg-light p-5 rounded">
            <ul>
                <li v-for="recipe in recipes" :key="recipe.Name">
                    {{recipe.Name}}
                </li>
            </ul>
        </div>
    </main>
</template>

<script>

    import recipesData from "../data/recipes.json";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Recipe",
        data() {
            return {
              recipes: recipesData
            };
        }
    }
</script>

<style scoped>

</style>