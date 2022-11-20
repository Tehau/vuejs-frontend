<template>
  <div class="flex-items">
    <div class="char-container">
      <div class="photo char-items">
        <img :src="char.data.image"/>
      </div>
      <div class="char-items">
        <div><h4>{{ this.data.name }}</h4></div>
        <div>
          <span :style="deadPeople()">
            <font-awesome-icon icon="fa-solid fa-circle-dot"/>
          </span>
          {{ char.data.status }} - {{ char.data.species }}
        </div>
        <h6>last known location : </h6>
        <div class="location">{{ char.data.location.name }}</div>
        <h6>First seen in : </h6>
        <div class="location">{{ char.data.origin.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Character",
  props: {
    data: {type: Object},
    id: {type: Number}
  },
  computed: {
    char() {
      const {id, data} = this;
      return {
        id: id,
        data: data
      }
    }
  },
  methods: {
    goDetail(character) {
      this.$router.push({
        name: 'Character',
        params: {
          id: character.id,
          data: character
        }
      });
    },
    deadPeople() {
      if (this.data.status === "Dead") return 'color:red'
      if (this.data.status === "Alive") return 'color:green'
      return 'color:grey'
      // color: this.data.status === "Dead" ?
      //     'red' :
      //     'green'
    }
  }
}
</script>

<style scoped>

.flex-items {
  display: block;
  height: 160px;
  order: 0;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
}

.photo img {
  width: 160px;
  height: 160px;
  margin: 0px 20px 0px 0px;
  opacity: 1;
  border-radius: 0.5rem;
  object-position: center center;
  object-fit: cover;
}

.char-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  color: white;
}

.char-items {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

h6 {
  margin: 2px 0 2px 0;
}

.location {
  margin: 0 0 0 10px;
}
</style>