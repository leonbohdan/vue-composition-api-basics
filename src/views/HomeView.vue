<template>
  <div class="home">
    <div>
      <button class="btn" @click="decreaseCounter">-</button>

      <span class="counter">{{ counter }}</span>

      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};

const decreaseCounter = () => {
  counter.value--;
};

</script>

<!--<script>-->
<!--import { ref } from 'vue';-->

<!--export default {-->
<!--  setup() {-->
<!--    const counter = ref(0);-->

<!--    const increaseCounter = () => {-->
<!--      counter.value++;-->
<!--    };-->

<!--    const decreaseCounter = () => {-->
<!--      counter.value&#45;&#45;;-->
<!--    };-->

<!--    return {-->
<!--      counter,-->
<!--      increaseCounter,-->
<!--      decreaseCounter,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      counter: 0,-->
<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    increaseCounter() {-->
<!--      this.counter++;-->
<!--    },-->

<!--    decreaseCounter() {-->
<!--      this.counter&#45;&#45;;-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
</style>

