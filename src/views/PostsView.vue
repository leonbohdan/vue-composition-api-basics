<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`postDetail/${post.id}`">
          {{ post.title }}
        </router-link>
      </li>
    </ul>

    <textarea v-autofocus/>

    <button
      class="counter-button"
      :class="{'yellow': counter.oddOrEven === 'odd'}"
      @click="counter.increaseCounter(1)"
    >
      {{ counter.count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';
import { useCounterStore } from '@/stores/counter.js';

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1',
  },{
    id: 'id2',
    title: 'Post 2',
  },{
    id: 'id3',
    title: 'Post 3',
  },
]);

/*
counter
 */
const counter = useCounterStore();
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 30px;
  width: 100%;
  background-color: pink;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>
