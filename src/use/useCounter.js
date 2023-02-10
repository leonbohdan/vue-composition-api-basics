import {computed, nextTick, onMounted, reactive, watch} from "vue";

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: 'My counter',
  });

  watch(() => counterData.count, (newValue) => {
    if (newValue === 20) {
      alert('Way to go! You made it to 20!!');
    }
  });

  const oddOrEven = computed(() => {
    return counterData.count % 2 === 0 ? 'even' : 'odd';
  });

  const increaseCounter = (amount) => {
    counterData.count += amount;
    nextTick(() => {
      console.log('Do something when counter is updated');
    });
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  onMounted(() => {
    console.log('Do staff related to Counter');
  });

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}