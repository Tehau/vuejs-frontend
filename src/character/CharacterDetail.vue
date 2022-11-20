<template>
  <div>{{ character.id }}</div>
</template>

<script>
export default {
  name: "CharacterDetail",
  props: {
    data: {type: Object},
    id: {type: Number}
  },
  computed: {
    character() {
      const {id, data} = this;
      return {
        id: id,
        data: data
      }
    }
  },
}
</script>

<style scoped>

</style>