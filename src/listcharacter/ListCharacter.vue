<template>
<!--  {{this.cart}}-->
  <img v-for="(image_src, index) in cart" :key="index" :src="image_src"/>
  <main v-if="availableChars" class="flex-container">
    <div v-for="(character, index) in availableChars.results" :key="index">
      <character :id="character.id" :data="character"
                 @killed="onClickChild"></character>
    </div>
  </main>
</template>

<script>

// import RickAndMorty from "../assets/data/rickandmortycharacter.json";
import Character from "@/character/Character";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ListCharacter",
  created() {
    this.$store.dispatch('getCharacters')
  },
  components: {Character},
  computed: {
    availableChars() {
      return this.$store.state.characterList
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  data() {
    return this.$store.state.characterList;
  },
  methods: {
    onClickChild (value) {
      this.$store.commit('addCharImageToCart', value)
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

<style scoped>
img {
  position: relative;
  right: 10px;
  width: 50px;
  z-index: 5;
}
</style>