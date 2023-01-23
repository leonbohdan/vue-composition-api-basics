<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>
        <slot name="title"/>
      </h1>

      <slot />

      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();
console.log(slots.title());
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
