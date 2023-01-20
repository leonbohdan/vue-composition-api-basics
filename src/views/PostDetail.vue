<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display id {{ $route.params.id }}</p>

    <div>
      <button @click="showPostId">Show post ID</button>
    </div>

    <div>
      <button @click="goHomeIn3Seconds">Go home in 3 sec</button>
    </div>

    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>

    <p>
      <router-link to="/posts">Back</router-link>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`This is post ID: ${route.params.id}`);
};

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push('/');
  }, 3000);
};

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1',
    },
  });
};
</script>
