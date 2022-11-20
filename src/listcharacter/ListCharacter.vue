<template>
  <main class="flex-container">
    <router-view></router-view>
    <div v-for="(character, index) in RickAndMorty.results" :key="index">
    <character :id="character.id" :data="character"></character>
    </div>
<!--    <table class="table">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th scope="col">#</th>-->
<!--        <th scope="col">Name</th>-->
<!--        <th scope="col">Status</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="(character, index) in RickAndMorty.results" :key="index">-->
<!--        <th scope="row">{{ index + 1 }}</th>-->
<!--&lt;!&ndash;        <td @click="goDetail(character)">&ndash;&gt;-->
<!--        <td>-->
<!--          <router-link :to="{ name: 'Character', params: { id: character.id }}">-->
<!--            {{ character.name }}-->
<!--          </router-link>-->
<!--        </td>-->
<!--        <td :style="deadPeople(character)" @click="killTarget(character)">{{ character.status }}</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
  </main>
</template>

<script>

import RickAndMorty from "../assets/data/rickandmortycharacter.json";
import Character from "@/character/Character";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ListCharacter",
  components: {Character},
  data() {
    return {
      RickAndMorty,
      cart: []
    };
  },
  methods: {
    killTarget(character) {
      // console.log('kill ' + character.name);
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

<style>

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex-container > div {
  flex: 0 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
  /*demo*/
  /*box-shadow: 0 0 0 1px black;*/
  margin-bottom: 10px;
}
</style>