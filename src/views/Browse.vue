<template>
  <div>
    <header class="browse--nav">
      <img src="../assets/svgs/logo-horizontal.svg" alt="deliveroo logo" />
      <img src="../assets/svgs/user-icon.svg" alt="user icon" />
    </header>
    <main>
      <div class="browse--header">
        <div>
          <p class="browse---header__heading">Location</p>
          <p class="browse---header__neighborhood">
            {{ $store.state.user.neighborhood }}
          </p>
        </div>
        <button class="browse---header__button">
          Change location
        </button>
      </div>
      <ul class="browse--restaurant-list">
        <li v-for="(restaurant) in visibleRestaunts" :key="restaurant.id">
          <card
            :name="restaurant.name"
            :url="restaurant.url"
            :image="restaurant.image"
            :description="getDescription(restaurant)"
          />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Browse",
  components: { Card },
  data() {
    return {
      allRestaurants: [],
      visibleRestaunts: [],
      maxResults: 4
    }
  },
  async created() {
    this.allRestaurants = await this.$store.dispatch("getRestaurants");
    this.visibleRestaunts = this.allRestaurants.splice(0, this.maxResults)
  },
  methods: {
    getDescription(restaurant) {
      const allDescriptionItems = [...restaurant.tags, "£".repeat(restaurant.price)];
      return allDescriptionItems.join(" • ");
    }
  }
}
</script>

<style scoped>
.browse--nav {
  display: flex;
  justify-content: space-between;
  padding: 0.7em 1em;
}

.browse--header {
  background-color: #00ccbc;
  padding: 1em;
}

.browse---header__heading {
  color: #8c9b9b;
  margin-bottom: 0;
}

.browse---header__neighborhood {
  font-size: 2em;
  color: white;
  margin: 0 0 0.7em 0;
}

.browse---header__button {
  color: #00ccbc;
  background-color: white;
  border: none;
  border-radius: 3px;
  height: 4em;
  padding: 0 1.2em;
  font-family: "plex-sans";
}

.browse--restaurant-list {
  list-style: none;
  padding: 1em 0 0 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

/* Desktop and above */
@media only screen and (min-width: 768px) {
  .browse--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2em 3em;
  }
}
</style>