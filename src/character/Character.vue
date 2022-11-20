<template>
  <div>{{ char }}</div>
</template>

<script>

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Character",
  props: {
    data: { type: Object },
    id: { type: Number }
  },
  computed: {
    char() {
      const {id, data} = this;
      console.log(this.id)
      return {
        id: id,
        data: data
      }
    }
  }
}
</script>

<style scoped>

</style>