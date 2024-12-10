<template>
  <li class="item">
    <img
      class="item__image"
      alt=""
      :src="imageUrl"
    >
    <div class="item__text">
      <label
        :for="id"
        class="item__label"
      >{{ name }}</label>
      <div class="item__cost">
        {{ cost }}원
      </div>
      <div class="item__amount">
        <input
          :id="id"
          v-model="amount"
          type="number"
          class="item__input"
        >개
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  imageUrl: string;
  id: string;
  cost: number;
}>();

const amount = defineModel<number | null>();
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: var(--space-300);

  &__image {
    grid-column: span 2;
    width: auto;
    height: 7rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input {
    width: 5ch;
    margin-inline-end: 2px;
  }

  &__amount {
    display: flex;
    align-items: center;
  }
}
</style>
