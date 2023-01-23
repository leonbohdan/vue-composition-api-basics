<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>

      <slot />

      <button @click="handleButtonClick">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'No title specified',
  },
});

const emit = defineEmits(['hide-modal']);

const handleButtonClick = () => {
  emit('hide-modal');
};
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
