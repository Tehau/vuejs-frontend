<template>
    <main class="container">
        <div class="bg-light p-5 rounded">
            <h1>VueJS 3 example with BootStrap 5</h1>
            <p class="lead">TLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non arcu sit amet tellus
                fermentum egestas in eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Donec interdum ex vitae tortor elementum, ac lacinia ipsum auctor. Cras luctus dolor
                tempus eros cursus, et dictum erat porta. Donec eu nisi faucibus, pretium lacus lobortis, mollis purus.
                Etiam scelerisque lacus ac justo consequat, vel iaculis eros mattis. Duis gravida ex a metus porttitor
                condimentum. Aliquam ac porttitor neque. Vestibulum sit amet magna quis metus pulvinar consequat. Mauris
                venenatis turpis a blandit porttitor..</p>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
