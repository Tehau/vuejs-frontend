<template>
  <Menu/>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <router-view name="title"/>
      </div>
      <div class="col">
        <main>
          <router-view name="default"/>
        </main>
      </div>
    </div>
  </div>
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
