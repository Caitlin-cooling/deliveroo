import store from "@/store";
import restaurantService from "@/services/restaurants";

jest.mock("@/services/restaurants")

describe("store", () => {
  describe("mutations", () => {
    describe("setUser", () => {
      it("sets the user state", () => {
        const user = {
          fullName: "Caitlin Cooling",
          neighborhood: "Farringon"
        }
        store.commit("setUser", user);
        expect(store.state.user).toEqual(user);
      });
    });

    describe("screenDimensions", () => {
      it("sets the screen dimensions state", () => {
        const dimensions = {
          heigh: "1000",
          width: "500"
        }
        store.commit("setScreenDimensions", dimensions);
        expect(store.state.screenDimensions).toEqual(dimensions);
      });
    });
  });

  describe("actions", () => {
    describe("getRestaurants", () => {
      it("retrieves and returns list of restaurants based on users neighborhood", async () => {
        jest.spyOn(restaurantService, "getRestaurants");
        const response = await store.dispatch("getRestaurants");
        expect(restaurantService.getRestaurants).toHaveBeenCalledWith(store.state.neighborhood);
        expect(response).toEqual(restaurantService.mockRestaurantsResponse.restaurants);
      });
    });
  });
});
