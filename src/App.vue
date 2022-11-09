<template>
    <header>
        <nav>
            <ul>
                <li class="nav-item">
                    <img alt="Vue logo" src="./assets/logo.png" style="max-height: 30px">
                    Home
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <HomePage/>
    </main>
</template>

<script>
    import HomePage from './components/HomePage.vue'

    export default {
        name: 'App',
        components: {
            HomePage
        }
    }
</script>

<style>
    body {
        background: linear-gradient(to bottom, #555555, #999999);
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    header {
        background-color: #999999;
        width: 1084px;
        margin: 0 auto;
    }

    ul {
        padding: 3px;
        display: flex;
    }

    .nav-item {
        display: inline-block;
        padding: 5px 10px;
        font-size: 22px;
        border-right: 1px solid #bbb;
    }

    main {
        margin: 0 auto;
        padding: 30px;
        background-color: white;
        width: 1024px;
        min-height: 300px;
    }
</style>
