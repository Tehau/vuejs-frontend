<template>
  <main class="container">
    <router-view></router-view>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(character, index) in RickAndMorty.results" :key="index">
        <th scope="row">{{ index + 1 }}</th>
<!--        <td @click="goDetail(character)">-->
        <td>
          <router-link :to="{ name: 'Character', params: { id: character.id }}">
            {{ character.name }}
          </router-link>
        </td>
        <td :style="deadPeople(character)" @click="killTarget(character)">{{ character.status }}</td>
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
    killTarget(character) {
      console.log('kill ' + character.name);
      character.status = "Dead";
      this.cart.push(character.name)
      // this.$router.push({name: 'Character', params: {id: character.id, data: character}});
    },
    goDetail(character) {
      this.$router.push({
        name: 'Character',
        params: {
          id: character.id,
          data: character
        }
      });
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