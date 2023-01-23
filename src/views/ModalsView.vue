<template>
  <div class="modals">
    <h1>modals-view</h1>

    <button @click="showModal = true">Show modal</button>

    <modal v-if="showModal">
      <template #title>
        This is modal
      </template>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut commodi illo labore, reiciendis sit temporibus! Animi aperiam consequuntur dolores earum quasi repudiandae sequi, suscipit voluptatem! Assumenda labore nisi sit!</p>
    </modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
</script>
