<template>
  <div v-if="idCard">
    <img v-bind:src="idCard.imageUrl" />
    <h2>{{idCard.name}}</h2>
    <p>{{idCard.text}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      idCard: null
    };
  },
  created() {
    fetch(`https://api.pokemontcg.io/v1/cards/${this.$route.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(({card}) => {
        this.idCard = card;
      });
    console.log(this.idCard);
  }
};
</script>