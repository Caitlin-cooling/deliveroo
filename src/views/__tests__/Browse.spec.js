import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Browse from "@/views/Browse";

const localVue = createLocalVue();
localVue.use(Vuex);


describe("Browse", () => {
  let wrapperOptions;
  const store = new Vuex.Store({
    state: {
      user: {
        fullName: "Jane Smith",
        neighborhood: "Fitzrovia"
      },
      screenDimensions: {
        width: "",
        height: ""
      }
    },
    actions: {
      getRestaurants: jest.fn()
    }
  })

  beforeEach(() => {
    wrapperOptions = {
      store,
      localVue
    }
  });

  it("component mounts", () => {
    const wrapper = shallowMount(Browse, wrapperOptions);
    expect(wrapper).toBeDefined();
  });
});
