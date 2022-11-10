<template>
    <Menu />
    <main>
        <router-view/>
    </main>
</template>

<script>
    import Menu from "@/menu/Menu";

    export default {
        name: 'App',
        components: {
            Menu
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

    .nav-link {
        text-decoration: none;
        color: inherit;
    }

    .foo {
        color: red;
    }
</style>
