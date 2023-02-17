<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username}} |
    Network Status:
    <span
      :style="{color: online ? 'green' : 'red'}"
    >
      {{ online ? 'Online' : 'Offline'}}
    </span>
  </div>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/modals">Modals</router-link>
    <router-link to="/posts">Posts</router-link>
  </nav>

  <router-view />
</template>

<script setup>
import { reactive, provide } from 'vue';
import { useOnline } from '@vueuse/core';

const online = useOnline();

const userData = reactive({
  name: 'Bohdan',
  username: 'bohdanleon',
});

provide('userData', userData);
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  background: beige;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px;
}
</style>
