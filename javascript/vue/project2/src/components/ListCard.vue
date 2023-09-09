<template>
  <div>
    <h2>{{globalStateHome.view}} pokemons</h2>
    <div>
      <ul class="list-cards">
        <li v-bind:key="pokemon.id" v-for="pokemon in data">
          <router-link v-bind:to="`/card/${pokemon.id}`">
            <img v-bind:src="pokemon.imageUrl" v-bind:alt="pokemon.name" />
          </router-link>
          <FavoriteButton
            @addFavorite="addFavorite($event)"
            @deleFavorite="deleteFavorite($event)"
            v-bind:itemCard="pokemon"
            v-bind:view="globalStateHome.view"
          ></FavoriteButton>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FavoriteButton from "./FavoriteButton";

export default {
  name: "ListCard",
  components: {
    FavoriteButton: FavoriteButton
  },
  props: {
    globalStateHome: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      data: null
    };
  },
  created() {
    this.data = this.$store.state.pokemons;
  },
  beforeUpdate() {
    const { view, querySearch } = this.globalStateHome;
    view === "favorite"
      ? (this.data = this.$store.state.favorite)
      : (this.data = this.$store.state.pokemons);
    if (querySearch) {
      view === "all"
        ? (this.data = this.data.filter(
            item => item.name.toLowerCase().indexOf(querySearch) > -1
          ))
        : (this.data = this.data.filter(
            item => item.name.toLowerCase().indexOf(querySearch) > -1
          ));
    }
  },
  methods: {
    addFavorite: function(itemCard) {
      this.$store.dispatch("Add", itemCard).then(({ ctx, item }) => {
        ctx.commit("AddFavorite", item);
      });
    },
    deleteFavorite: function(itemCard) {
      this.$store.dispatch("DELETE", itemCard).then(({ ctx, item }) => {
        ctx.commit("DELETEfavorite", item);
        this.data = this.$store.state.favorite;
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
h2 {
  text-align: center;
  color: rgb(91, 126, 223);
}
.list-cards {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  padding: 0;
}
.list-cards li {
  padding: 10px;
  margin: 10px;
  width: 150px;
}
.list-cards li img {
  max-width: 100%;
}
</style>