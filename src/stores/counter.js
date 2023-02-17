// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

/*
export const useCounterStore1 = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
*/

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My counter',
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? 'even' : 'odd';
    },
  },
  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },

    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
});
