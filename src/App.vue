<template>
    <Menu />
    <main>
        <HomePage/>
    </main>
</template>

<script>
    import HomePage from './home/HomePage.vue'
    import Menu from "@/menu/Menu";

    export default {
        name: 'App',
        components: {
            Menu,
            HomePage
        }
    }
</script>

<style>
    body {
        #background: linear-gradient(to bottom, #555555, #999999);
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    header {
        background-color: #999999;
        margin: 0 auto;
    }

</style>
