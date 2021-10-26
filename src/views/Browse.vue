<template>
  <main>
    <h1>I am the browse page</h1>
    {{ $store.state.user.fullName }}
  </main>
</template>

<script>
export default {
  name: "Browse",
  data() {
    return {
      restaurants: []
    }
  },
  async created() {
    this.restaurants = await this.$store.dispatch("getRestaurants");
  }
}
</script>