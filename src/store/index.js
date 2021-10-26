import Vue from "vue";
import Vuex from "vuex";
import restaurantService from "@/services/restaurants";

Vue.use(Vuex);

const state = {
  user: {
    fullName: "Jane Smith",
    neighborhood: "Fitzrovia"
  },
  screenDimensions: {
    width: "",
    height: ""
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setScreenDimensions(state, payload) {
    state.screenDimensions = payload
  }
}

const actions = {
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
