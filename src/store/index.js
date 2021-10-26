import Vue from "vue";
import Vuex from "vuex";
// TODO can we change these imports?
import restaurantService from "../services/restaurants";

Vue.use(Vuex);

const state = {
  user: {
    fullName: "Jane Smith",
    neighborhood: "Fitzrovia"
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

const actions = {
  // TODO should these be saved in the store
  async getRestaurants({ state }) {
    const restaurantsResponse = await restaurantService.getRestaurants(state.neighborhood);
    return restaurantsResponse.restaurants;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});