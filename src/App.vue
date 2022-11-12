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

<style scoped>
</style>
