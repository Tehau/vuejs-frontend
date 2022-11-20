<template>
<!--  {{this.cart}}-->
  <img :src="lastTarget"/>
  <main class="flex-container">
    <div v-for="(character, index) in RickAndMorty.results" :key="index">
      <character :id="character.id" :data="character"
                 @killed="onClickChild"></character>
    </div>
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
    let lastTarget = '';
    return {
      RickAndMorty,
      lastTarget,
      cart: []
    };
  },
  methods: {
    onClickChild (value) {
      this.lastTarget=value
      this.cart.push(value)
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