<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ title }}</h1>

      <slot />

      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'No title specified',
  },
});

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
