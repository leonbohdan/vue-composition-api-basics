<template>
  <div class="modals">
    <h1>modals-view</h1>

    <button @click="showModal = true">Show modal</button>

    <modal v-if="showModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
</script>
