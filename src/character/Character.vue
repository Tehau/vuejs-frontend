<template>
  <div>{{ char.id }}</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Character",
  props: {
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    char() {
      const {id} = this;
      return {
        id: id
      }
    }
  }
}
</script>

<style scoped>

</style>