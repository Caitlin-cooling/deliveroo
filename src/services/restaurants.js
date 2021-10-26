import mockRestaurantService from "./__mocks__/restaurants";

// TODO can this be changes to arrow?
// eslint-disable-next-line no-unused-vars
async function getRestaurants(neighborhood) {
  return Promise.resolve(mockRestaurantService.mockRestaurantsResponse)
}

export default {
  getRestaurants
}