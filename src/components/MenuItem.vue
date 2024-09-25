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
          type="number"
          class="item__input"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        >
      </label>
      개
    </div>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true
    },
    modelValue: {
      type: [Number, null],
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {

  },
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;


  &__label {
    display: inline-flex;
    align-items: center;
    margin-inline-end: -0.2ch;
  }

  &__image {
    height: 7rem;
    width: auto;
    grid-column: span 2;
  }

  &__input {
    margin-inline-start: var(--space-200);
    width: 5ch;
  }
}
</style>
