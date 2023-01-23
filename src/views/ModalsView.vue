<template>
  <div class="modals">
    <h1>modals-view</h1>

    <div>
      <label>
        Show dark modals?
        <input v-model="showDarkModals" type="checkbox">
      </label>
    </div>

    <button @click="showModal = true">Show modal</button>

    <component
      :is="showDarkModals ? ModalDark : Modal"
      v-model="showModal"
      title="This is modal"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut commodi illo labore, reiciendis sit temporibus! Animi aperiam consequuntur dolores earum quasi repudiandae sequi, suscipit voluptatem! Assumenda labore nisi sit!</p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

const showDarkModals = ref(false);
const showModal = ref(false);
</script>
