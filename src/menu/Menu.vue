<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <router-view to="/">
          <a class="navbar-brand">
            VueJS <img alt="Vue logo" src="../assets/logo.png" style="max-height: 30px">
          </a>
        </router-view>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/characters" class="nav-link">
                Characters
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Add character</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menu"
}
</script>

<style scoped>

</style>