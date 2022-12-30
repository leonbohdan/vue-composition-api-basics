<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const appTitle = 'My Amazing counter app';

// const counter = ref(0),
//   title = ref('My counter');

const counterData = reactive({
  count: 0,
  title: 'My counter',
});

const increaseCounter = () => {
  counterData.count++;
};

const decreaseCounter = () => {
  counterData.count--;
};

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

