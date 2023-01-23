<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>This is modal</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut commodi illo labore, reiciendis sit temporibus! Animi aperiam consequuntur dolores earum quasi repudiandae sequi, suscipit voluptatem! Assumenda labore nisi sit!</p>

      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>

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
