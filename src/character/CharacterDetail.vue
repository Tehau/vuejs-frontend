<template>
  <div v-if="character">{{ this.character }}</div>
</template>

<script>
export default {
  name: "CharacterDetail",
  props: {
    id: {type: String}
  },
  computed: {
    character() {
      return this.$store.state.character
    }
  },
}
</script>

<style scoped>

</style>