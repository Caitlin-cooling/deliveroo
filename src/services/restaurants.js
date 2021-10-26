import mockRestaurantService from "@/services/__mocks__/restaurants";

// eslint-disable-next-line no-unused-vars
async function getRestaurants(neighborhood) {
  return Promise.resolve(mockRestaurantService.mockRestaurantsResponse)
}

export default {
  getRestaurants
}
