<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter(2)">--</button>
      <button class="btn" @click="decreaseCounter(1)">-</button>

      <span class="counter">{{ counterData.count }}</span>

      <button class="btn" @click="increaseCounter(1)">+</button>
      <button class="btn" @click="increaseCounter(2)">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" v-autofocus type="text">
    </div>
  </div>
</template>

<script setup>
/*
 imports
 */
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  nextTick,
} from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

/*
appTitle
 */
const appTitle = 'My Amazing counter app';

const appTitleRef = ref(null);

onMounted(() => {
  console.log('appTitleRef.value', appTitleRef.value.offsetWidth);
});

/*
counter
 */
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

/*
directives
 */
// const vAutofocus = {
//   mounted: (el) => {
//     el.focus();
//   },
// };
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>

