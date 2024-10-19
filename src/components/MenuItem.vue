<template>
  <li class="item">
    <img
      class="item__image"
      alt=""
      :src="imageUrl"
    >
    <div class="item__text">
      <label class="item__label">{{ name }}
        <input
          v-model="amount"
          type="number"
          class="item__input"
        > </label>
      개
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true
  },
})
const amount = defineModel<number | null>()
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: var(--space-300);


  &__label {
    display: inline-flex;
    align-items: center;
    margin-inline-end: -0.2ch;
  }

  &__image {
    grid-column: span 2;
    width: auto;
    height: 7rem;
  }

  &__input {
    width: 5ch;
    margin-inline-start: var(--space-200);
  }
}
</style>
