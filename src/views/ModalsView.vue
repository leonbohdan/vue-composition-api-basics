<template>
  <div class="modals">
    <h1>modals-view</h1>

    <button @click="showModal = true">Show modal</button>

    <teleport to=".modals-container">
      <div v-if="showModal" class="modal">
        <h1>This is modal</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut commodi illo labore, reiciendis sit temporibus! Animi aperiam consequuntur dolores earum quasi repudiandae sequi, suscipit voluptatem! Assumenda labore nisi sit!</p>

        <button @click="showModal = false">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: beige;
  padding: 10px;
}
</style>
